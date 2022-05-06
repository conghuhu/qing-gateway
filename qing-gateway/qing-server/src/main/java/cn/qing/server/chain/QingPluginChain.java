package cn.qing.server.chain;

import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

/**
 * 插件链
 *
 * @author cgq
 * @version 1.0
 * @date 2022/4/4
 * @since 1.0
 */
public interface QingPluginChain {

    /**
     * 获取插件链所在服务名称
     *
     * @return
     */
    String serviceName();

    /**
     * 插件链所在的服务对应的路由名称
     *
     * @return
     */
    String routeName();

    /**
     * 执行插件链
     *
     * @param exchange
     * @return
     */
    Mono<Void> doChain(ServerWebExchange exchange);
}
