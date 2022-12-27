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
import io.netty.handler.timeout.ReadTimeoutHandler;
import io.netty.handler.timeout.WriteTimeoutHandler;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;
import reactor.netty.resources.ConnectionProvider;


import java.time.Duration;
import java.util.concurrent.TimeUnit;


/**
 * @author conghuhu
 * @create 2022-04-06 10:29
 */
@Slf4j
@Configuration
public class WebClientConfig {

    private final WebClientProperties webClientProperties;

    public WebClientConfig(WebClientProperties webClientProperties) {
        this.webClientProperties = webClientProperties;
    }

    @Bean
    public WebClient webClient() {
        //配置固定大小连接池
        ConnectionProvider provider = ConnectionProvider
                .builder("httpClient")
                // 等待超时时间
                .pendingAcquireTimeout(Duration.ofSeconds(webClientProperties.getPendingAcquireTimeout()))
                // 最大连接数
                .maxConnections(webClientProperties.getMaxConnections())
                // 等待队列大小
                .pendingAcquireMaxCount(webClientProperties.getPendingAcquireMaxCount())
                // 最大空闲时间
                .maxIdleTime(Duration.ofSeconds(webClientProperties.getMaxIdleTime()))
                .build();
        HttpClient httpClient = HttpClient.create(provider)
                .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 5000)
                //禁用Nagle算法，取消延时发送，允许小包发送
                .option(ChannelOption.TCP_NODELAY, true)
                .doOnConnected(connection -> connection.addHandlerLast(new ReadTimeoutHandler(10000, TimeUnit.MILLISECONDS))
                        .addHandlerLast(new WriteTimeoutHandler(10000, TimeUnit.MILLISECONDS)));
        log.info("webClient初始化完成");
        return WebClient.builder().clientConnector(new ReactorClientHttpConnector(httpClient)).build();
    }

}
