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
package cn.qing.server.utils;

import cn.qing.common.constants.CommonConstant;
import cn.qing.server.plugin.result.QingResult;
import com.alibaba.fastjson.JSON;
import org.springframework.http.MediaType;
import org.springframework.util.Assert;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;
import java.util.Objects;

/**
 * @author conghuhu
 * @create 2022-04-06 14:32
 */
public class QingResponseUtil {
    public static <T> Mono<Void> doResponse(ServerWebExchange exchange, QingResult<T> res) {
        Assert.notNull(res, "response object can't be null");

        MediaType mediaType = getContentType(exchange);

        exchange.getResponse().getHeaders().setContentType(mediaType);
        return exchange.getResponse().writeWith(Mono.just(exchange.getResponse()
                        .bufferFactory().wrap(JSON.toJSONString(res).getBytes(StandardCharsets.UTF_8)))
                .doOnNext(data -> exchange.getResponse().getHeaders().setContentLength(data.readableByteCount())));
    }


    private static MediaType getContentType(ServerWebExchange exchange) {
        final ClientResponse clientResponse = exchange.getAttribute(CommonConstant.CLIENT_RESPONSE_ATTR);
        if (Objects.nonNull(clientResponse) && clientResponse.headers().contentType().isPresent()) {
            return clientResponse.headers().contentType().get();
        }
        return MediaType.APPLICATION_JSON;
    }
}
