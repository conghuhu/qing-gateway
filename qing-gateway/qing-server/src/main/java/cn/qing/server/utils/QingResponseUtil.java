package cn.qing.server.utils;

import org.springframework.http.MediaType;
import org.springframework.util.Assert;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

/**
 * @author conghuhu
 * @create 2022-04-06 14:32
 */
public class QingResponseUtil {
    public static Mono<Void> doResponse(ServerWebExchange exchange, String resp) {
        Assert.notNull(resp, "response object can't be null");
        exchange.getResponse().getHeaders().setContentType(MediaType.APPLICATION_JSON);
        return exchange.getResponse().writeWith(Mono.just(exchange.getResponse()
                .bufferFactory().wrap(resp.getBytes())));
    }
}
