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

import lombok.Data;

import java.io.Serializable;

/**
 * 限流规则DTO
 *
 * @author conghuhu
 * @create 2022-04-14 20:50
 */
@Data
public class LimitRuleDTO implements Serializable {
    
    private static final long serialVersionUID = -81259258818147060L;

    /**
     * 限流key，ip或接口名
     */
    private String limitKey;

    /**
     * 限流规则类型,ip还是接口
     */
    private String type;

    /**
     * 限流单位，秒或分钟
     */
    private String timeunit;

    /**
     * 每秒可以访问的次数
     */
    private Integer qps;

    /**
     * 每分钟可以访问的次数
     */
    private Integer qpm;
}
