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
     * 当前过滤连所在服务对应的path
     */
    private final String path;

    /**
     * 插件链的构造方法
     *
     * @param plugins
     * @param serviceName
     * @param path
     */
    public DefaultQingPluginChain(final List<QingPlugin> plugins, String serviceName, String path) {
        log.info("插件链初始化");
        this.plugins = plugins;
        this.serviceName = serviceName;
        this.path = path;
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
        return this.path;
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
