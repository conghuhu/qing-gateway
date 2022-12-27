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
package cn.qing.server.config.properties;

import cn.qing.common.constants.LoadBalanceConstants;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * @author conghuhu
 * @create 2022-04-03 21:36
 */
@Data
@ConfigurationProperties(prefix = "qing.server")
@Configuration
public class ServerConfigProperties {
    /**
     * 负载均衡算法，默认轮询
     */
    private String loadBalance = LoadBalanceConstants.LOAD_BALANCE_ROUND_ROBIN;
    /**
     * 网关超时时间，默认5s
     */
    private Long timeOutMillis = 5000L;
    /**
     * 缓存刷新间隔，默认10s
     */
    private Long cacheRefreshIntervalMillis = 10000L;

    /**
     * websocket服务端口
     */
    private Integer webSocketPort;
}
