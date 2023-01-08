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
package cn.qing.common.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LogDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * http method
     */
    private String method;

    private String requestHeader;

    private String queryParams;

    /**
     * 源IP
     */
    private String originIP;

    /**
     * 源URI
     */
    private String originURI;

    /**
     * 目标路由服务
     */
    private String targetService;

    /**
     * 具体服务实例
     */
    private ServiceInstance serviceInstance;

    /**
     * 路由
     */
    private String routeName;

    /**
     * 代理URI
     */
    private String proxyURI;

    /**
     * traceId
     */
    private String traceId;

    private String userAgent;

    private Integer status;

    private String responseBody;

    private Integer contentLength;

    /**
     * 创建时间
     */
    private LocalDateTime createdTime;

}
