package cn.qing.server.utils;

import cn.qing.server.config.properties.ServerConfigProperties;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClient.RequestBodySpec;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.time.Duration;
import java.util.concurrent.TimeoutException;

/**
 * @author conghuhu
 * @create 2022-04-06 13:03
 */
@Slf4j
@Component
public class WebClientUtils {

    private final ServerConfigProperties serverConfigProperties;

    private final WebClient webClient;

    public WebClientUtils(ServerConfigProperties serverConfigProperties, WebClient webClient) {
        this.serverConfigProperties = serverConfigProperties;
        this.webClient = webClient;
    }

    /**
     * 发送请求
     *
     * @param exchange
     * @param url
     * @return
     */
    public Mono<Void> execute(ServerWebExchange exchange, String url) {
        ServerHttpRequest request = exchange.getRequest();
        ServerHttpResponse response = exchange.getResponse();
        HttpMethod method = request.getMethod();

        assert method != null;
        RequestBodySpec requestBodySpec = this.webClient
                // 请求方法
                .method(method)
                // 请求url和参数
                .uri(url)
                .headers(headers -> headers.addAll(request.getHeaders()))
                .accept(MediaType.APPLICATION_JSON);

        WebClient.RequestHeadersSpec<?> reqHeadersSpec;
        if (requireHttpBody(method)) {
            reqHeadersSpec = requestBodySpec.body(BodyInserters.fromDataBuffers(request.getBody()));
        } else {
            reqHeadersSpec = requestBodySpec;
        }

        log.info("网关处理完成:{}", url);

        return reqHeadersSpec.exchange().timeout(Duration.ofMillis(serverConfigProperties.getTimeOutMillis()))
                .onErrorResume(ex -> Mono.defer(() -> {
                    String errorResultJson = "";
                    if (ex instanceof TimeoutException) {
                        errorResultJson = "{\"code\":5001,\"message\":\"network timeout\"}";
                    } else {
                        errorResultJson = "{\"code\":5000,\"message\":\"system error\"}";
                    }
                    return QingResponseUtil.doResponse(exchange, errorResultJson);
                }).then(Mono.empty()))
                .flatMap(responseSpec -> {
                    response.setStatusCode(responseSpec.statusCode());
                    response.getHeaders().putAll(responseSpec.headers().asHttpHeaders());
                    return response.writeWith(responseSpec.bodyToMono(DataBuffer.class));
                });
    }

    /**
     * method是否需要body
     *
     * @param method
     * @return
     */
    public boolean requireHttpBody(HttpMethod method) {
        return method.equals(HttpMethod.POST) || method.equals(HttpMethod.PUT) || method.equals(HttpMethod.PATCH);
    }
}
