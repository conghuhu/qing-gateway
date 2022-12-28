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
package cn.qing.admin.config.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * the websocket sync strategy properties.
 *
 * @author conghuhu
 * @create 2022/12/28 9:03
 */
@Data
@ConfigurationProperties(prefix = "qing.sync.websocket")
@Configuration
public class WebsocketSyncProperties {

    /**
     * default: true.
     */
    private boolean enabled = true;

    /**
     * default: 9099
     */
    private int port = 9099;

    /**
     * default is 8192.
     */
    private int messageMaxSize;

    /**
     * allowOrigins.
     */
    private String allowOrigins;
}
