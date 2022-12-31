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
package cn.qing.common.constants;

/**
 * @author conghuhu
 * @create 2022-04-05 21:35
 */
public interface CommonConstant {

    /**
     * {@code 500 Server Error} (HTTP/1.0 - RFC 1945)
     */
    public static final Integer SC_INTERNAL_SERVER_ERROR_500 = 500;
    /**
     * {@code 200 OK} (HTTP/1.0 - RFC 1945)
     */
    public static final Integer SC_OK_200 = 200;

    /**
     * 访问权限认证未通过 510
     */
    public static final Integer SC_JEECG_NO_AUTHZ = 510;

    /**
     * The constant HTTP_TIME_OUT.
     */
    String HTTP_TIME_OUT = "httpTimeOut";

    /**
     * The constant HTTP_URI.
     */
    String HTTP_URI = "httpUri";

    /**
     * The constant CLIENT_RESPONSE_ATTR.
     */
    String CLIENT_RESPONSE_ATTR = "webHandlerClientResponse";

    /**
     * http accept encoding gzip.
     */
    String HTTP_ACCEPT_ENCODING_GZIP = "gzip";

    /**
     * The constant CLIENT_RESPONSE_RESULT_TYPE.
     */
    String CLIENT_RESPONSE_RESULT_TYPE = "webHandlerClientResponseResultType";

    /**
     * The constant APP_KEY.
     */
    String APP_KEY = "appKey";

    /**
     * The constant TIMESTAMP.
     */
    String TIMESTAMP = "timestamp";

    /**
     * The constant context.
     */
    String CONTEXT = "context";
}
