package cn.qing.server.plugin.impl;

import cn.qing.common.constants.QingPluginEnum;
import cn.qing.server.chain.QingPluginChain;
import cn.qing.server.plugin.base.AbstractQingPlugin;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

/**
 * @author conghuhu
 * @create 2022-04-04 16:52
 */
@Slf4j
public class AuthPlugin extends AbstractQingPlugin {
    /**
     * 插件执行
     *
     * @param exchange
     * @param chain
     * @return
     */
    @Override
    public Mono<Void> execute(ServerWebExchange exchange, QingPluginChain chain) {
        log.info("auth plugin execute");
        return chain.doChain(exchange);
    }

    /**
     * 插件名称
     *
     * @return
     */
    @Override
    public String getName() {
        return QingPluginEnum.AUTH.getName();
    }

    /**
     * 插件顺序
     *
     * @return
     */
    @Override
    public int getOrder() {
        return QingPluginEnum.AUTH.getOrder();
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
