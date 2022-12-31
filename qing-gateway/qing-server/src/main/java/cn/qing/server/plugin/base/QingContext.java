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
package cn.qing.server.plugin.base;

import cn.qing.common.constants.CommonConstant;
import lombok.Data;
import org.springframework.http.server.reactive.ServerHttpRequest;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Optional;

/**
 * qing context.
 *
 * @author conghuhu
 * @create 2022/12/29 23:02
 */
@Data
public class QingContext implements Serializable {

    private static final long serialVersionUID = 8668695964617280718L;

    /**
     * origin path.
     */
    private String path;

    private String timestamp;

    private String appKey;

    /**
     * httpMethod.
     */
    private String httpMethod;

    /**
     * startDateTime.
     */
    private LocalDateTime startDateTime;

    public static QingContext build(final ServerHttpRequest request) {
        String appKey = request.getHeaders().getFirst(CommonConstant.APP_KEY);
        String timestamp = request.getHeaders().getFirst(CommonConstant.TIMESTAMP);
        QingContext qingContext = new QingContext();
        String path = request.getURI().getPath();
        qingContext.setPath(path);
        qingContext.setAppKey(appKey);
        qingContext.setTimestamp(timestamp);
        qingContext.setStartDateTime(LocalDateTime.now());
        Optional.ofNullable(request.getMethod()).ifPresent(httpMethod -> qingContext.setHttpMethod(httpMethod.name()));
        return qingContext;
    }
}
