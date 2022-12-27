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
package cn.qing.server.handler;

import cn.qing.common.enums.QingExceptionEnum;
import cn.qing.common.exception.QingException;
import cn.qing.common.dto.ServiceRuleDTO;
import cn.qing.server.cache.RouteRuleCache;
import cn.qing.server.cache.ServiceCache;
import cn.qing.server.chain.DefaultQingPluginChain;
import cn.qing.server.plugin.base.QingPlugin;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.lang.NonNull;
import org.springframework.util.CollectionUtils;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebHandler;
import reactor.core.publisher.Mono;

/**
 * @author conghuhu
 * @create 2022-04-04 14:35
 */
@Slf4j
public final class QingWebHandler implements WebHandler {

    private List<QingPlugin> plugins;

    public QingWebHandler(List<QingPlugin> plugins) {
        this.plugins = plugins;
        // TODO: shenyu源码中Schedulers这块没看懂，暂时不知道怎么用
    }

    /**
     * 添加plugin,按照优先级排序
     *
     * @param plugin
     */
    public void addPlugin(QingPlugin plugin) {
        if (this.plugins == null) {
            this.plugins = new ArrayList<>();
        }
        this.plugins.add(plugin);
        this.plugins.sort(Comparator.comparingInt(QingPlugin::getOrder));
    }

    @NonNull
    @Override
    public Mono<Void> handle(@NonNull final ServerWebExchange exchange) {
        log.info("QingWebHandler handle");
        String path = parseServiceName(exchange);
        ServiceRuleDTO serviceRule = RouteRuleCache.getServiceRule(path);
        String serviceName = serviceRule.getServiceName();
        if (CollectionUtils.isEmpty(ServiceCache.getAllInstances(serviceName))) {
            throw new QingException(QingExceptionEnum.SERVICE_NOT_FIND);
        }
        return new DefaultQingPluginChain(plugins, serviceName, path).doChain(exchange);
    }

    /**
     * 获取plugins
     */
    public List<QingPlugin> getPlugins() {
        return this.plugins;
    }

    /**
     * 解析serviceName
     *
     * @param exchange
     * @return
     */
    private String parseServiceName(ServerWebExchange exchange) {
        ServerHttpRequest request = exchange.getRequest();
        String path;
        try {
            log.info("原始path为：{}", request.getURI().getPath());
            path = request.getURI().getPath();
        } catch (Exception e) {
            throw new QingException(QingExceptionEnum.PARAM_ERROR);
        }
        return path;
    }
}
