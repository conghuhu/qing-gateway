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


import cn.qing.admin.entity.QPlugin;
import cn.qing.admin.service.QPluginService;
import cn.qing.admin.pojo.vo.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 插件控制器
 *
 * @author conghuhu
 * @since 2022-04-08
 */
@Api(tags = "插件相关接口")
@RestController
@RequestMapping("/plugin")
public class PluginController {

    @Autowired
    private QPluginService pluginService;

    @ApiOperation(value = "获取插件列表", notes = "获取插件列表")
    @GetMapping("/getPluginList")
    public Result<List<QPlugin>> getPluginList() {
        List<QPlugin> pluginList = pluginService.getPluginList();
        return Result.OK(pluginList);
    }
}
