package cn.qing.server.plugin.impl;

import cn.qing.common.constants.QingPluginEnum;
import cn.qing.common.dto.LimitRuleDTO;
import cn.qing.server.cache.LimitRuleCache;
import cn.qing.server.chain.QingPluginChain;
import cn.qing.server.plugin.base.AbstractQingPlugin;
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
    public Mono<Void> execute(ServerWebExchange exchange, QingPluginChain chain) {
        log.info("CurrentLimitingPlugin execute");
        ServerHttpRequest request = exchange.getRequest();
        String ipAddress = HttpUtil.getIpAddress(request);
        String path = request.getPath().value();
        String errorResultJson = "{\"code\":\"500\",\"message\":\"访问过于频繁，请稍后再试\"}";
        if (LimitRuleCache.getLimitRuleMap().containsKey(ipAddress)) {
            // 先对ip进行限流
            Flux<Long> acquire = getAcquire(ipAddress);
            return acquire.collectList().flatMap(list -> {
                if (list.get(0) == 1) {
                    return chain.doChain(exchange);
                } else {
                    return QingResponseUtil.doResponse(exchange, errorResultJson);
                }
            });
        } else if (LimitRuleCache.getLimitRuleMap().containsKey(path)) {
            // 再对接口进行限流
            Flux<Long> acquire = getAcquire(path);
            return acquire.collectList().flatMap(list -> {
                if (list.get(0) == 1) {
                    return chain.doChain(exchange);
                } else {
                    return QingResponseUtil.doResponse(exchange, errorResultJson);
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
