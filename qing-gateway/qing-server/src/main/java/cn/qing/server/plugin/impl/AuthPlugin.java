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
    public Mono<Void> doExecute(ServerWebExchange exchange, QingPluginChain chain) {
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
