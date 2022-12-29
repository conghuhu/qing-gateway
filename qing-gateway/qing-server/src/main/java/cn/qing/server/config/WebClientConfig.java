/*
 * Copyright 2023 qing-gateway
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package cn.qing.server.config;

import cn.qing.server.config.properties.WebClientProperties;
import io.netty.channel.ChannelOption;
import io.netty.handler.ssl.util.InsecureTrustManagerFactory;
import io.netty.handler.timeout.IdleStateHandler;
import io.netty.handler.timeout.ReadTimeoutHandler;
import io.netty.handler.timeout.WriteTimeoutHandler;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.PropertyMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.util.StringUtils;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;
import reactor.netty.resources.ConnectionProvider;
import reactor.netty.resources.LoopResources;
import reactor.netty.tcp.DefaultSslContextSpec;
import reactor.netty.tcp.SslProvider;
import reactor.netty.transport.ProxyProvider;

import java.security.cert.X509Certificate;
import java.time.Duration;
import java.util.Objects;
import java.util.concurrent.TimeUnit;

/**
 * @author conghuhu
 * @create 2022-04-06 10:29
 */
@Slf4j
@Configuration
public class WebClientConfig {

    /**
     * Http client properties.
     *
     * @return the http client properties
     */
    @Bean
    @ConfigurationProperties(prefix = "qing.httpclient")
    public WebClientProperties httpClientProperties() {
        return new WebClientProperties();
    }

    /**
     * Http client loop resource.
     *
     * @param properties the properties
     * @return the http client loop resource
     */
    @Bean
    @ConditionalOnProperty("qing.httpclient.thread-pool.prefix")
    public LoopResources httpClientLoopResource(final WebClientProperties properties) {
        WebClientProperties.ThreadPool threadPool = properties.getThreadPool();
        return LoopResources.create(threadPool.getPrefix(), threadPool.getSelectCount(),
                threadPool.getWorkerCount(), threadPool.getDaemon());
    }

