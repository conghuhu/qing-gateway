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
