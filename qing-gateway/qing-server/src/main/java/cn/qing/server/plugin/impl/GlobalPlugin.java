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

import cn.qing.common.constants.CommonConstant;
import cn.qing.common.enums.QingPluginEnum;
import cn.qing.server.chain.QingPluginChain;
import cn.qing.server.plugin.base.AbstractQingPlugin;
import cn.qing.server.plugin.base.QingContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

/**
 * @author conghuhu
 * @create 2022/12/29 23:28
 */
@Slf4j
public class GlobalPlugin extends AbstractQingPlugin {
    @Override
    public Mono<Void> execute(ServerWebExchange exchange, QingPluginChain chain) {
        QingContext context = QingContext.build(exchange.getRequest());
        exchange.getAttributes().put(CommonConstant.CONTEXT, context);
        return chain.doChain(exchange);
    }

    @Override
    public String getName() {
        return QingPluginEnum.GLOBAL.getName();
    }

    @Override
    public int getOrder() {
        return QingPluginEnum.GLOBAL.getOrder();
    }

    @Override
    public boolean skip(ServerWebExchange exchange) {
        return super.skip(exchange);
    }
}
