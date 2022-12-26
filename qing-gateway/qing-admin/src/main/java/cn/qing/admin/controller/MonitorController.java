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
