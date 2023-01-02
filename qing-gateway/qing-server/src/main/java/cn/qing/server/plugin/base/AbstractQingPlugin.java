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
package cn.qing.server.plugin.base;

import cn.qing.server.chain.QingPluginChain;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

/**
 * @author conghuhu
 * @create 2022-04-04 13:56
 */
@Slf4j
public abstract class AbstractQingPlugin implements QingPlugin {

    @Override
    public Mono<Void> execute(ServerWebExchange exchange, QingPluginChain chain) {
        log.info("{} plugin execute", getName());
        return doExecute(exchange, chain);
    }

    protected abstract Mono<Void> doExecute(ServerWebExchange exchange, QingPluginChain chain);
}
