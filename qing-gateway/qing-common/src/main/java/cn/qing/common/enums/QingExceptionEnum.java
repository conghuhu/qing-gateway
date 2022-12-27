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

import lombok.Getter;

/**
 * @author conghuhu
 * @create 2022-04-03 19:09
 */
@Getter
public enum QingExceptionEnum {
    /**
     * 解析错误
     */
    PARAM_ERROR(1000, "param error"),
    /**
     * 服务未找到
     */
    SERVICE_NOT_FIND(1001, "service not find,maybe not register"),
    /**
     * 无效的配置
     */
    CONFIG_ERROR(1002, "invalid config"),
    /**
     * 用户名或密码错误
     */
    LOGIN_ERROR(1003, "userName or password error"),
    /**
     * 未登录
     */
    NOT_LOGIN(1004, "not login"),
    /**
     * token错误
     */
    TOKEN_ERROR(1005, "token error");

    private Integer code;

    private String message;

    QingExceptionEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }
}
