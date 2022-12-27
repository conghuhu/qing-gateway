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

/**
 * @author conghuhu
 * @create 2022-04-07 10:21
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ServiceRuleDTO implements Serializable {

    private static final long serialVersionUID = -66469240129393501L;

    /**
     * 路由名字,对应predicates
     */
    private String routeName;

    /**
     * 路由对应转发的服务名
     */
    private String serviceName;


    /**
     * 优先级，值越大优先级越高
     */
    private Integer priority;

}
