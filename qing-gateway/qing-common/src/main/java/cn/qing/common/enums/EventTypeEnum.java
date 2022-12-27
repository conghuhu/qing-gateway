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
 * @create 2022-04-07 20:36
 */
public enum EventTypeEnum {

    /**
     * 服务相关
     */
    SERVICE("service"),

    /**
     * 路由规则相关
     */
    RULE("rule"),

    /**
     * 插件相关
     */
    PLUGIN("plugin"),

    /**
     * 握手相关
     */
    HAND_SHAKE("handshake"),

    /**
     * 负载均衡相关
     */
    LOAD_BALANCE("loadBalance"),

    /**
     * 上线初始化相关
     */
    ONLINE("online"),

    /**
     * 限流规则相关
     */
    LIMIT_RULE("limitRule"),

    /**
     * 日志相关
     */
    LOG("log"),
    ;

    private String name;


    EventTypeEnum(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
