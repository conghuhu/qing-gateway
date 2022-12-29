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
package cn.qing.server.handler;

import cn.qing.common.exception.QingException;
import cn.qing.server.plugin.result.QingResult;
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
        ex.printStackTrace();
        return QingResponseUtil.doResponse(exchange, QingResult.error(toStr(ex)));
    }

    private String toStr(Throwable ex) {
        // 已知异常
        if (ex instanceof QingException) {
            return ((QingException) ex).getErrMsg();
        }
        // 未知异常
        else {
            return ex.toString();
        }
    }
}
