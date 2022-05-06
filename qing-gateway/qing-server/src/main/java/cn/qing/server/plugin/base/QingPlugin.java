package cn.qing.server.plugin.base;

import cn.qing.server.chain.QingPluginChain;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

/**
 * @author conghuhu
 * @create 2022-04-04 13:36
 */
public interface QingPlugin {

    /**
     * 插件执行
     *
     * @param exchange
     * @param chain
     * @return
     */
    Mono<Void> execute(ServerWebExchange exchange, QingPluginChain chain);

    /**
     * 插件名称
     *
     * @return
     */
    default String getName() {
        return "";
    }

    /**
     * 插件顺序
     *
     * @return
     */
    int getOrder();

    /**
     * 是否跳过插件
     *
     * @param exchange
     * @return
     */
    default boolean skip(ServerWebExchange exchange) {
        return false;
    }

}
