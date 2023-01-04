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

import cn.qing.admin.cache.LoadBalanceCache;
import cn.qing.admin.entity.QLog;
import cn.qing.admin.entity.QNacosInfo;
import cn.qing.admin.entity.QWebsocketInfo;
import cn.qing.admin.pojo.params.PageParam;
import cn.qing.admin.pojo.vo.ConfigInfo;
import cn.qing.admin.pojo.vo.PageResult;
import cn.qing.admin.service.CoreService;
import cn.qing.admin.pojo.params.InitParam;
import cn.qing.admin.service.QLogService;
import cn.qing.admin.service.QNacosInfoService;
import cn.qing.admin.service.QWebsocketInfoService;
import cn.qing.admin.pojo.vo.Result;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.util.List;
import java.util.concurrent.ExecutionException;

/**
 * @author conghuhu
 * @create 2022-04-09 14:21
 */
@Api(tags = "系统相关接口")
@RestController
@RequestMapping("/sys")
@Validated
public class SystemController {

    private final QWebsocketInfoService websocketInfoService;
    private final QNacosInfoService qNacosInfoService;
    private final CoreService coreService;

    private final QLogService logService;

    public SystemController(QWebsocketInfoService websocketInfoService, QNacosInfoService qNacosInfoService, CoreService coreService, QLogService logService) {
        this.websocketInfoService = websocketInfoService;
        this.qNacosInfoService = qNacosInfoService;
        this.coreService = coreService;
        this.logService = logService;
    }

    /**
     * {
     * "nacosServerAddr": "124.222.60.243:8848",
     * }
     */
    @ApiOperation(value = "初始化系统参数", notes = "初始化系统参数")
    @PostMapping("/init")
    public Result<?> init(@Valid @RequestBody InitParam initDTO) throws ExecutionException, InterruptedException {
        coreService.init(initDTO);
        return Result.OK();
    }

    @ApiOperation(value = "查询系统是否已经初始化", notes = "查询系统是否已经初始化")
    @GetMapping("/queryInitStatus")
    public Result<?> queryInitStatus() {
        Boolean status = coreService.queryInitStatus();
        JSONObject res = new JSONObject();
        res.put("status", status);
        return Result.OK(res);
    }

    @ApiOperation(value = "系统重置", notes = "系统重置")
    @PostMapping("/reset")
    public Result<?> reset(@Valid @RequestBody InitParam initDTO) throws ExecutionException, InterruptedException {
        coreService.reset(initDTO);
        return Result.OK();
    }

    @ApiOperation(value = "系统初始化配置信息", notes = "系统初始化配置信息")
    @GetMapping("/getCurrentConfig")
    public Result<ConfigInfo> getCurrentConfig() {
        QNacosInfo qNacosInfo = qNacosInfoService.getOne(new LambdaQueryWrapper<>());
        List<QWebsocketInfo> websocketInfoList = websocketInfoService.getAll();
        ConfigInfo configInfo = new ConfigInfo();
        configInfo.setNacosInfo(qNacosInfo);
        configInfo.setWebsocketInfoList(websocketInfoList);
        return Result.OK(configInfo);
    }

    @ApiOperation(value = "改变负载均衡策略", notes = "改变负载均衡策略")
    @PutMapping("/changeLoadBalance")
    public Result<?> changeLoadBalance(@NotBlank @RequestParam("loadBalance") String loadBalance) {
        coreService.changeLoadBalance(loadBalance);
        return Result.OK();
    }

    @ApiOperation(value = "获取当前选中负载均衡策略", notes = "获取当前选中负载均衡策略")
    @GetMapping("/getCurrentLoadBalance")
    public Result<?> getCurrentLoadBalance() {
        String loadBalance = LoadBalanceCache.getCurrentLoadBalance();
        return Result.OK(loadBalance);
    }

    @ApiOperation(value = "获取负载均衡策略", notes = "获取负载均衡策略")
    @GetMapping("/getLoadBalance")
    public Result<List<String>> getLoadBalance() {
        List<String> loadBalanceList = coreService.getLoadBalance();
        return Result.OK(loadBalanceList);
    }

    @ApiOperation(value = "获取调用行为日志", notes = "获取调用行为日志")
    @PostMapping("/getInvokeLogs")
    public Result<PageResult<List<QLog>>> getInvokeLogs(@Valid @RequestBody PageParam pageParam) {
        PageResult<List<QLog>> result = logService.getInvokeLogs(pageParam);
        return Result.OK(result);
    }
}
