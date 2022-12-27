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

import cn.qing.admin.pojo.vo.MonitorInfoVo;
import cn.qing.admin.service.MonitorService;
import cn.qing.admin.util.RedisUtil;
import cn.qing.admin.pojo.vo.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api(tags = "监控类")
@RestController
@RequestMapping("/monitor")
public class MonitorController {

    @Autowired
    private RedisUtil redisUtil;

    private final MonitorService monitorService;

    public MonitorController(MonitorService monitorService) {
        this.monitorService = monitorService;
    }

    @ApiOperation(value = "获取监控信息", notes = "获取监控信息")
    @GetMapping("/getMonitorInfo")
    public Result<List<MonitorInfoVo>> getMonitorInfo() {
        List<MonitorInfoVo> monitorInfo = monitorService.getMonitorInfo();
        return Result.OK(monitorInfo);
    }

}
