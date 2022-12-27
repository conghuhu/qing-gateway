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
package cn.qing.admin.controller;


import cn.qing.admin.pojo.params.RegisterParam;
import cn.qing.admin.service.QUserService;
import cn.qing.admin.pojo.vo.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

/**
 * 鉴权
 *
 * @author conghuhu
 * @since 2022-04-24
 */
@Api(tags = "鉴权类")
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final QUserService userService;

    public AuthController(QUserService userService) {
        this.userService = userService;
    }

    @ApiOperation(value = "注册用户", notes = "注册用户")
    @PostMapping("/register")
    public Result<?> register(@RequestBody RegisterParam registerParam) {
        String token = userService.register(registerParam);
        if (StringUtils.hasLength(token)) {
            return Result.OK(token);
        } else {
            return Result.error("注册失败，请检查账号，可能已存在");
        }
    }

    @ApiOperation(value = "登录接口", notes = "登录接口")
    @PostMapping("/login")
    public Result<?> login(@RequestBody RegisterParam registerParam) {
        String token = userService.login(registerParam);
        if (StringUtils.hasLength(token)) {
            return Result.OK(token);
        } else {
            return Result.error("登录失败，请检查账号或密码");
        }
    }
}
