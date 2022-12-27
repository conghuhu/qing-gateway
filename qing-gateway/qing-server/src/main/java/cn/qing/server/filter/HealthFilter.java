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
package cn.qing.server.filter;

import cn.qing.server.handler.HealthHandler;
import com.alibaba.fastjson.JSON;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

import java.lang.reflect.InvocationTargetException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.Set;

/**
 * 健康检查
 *
 * @author conghuhu
 * @create 2022-04-04 12:03
 */
@Slf4j
@Component
@Order(-99)
public class HealthFilter implements WebFilter {

    private final HealthHandler healthHandler;

    public HealthFilter(HealthHandler healthHandler) {
        this.healthHandler = healthHandler;
    }

    @SneakyThrows
    @Override
    @NonNull
    public Mono<Void> filter(@NonNull final ServerWebExchange exchange, @NonNull final WebFilterChain chain) {
        final String urlPath = exchange.getRequest().getURI().getPath();
        log.info("urlPath: {}", urlPath);
        Set<String> keySet = HealthHandler.HEALTH_MAP.keySet();
        return keySet.contains(urlPath) ? writeHealthInfo(exchange, urlPath) : Objects.requireNonNull(chain).filter(exchange);
    }

    private Mono<Void> writeHealthInfo(final ServerWebExchange exchange, String urlPath) throws InterruptedException, InvocationTargetException, NoSuchMethodException, IllegalAccessException {
        return healthHandler.getHealthInfo(exchange, urlPath);
    }
}
