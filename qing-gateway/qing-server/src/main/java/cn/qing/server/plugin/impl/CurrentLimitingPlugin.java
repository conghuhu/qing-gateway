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

import cn.qing.common.enums.QingPluginEnum;
import cn.qing.common.dto.LimitRuleDTO;
import cn.qing.server.cache.LimitRuleCache;
import cn.qing.server.chain.QingPluginChain;
import cn.qing.server.plugin.base.AbstractQingPlugin;
import cn.qing.server.plugin.result.QingResult;
import cn.qing.server.utils.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * 限流插件-滑动窗口
 *
 * @author conghuhu
 * @create 2022-04-14 20:29
 */
@Slf4j
public class CurrentLimitingPlugin extends AbstractQingPlugin {

    private RateLimiter rateLimiter;

    public CurrentLimitingPlugin(RateLimiter rateLimiter) {
        log.info("CurrentLimitingPlugin init");
        this.rateLimiter = rateLimiter;
    }

    /**
     * 插件执行
     *
     * @param exchange
     * @param chain
     * @return
     */
    @Override
    public Mono<Void> doExecute(ServerWebExchange exchange, QingPluginChain chain) {
        ServerHttpRequest request = exchange.getRequest();
        String ipAddress = HttpUtil.getIpAddress(request);
        String path = request.getPath().value();
        if (LimitRuleCache.getLimitRuleMap().containsKey(ipAddress)) {
            // 先对ip进行限流
            Flux<Long> acquire = getAcquire(ipAddress);
            return acquire.collectList().flatMap(list -> {
                if (list.get(0) == 1) {
                    return chain.doChain(exchange);
                } else {
                    return QingResponseUtil.doResponse(exchange, QingResult.error("访问过于频繁，请稍后再试"));
                }
            });
        } else if (LimitRuleCache.getLimitRuleMap().containsKey(path)) {
            // 再对接口进行限流
            Flux<Long> acquire = getAcquire(path);
            return acquire.collectList().flatMap(list -> {
                if (list.get(0) == 1) {
                    return chain.doChain(exchange);
                } else {
                    return QingResponseUtil.doResponse(exchange, QingResult.error("访问过于频繁，请稍后再试"));
                }
            });
        }
        return chain.doChain(exchange);
    }

    /**
     * 获取请求权限-限流
     *
     * @param key
     * @return
     */
    private Flux<Long> getAcquire(String key) {
        LimitRuleDTO limitRule = LimitRuleCache.getLimitRule(key);
        String timeUnit = limitRule.getTimeunit();
        return this.rateLimiter.acquire(key,
                "seconds".equals(timeUnit) ? limitRule.getQps() : limitRule.getQpm(),
                timeUnit);
    }


    /**
     * 插件名称
     *
     * @return
     */
    @Override
    public String getName() {
        return QingPluginEnum.CURRENT_LIMITING.getName();
    }

    /**
     * 插件顺序
     *
     * @return
     */
    @Override
    public int getOrder() {
        return QingPluginEnum.DYNAMIC_ROUTE.getOrder();
    }

    /**
     * 是否跳过插件
     *
     * @param exchange
     * @return
     */
    @Override
    public boolean skip(ServerWebExchange exchange) {
        return super.skip(exchange);
    }
}
