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

import cn.qing.admin.entity.QWebsocketInfo;
import cn.qing.admin.pojo.params.WebsocketParam;
import cn.qing.admin.service.CoreService;
import cn.qing.admin.service.QWebsocketInfoService;
import cn.qing.admin.pojo.vo.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * websocket-info控制器
 *
 * @author conghuhu
 * @since 2022-04-08
 */
@Api(tags = "websocket及其服务相关接口")
@RestController
@RequestMapping("/websocket-info")
public class WebsocketInfoController {

    private final QWebsocketInfoService websocketInfoService;

    private final CoreService coreService;

    public WebsocketInfoController(QWebsocketInfoService websocketInfoService, CoreService coreService) {
        this.websocketInfoService = websocketInfoService;
        this.coreService = coreService;
    }

    @ApiOperation(value = "获取网关websocket服务实例列表", notes = "获取网关websocket服务实例列表")
    @GetMapping("/getWebsocketInfo")
    public Result<List<QWebsocketInfo>> getWebsocketInfo() {
        List<QWebsocketInfo> websocketInfoList = websocketInfoService.getWebsocketInfo();
        return Result.OK(websocketInfoList);
    }

    @ApiOperation(value = "移除某个网关结点", notes = "移除某个网关结点")
    @DeleteMapping("/removeGateWayNode/{id}")
    public Result<?> removeGateWayNode(@PathVariable Long id) {
//        String beanName = websocketInfoService.removeGateWayNode(id);
//        coreService.removeGateWayNode(beanName);
        return Result.OK();
    }

    @ApiOperation(value = "添加某个网关结点", notes = "添加某个网关结点")
    @PostMapping("/addGateWayNode")
    public Result<QWebsocketInfo> addGateWayNode(@RequestBody WebsocketParam websocketParam) {
//        QWebsocketInfo websocketInfo = coreService.addGateWayNode(websocketParam.getUri());
        return Result.OK(null);
    }
}
