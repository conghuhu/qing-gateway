package cn.qing.server.filter;

import cn.qing.common.constants.QingExceptionEnum;
import cn.qing.common.exception.QingException;
import cn.qing.server.cache.QpsCache;
import cn.qing.server.handler.QingWebHandler;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.lang.NonNull;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

/**
 * 插件过滤器
 *
 * @author conghuhu
 * @create 2022-04-03 15:41
 */
@Slf4j
@Order(-90)
public class PluginFilter implements WebFilter {
    @Autowired
    private QingWebHandler qingWebHandler;

    @NonNull
    @Override
    public Mono<Void> filter(@NonNull ServerWebExchange exchange, @NonNull WebFilterChain chain) {
        log.info("插件过滤器开始执行");
        QpsCache.qps.getAndIncrement();
        return qingWebHandler.handle(exchange);
    }
}
