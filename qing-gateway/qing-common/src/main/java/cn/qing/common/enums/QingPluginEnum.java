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
     * 入口插件
     */
    GLOBAL("Global", 0, "入口插件"),
    /**
     * tracing 插件
     */
    TRACING("Tracing", 1, "tracing 插件"),
    /**
     * metrics插件
     */
    METRICS("Metrics", 2, "metrics插件"),
    /**
     * 鉴权插件
     */
    AUTH("Auth", 3, "鉴权插件"),
    /**
     * 限流插件
     */
    CURRENT_LIMITING("CurrentLimiting", 4, "限流插件"),
    /**
     * 路由插件
     */
    DYNAMIC_ROUTE("DynamicRoute", 5, "动态路由插件"),
    /**
     * web client插件
     */
    WEB_HTTP_CLIENT("WebHttpClient", 6, "http client插件");

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
