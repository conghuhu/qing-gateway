package cn.qing.server.chain;

import cn.qing.server.plugin.base.QingPlugin;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.List;

/**
 * 默认插件链实现类
 *
 * @author conghuhu
 * @create 2022-04-04 14:45
 */
@Slf4j
public class DefaultQingPluginChain implements QingPluginChain {

    /**
     * 插件链执行的当前位置
     */
    private int position = 0;
    /**
     * 声明一个插件集合
     */
    private final List<QingPlugin> plugins;

    /**
     * 当前过滤连所在服务名称
     */
    private final String serviceName;

    /**
     * 当前过滤连所在服务对应的路由名称
     */
    private final String routeName;

    /**
     * 插件链的构造方法
     *
     * @param plugins
     * @param serviceName
     * @param routeName
     */
    public DefaultQingPluginChain(final List<QingPlugin> plugins, String serviceName, String routeName) {
        log.info("插件链初始化");
        this.plugins = plugins;
        this.serviceName = serviceName;
        this.routeName = routeName;
    }

    /**
     * 获取插件链所在服务名称
     *
     * @return
     */
    @Override
    public String serviceName() {
        return this.serviceName;
    }

    @Override
    public String routeName() {
        return this.routeName;
    }

    /**
     * 执行插件链
     *
     * @param exchange
     * @return
     */
    @Override
    public Mono<Void> doChain(final ServerWebExchange exchange) {
        if (this.position < plugins.size()) {
            QingPlugin plugin = plugins.get(this.position++);
            boolean skip = plugin.skip(exchange);
            if (skip) {
                return this.doChain(exchange);
            }
            return plugin.execute(exchange, this);
        }
        return Mono.empty();
    }

}
