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
package cn.qing.common.enums;

/**
 * @author conghuhu
 * @create 2022-04-04 16:55
 */
public enum QingPluginEnum {
    /**
     * 鉴权插件
     */
    AUTH("Auth", 1, "鉴权插件"),
    /**
     * 限流插件
     */
    CURRENT_LIMITING("CurrentLimiting", 2, "限流插件"),

    /**
     * 路由插件
     */
    DYNAMIC_ROUTE("DynamicRoute", 3, "动态路由插件");

    private String name;

    private Integer order;

    private String desc;

    QingPluginEnum(String name, Integer order, String desc) {
        this.name = name;
        this.order = order;
        this.desc = desc;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
