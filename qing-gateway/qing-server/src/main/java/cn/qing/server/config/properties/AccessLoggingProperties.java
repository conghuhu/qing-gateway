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

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * @author conghuhu
 * @create 2023/1/8 10:21
 */
@Data
@ConfigurationProperties(prefix = "qing.logging")
@Configuration
public class AccessLoggingProperties {

    private String strategy = "admin";

    private String topic = "qing-access-logging";

    private String nameserverAddr;

    /**
     * 压缩算法，默认不压缩，目前支持LZ4压缩
     */
    private String compressAlg;

    /**
     * default 512KB.
     */
    private int maxResponseBody = 524288;

    /**
     * default 512kb.
     */
    private int maxRequestBody = 524288;

    /**
     * default 50000.
     */
    private int bufferQueueSize = 50000;

}