    /**
     * Shenyu http client.
     *
     * @param properties the properties
     * @param provider   the loop resources bean provider
     * @return the http client
     */
    @Bean
    public HttpClient httpClient(final WebClientProperties properties,
                                 final ObjectProvider<LoopResources> provider) {
        // configure pool resources.
        WebClientProperties.Pool pool = properties.getPool();
        ConnectionProvider connectionProvider = buildConnectionProvider(pool);
        HttpClient httpClient = HttpClient.create(connectionProvider)
                .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, properties.getConnectTimeout());
        WebClientProperties.Proxy proxy = properties.getProxy();
        if (StringUtils.hasText(proxy.getHost())) {
            httpClient = setHttpClientProxy(httpClient, proxy);
        }
        httpClient.doOnConnected(connection -> {
            connection.addHandlerLast(new IdleStateHandler(properties.getReaderIdleTime(), properties.getWriterIdleTime(), properties.getAllIdleTime(), TimeUnit.MILLISECONDS));
            connection.addHandlerLast(new WriteTimeoutHandler(properties.getWriteTimeout(), TimeUnit.MILLISECONDS));
            connection.addHandlerLast(new ReadTimeoutHandler(properties.getReadTimeout(), TimeUnit.MILLISECONDS));
        });
        final LoopResources loopResources = provider.getIfAvailable();
        if (Objects.nonNull(loopResources)) {
            httpClient.runOn(loopResources);
        }
        WebClientProperties.Ssl ssl = properties.getSsl();
        if (StringUtils.hasText(ssl.getKeyStorePath())
                || ssl.getTrustedX509CertificatesForTrustManager().length != 0
                || ssl.isUseInsecureTrustManager()) {
            httpClient = httpClient.secure(sslContextSpec -> setSsl(sslContextSpec, ssl));
        }
        if (properties.isWiretap()) {
            httpClient = httpClient.wiretap(true);
        }
        // set to false, fix java.io.IOException: Connection reset by peer
        // see https://github.com/reactor/reactor-netty/issues/388
        return httpClient.keepAlive(properties.isKeepAlive());
    }

    /**
     * set http proxy.
     *
     * @param httpClient http client
     * @param proxy      proxy
     * @return HttpClient
     */
    private HttpClient setHttpClientProxy(final HttpClient httpClient, final WebClientProperties.Proxy proxy) {
        return httpClient.proxy(proxySpec -> {
            ProxyProvider.Builder builder = proxySpec
                    .type(ProxyProvider.Proxy.HTTP)
                    .host(proxy.getHost());
            PropertyMapper map = PropertyMapper.get();
            map.from(proxy::getPort).whenNonNull().to(builder::port);
            map.from(proxy::getUsername).whenHasText()
                    .to(builder::username);
            map.from(proxy::getPassword).whenHasText()
                    .to(password -> builder.password(s -> password));
            map.from(proxy::getNonProxyHostsPattern).whenHasText()
                    .to(builder::nonProxyHosts);
        });
    }

    private void setSsl(final SslProvider.SslContextSpec sslContextSpec, final WebClientProperties.Ssl ssl) {
        SslProvider.ProtocolSslContextSpec spec = DefaultSslContextSpec.forClient()
                .configure(sslContextBuilder -> {
                    X509Certificate[] trustedX509Certificates = ssl.getTrustedX509CertificatesForTrustManager();
                    if (trustedX509Certificates.length != 0) {
                        sslContextBuilder.trustManager(trustedX509Certificates);
                    } else if (ssl.isUseInsecureTrustManager()) {
                        sslContextBuilder.trustManager(InsecureTrustManagerFactory.INSTANCE);
                    }
                    sslContextBuilder.keyManager(ssl.getKeyManagerFactory());
                    sslContextBuilder.sslProvider(ssl.getDefaultConfigurationType());
                });
        sslContextSpec.sslContext(spec)
                .handshakeTimeout(ssl.getHandshakeTimeout())
                .closeNotifyFlushTimeout(ssl.getCloseNotifyFlushTimeout())
                .closeNotifyReadTimeout(ssl.getCloseNotifyReadTimeout());
    }

    private ConnectionProvider buildConnectionProvider(final WebClientProperties.Pool pool) {
        ConnectionProvider connectionProvider;
        if (pool.getType() == WebClientProperties.Pool.PoolType.DISABLED) {
            connectionProvider = ConnectionProvider.newConnection();
        } else if (pool.getType() == WebClientProperties.Pool.PoolType.FIXED) {
            // reactor remove fixed pool by fixed method from 0.9.4
            // reason: https://github.com/reactor/reactor-netty/issues/1499 and https://github.com/reactor/reactor-netty/issues/1960
            connectionProvider = buildFixedConnectionPool(pool.getName(), pool.getMaxConnections(), pool.getAcquireTimeout(), pool.getMaxIdleTime());
        } else {
            // please see https://projectreactor.io/docs/netty/release/reference/index.html#_connection_pool_2
            // reactor remove elastic pool by elastic method from 0.9.4
            // reason: https://github.com/reactor/reactor-netty/issues/1499 and https://github.com/reactor/reactor-netty/issues/1960
            connectionProvider = buildElasticConnectionPool(pool.getName(), pool.getMaxIdleTime());
        }
        return connectionProvider;
    }

    /**
     * build fixed connection pool.
     *
     * @param poolName       pool name
     * @param maxConnections max connections
     * @param acquireTimeout pending acquire timeout
     * @param maxIdleTime    max idle time
     * @return {@link ConnectionProvider}
     */
    public ConnectionProvider buildFixedConnectionPool(final String poolName, final Integer maxConnections,
                                                       final Long acquireTimeout, final Duration maxIdleTime) {
        if (maxConnections <= 0) {
            throw new IllegalArgumentException("Max Connections value must be strictly positive");
        }
        if (acquireTimeout < 0) {
            throw new IllegalArgumentException("Acquire Timeout value must be positive");
        }
        return ConnectionProvider.builder(poolName)
                .maxConnections(maxConnections)
                .pendingAcquireTimeout(Duration.ofMillis(acquireTimeout))
                .maxIdleTime(maxIdleTime)
                .build();
    }

    /**
     * build elastic connection provider pool.
     *
     * @param poolName    pool name
     * @param maxIdleTime max idle time
     * @return {@link ConnectionProvider} elastic pool
     */
    public ConnectionProvider buildElasticConnectionPool(final String poolName, final Duration maxIdleTime) {
        // about the args, please see https://projectreactor.io/docs/netty/release/reference/index.html#_connection_pool_2
        return ConnectionProvider.builder(poolName)
                .maxConnections(Integer.MAX_VALUE)
                .pendingAcquireTimeout(Duration.ofMillis(0))
                .pendingAcquireMaxCount(-1)
                .maxIdleTime(maxIdleTime)
                .build();
    }

    @Bean
    public WebClient webClient(final WebClientProperties properties,
                               final ObjectProvider<HttpClient> httpClient) {
        log.info("webClient初始化完成");
        return WebClient.builder()
                .exchangeStrategies(ExchangeStrategies.builder()
                        // detail see https://stackoverflow.com/questions/59326351/configure-spring-codec-max-in-memory-size-when-using-reactiveelasticsearchclient
                        .codecs(codecs -> codecs.defaultCodecs().maxInMemorySize(properties.getMaxInMemorySize() * 1024 * 1024))
                        .build())
                .clientConnector(new ReactorClientHttpConnector(Objects.requireNonNull(httpClient.getIfAvailable())))
                .build();
    }

}
