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
import java.util.List;
import java.util.Map;

/**
 * @author conghuhu
 * @create 2022-04-07 20:14
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WebsocketMessageDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String eventType;

    private String actionType;

    /**
     * 普通 消息体
     */
    private String detail;

    /**
     * 服务及实例map
     */
    private Map<String, List<ServiceInstance>> serviceMap;

    /**
     * 路由规则map
     */
    private Map<String, ServiceRuleDTO> routeRuleMap;

    /**
     * 在线的服务
     */
    private List<String> onlineServices;

    /**
     * 负载均衡策略
     */
    private List<String> loadBalanceList;

    /**
     * 限流策略map
     */
    private Map<String, LimitRuleDTO> limitRuleMap;

    /**
     * 日志记录
     */
    private List<LogDTO> logDTOList;
}
