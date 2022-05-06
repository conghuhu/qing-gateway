package cn.qing.server.handler;

import cn.qing.common.exception.QingException;
import cn.qing.server.utils.QingResponseUtil;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebExceptionHandler;
import reactor.core.publisher.Mono;

/**
 * @author conghuhu
 * @create 2022-04-16 13:39
 */
@Component
@Order(-1)
public class ExceptionHandler implements WebExceptionHandler {

    @NonNull
    @Override
    public Mono<Void> handle(ServerWebExchange exchange, Throwable ex) {
        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(HttpStatus.BAD_REQUEST);
        response.getHeaders().setContentType(MediaType.TEXT_PLAIN);
        String errorResultJson = toStr(ex);
        ex.printStackTrace();
        return QingResponseUtil.doResponse(exchange, errorResultJson);
    }

    private String toStr(Throwable ex) {
        // 已知异常
        if (ex instanceof QingException) {
            return "{\"code\":\"" + ((QingException) ex).getCode() + "\",\"message\":\"" + ((QingException) ex).getErrMsg() + "\"}";
        }
        // 未知异常
        else {
            ex.printStackTrace();
            return ex.toString();
        }
    }
}
