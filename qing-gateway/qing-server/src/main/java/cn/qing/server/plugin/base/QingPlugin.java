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
