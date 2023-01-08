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
package cn.qing.server.plugin.impl;

import cn.qing.common.constants.CommonConstant;
import cn.qing.common.dto.LogDTO;
import cn.qing.common.dto.ServiceInstance;
import cn.qing.common.enums.QingPluginEnum;
import cn.qing.server.cache.LogCache;
import cn.qing.server.chain.QingPluginChain;
import cn.qing.server.plugin.base.AbstractQingPlugin;
import cn.qing.server.utils.HttpUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;
import java.util.Objects;

/**
 * @author conghuhu
 * @create 2023/1/8 19:36
 */
@Slf4j
public class LoggingPlugin extends AbstractQingPlugin {

    private LogCache logCache;

    public LoggingPlugin(LogCache logCache) {
        this.logCache = logCache;
    }

    @Override
    protected Mono<Void> doExecute(ServerWebExchange exchange, QingPluginChain chain) {
        String serviceName = chain.serviceName();
        String routeName = chain.routeName();
        ServiceInstance serviceInstance = exchange.getAttribute(CommonConstant.SERVICE_INSTANCE);
        return chain.doChain(exchange).doOnError(e -> logError(exchange, serviceName, routeName, serviceInstance, e))
                .doOnSuccess(s -> recordLog(exchange, serviceName, routeName, serviceInstance));
    }

    /**
     * 记录log至本地缓存
     *
     * @param exchange
     * @param serviceName
     * @param routeName
     * @param serviceInstance
     */
    private void recordLog(final ServerWebExchange exchange, String serviceName,
                           String routeName, ServiceInstance serviceInstance) {
        boolean res = logCache.addLogDTO(LogDTO.builder()
                .method(exchange.getRequest().getMethodValue())
                .queryParams(exchange.getRequest().getURI().getQuery())
                .userAgent(exchange.getRequest().getHeaders().getFirst("User-Agent"))
                .requestHeader(HttpUtil.getHeaders(exchange.getRequest().getHeaders()))
                .originIP(HttpUtil.getIpAddress(exchange.getRequest()))
                .originURI(exchange.getRequest().getPath().value())
                .proxyURI(exchange.getAttribute(CommonConstant.HTTP_URI))
                .routeName(routeName)
                .targetService(serviceName)
                .serviceInstance(serviceInstance)
                .createdTime(LocalDateTime.now())
                .traceId(exchange.getAttribute(CommonConstant.TRACE_ID))
                .build());
        if (!res) {
            log.error("local logging queue may be fulled, add log error.");
        }
    }

    private void logError(final ServerWebExchange exchange, String serviceName,
                          String routeName, ServiceInstance serviceInstance, final Throwable throwable) {
        HttpStatus httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        if (throwable instanceof ResponseStatusException) {
            httpStatus = ((ResponseStatusException) throwable).getStatus();
        }
        boolean res = logCache.addLogDTO(LogDTO.builder()
                .method(exchange.getRequest().getMethodValue())
                .status(httpStatus.value())
                .queryParams(exchange.getRequest().getURI().getQuery())
                .userAgent(exchange.getRequest().getHeaders().getFirst("User-Agent"))
                .requestHeader(HttpUtil.getHeaders(exchange.getRequest().getHeaders()))
                .originIP(HttpUtil.getIpAddress(exchange.getRequest()))
                .originURI(exchange.getRequest().getPath().value())
                .proxyURI(exchange.getAttribute(CommonConstant.HTTP_URI))
                .routeName(routeName)
                .targetService(serviceName)
                .serviceInstance(serviceInstance)
                .createdTime(LocalDateTime.now())
                .traceId(exchange.getAttribute(CommonConstant.TRACE_ID))
                .status(Objects.requireNonNull(exchange.getResponse().getStatusCode()).value())
                .build());
        if (!res) {
            log.error("local logging queue may be fulled, add log error.");
        }
    }

    @Override
    public String getName() {
        return QingPluginEnum.LOGGING.getName();
    }

    @Override
    public int getOrder() {
        return QingPluginEnum.LOGGING.getOrder();
    }

    @Override
    public boolean skip(ServerWebExchange exchange) {
        return super.skip(exchange);
    }
}
