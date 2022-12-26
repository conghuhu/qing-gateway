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
