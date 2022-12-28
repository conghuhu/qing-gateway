package cn.qing.server.plugin.impl;

import cn.qing.common.constants.CommonConstant;
import cn.qing.common.enums.QingPluginEnum;
import cn.qing.common.enums.ResultEnum;
import cn.qing.server.chain.QingPluginChain;
import cn.qing.server.config.properties.ServerConfigProperties;
import cn.qing.server.plugin.base.AbstractQingPlugin;
import cn.qing.server.utils.SpringContextUtil;
import cn.qing.server.utils.WebClientUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.core.io.buffer.DataBufferFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.util.CollectionUtils;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.Duration;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.TimeoutException;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * @author conghuhu
 * @create 2022/12/28 14:29
 */
@Slf4j
public class WebHttpClientPlugin extends AbstractQingPlugin {

    private final ServerConfigProperties properties;

    public WebHttpClientPlugin(ServerConfigProperties properties) {
        this.properties = properties;
    }

    @Override
    public Mono<Void> execute(ServerWebExchange exchange, QingPluginChain chain) {
        final String url = exchange.getAttribute(CommonConstant.HTTP_URI);
        if (Objects.isNull(url)) {

        }
//        final long timeout = (long) Optional.ofNullable(exchange.getAttribute(CommonConstant.HTTP_TIME_OUT)).orElse(3000L);
        Long timeout = properties.getTimeOutMillis();
        final Duration duration = Duration.ofMillis(timeout);
        final HttpHeaders httpHeaders = buildHttpHeaders(exchange);
        final Mono<ClientResponse> response = doRequest(exchange, exchange.getRequest().getMethodValue(), url, httpHeaders, exchange.getRequest().getBody())
                .timeout(duration, Mono.error(new TimeoutException("Response took longer than timeout: " + duration)))
                .doOnError(e -> log.error(e.getMessage(), e));
        // TODO 可加重试、降级策略
        return response
                .onErrorMap(TimeoutException.class, th -> new ResponseStatusException(HttpStatus.GATEWAY_TIMEOUT, th.getMessage(), th))
                .flatMap((Function<Object, Mono<? extends Void>>) o -> chain.doChain(exchange));
    }

    /**
     * Process the Web request.
     *
     * @param exchange    the current server exchange
     * @param httpMethod  http method, eg.POST
     * @param uri         the request uri
     * @param httpHeaders the request header
     * @param body        the request body
     * @return {@code Mono<Void>} to indicate when request processing is complete
     */
    private Mono<ClientResponse> doRequest(ServerWebExchange exchange, String httpMethod,
                                           String uri, HttpHeaders httpHeaders, Flux<DataBuffer> body) {
        WebClient webClient = SpringContextUtil.getInstance().getBean(WebClient.class);
        return webClient.method(HttpMethod.valueOf(httpMethod)).uri(uri)
                .headers(headers -> headers.addAll(httpHeaders))
                .body(BodyInserters.fromDataBuffers(body))
                .exchangeToMono(response -> response.bodyToMono(byte[].class)
                        .flatMap(bytes -> Mono.fromCallable(() -> Optional.ofNullable(bytes))).defaultIfEmpty(Optional.empty())
                        .flatMap(option -> {
                            final ClientResponse.Builder builder = ClientResponse.create(response.statusCode())
                                    .headers(headers -> headers.addAll(response.headers().asHttpHeaders()))
                                    .cookies(cookies -> cookies.addAll(response.cookies()));
                            if (option.isPresent()) {
                                final DataBufferFactory dataBufferFactory = exchange.getResponse().bufferFactory();
                                return Mono.just(builder.body(Flux.just(dataBufferFactory.wrap(option.get()))).build());
                            }
                            return Mono.just(builder.build());
                        }))
                .doOnSuccess(res -> {
                    if (res.statusCode().is2xxSuccessful()) {
                        exchange.getAttributes().put(CommonConstant.CLIENT_RESPONSE_RESULT_TYPE, ResultEnum.SUCCESS.getName());
                    } else {
                        exchange.getAttributes().put(CommonConstant.CLIENT_RESPONSE_RESULT_TYPE, ResultEnum.ERROR.getName());
                    }
                    exchange.getResponse().setStatusCode(res.statusCode());
                    exchange.getAttributes().put(CommonConstant.CLIENT_RESPONSE_ATTR, res);
                });
    }

    /**
     * Build the http request headers.
     *
     * @param exchange the current server exchange
     * @return HttpHeaders
     */
    private HttpHeaders buildHttpHeaders(final ServerWebExchange exchange) {
        final HttpHeaders headers = new HttpHeaders();
        headers.addAll(exchange.getRequest().getHeaders());
        // remove gzip
        List<String> acceptEncoding = headers.get(HttpHeaders.ACCEPT_ENCODING);
        if (!CollectionUtils.isEmpty(acceptEncoding)) {
            acceptEncoding = Stream.of(String.join(",", acceptEncoding).split(",")).collect(Collectors.toList());
            acceptEncoding.remove(CommonConstant.HTTP_ACCEPT_ENCODING_GZIP);
            headers.set(HttpHeaders.ACCEPT_ENCODING, String.join(",", acceptEncoding));
        }
        return headers;
    }

    @Override
    public String getName() {
        return QingPluginEnum.WEB_HTTP_CLIENT.getName();
    }

    @Override
    public int getOrder() {
        return QingPluginEnum.WEB_HTTP_CLIENT.getOrder();
    }

    @Override
    public boolean skip(ServerWebExchange exchange) {
        return super.skip(exchange);
    }
}
