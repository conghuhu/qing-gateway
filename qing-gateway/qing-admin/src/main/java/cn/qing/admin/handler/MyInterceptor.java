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
package cn.qing.admin.handler;

import cn.qing.admin.service.QUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;

@Slf4j
@Component
public class MyInterceptor implements HandlerInterceptor {

    private final QUserService userService;

    private static final List<String> IGNORE_URI = Arrays.asList("/auth/login",
            "/auth/register", "/swagger",
            "/swagger-ui.html", "/swagger-resources",
            "/v3/api-docs", "/webjars/", "/favicon.ico",
            "/static/", "/error",
            "/js/", "/css/", "/img/", "/fonts/", "/lib/", "/plugins/",
            "login", "html"
    );

    public MyInterceptor(QUserService userService) {
        this.userService = userService;
    }


    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String requestURI = request.getRequestURI();
        for (String uri : IGNORE_URI) {
            if (requestURI.contains(uri)) {
                return true;
            }
        }
        // 设置返回值格式
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json;charset=utf-8");
        String token = request.getHeader("Authorization");
        if (token == null) {
            response.sendError(401, "请先登录");
            return false;
        }

        Boolean tokenEffective = userService.checkToken(token.split(" ")[1]);
        if (!tokenEffective) {
            response.sendError(401, "登录已过期，请重新登录");
        }
        return true;
    }
}
