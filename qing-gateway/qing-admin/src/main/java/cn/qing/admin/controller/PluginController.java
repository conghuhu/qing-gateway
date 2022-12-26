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
