package cn.qing.admin.controller;


import cn.qing.admin.entity.QRouteRule;
import cn.qing.admin.pojo.vo.RouteRuleVo;
import cn.qing.admin.service.QRouteRuleService;
import cn.qing.admin.pojo.params.RouteRuleParam;
import cn.qing.common.pojo.vo.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 路由规则
 *
 * @author conghuhu
 * @since 2022-04-08
 */
@Api(tags = "路由规则接口")
@RestController
@RequestMapping("/routeRule")
public class RouteRuleController {

    private final QRouteRuleService routeRuleService;

    public RouteRuleController(QRouteRuleService routeRuleService) {
        this.routeRuleService = routeRuleService;
    }

    @ApiOperation(value = "获取路由规则", notes = "获取路由规则")
    @GetMapping("/getRouteRuleList")
    public Result<List<RouteRuleVo>> getRouteRuleList() {
        List<RouteRuleVo> routeRuleList = routeRuleService.getRouteRuleList();
        return Result.OK(routeRuleList);
    }

    @ApiOperation(value = "添加路由规则", notes = "添加路由规则")
    @PostMapping("/addRouteRule")
    public Result<QRouteRule> addRouteRule(@RequestBody RouteRuleParam routeRuleParam) {
        QRouteRule routeRule = routeRuleService.addRouteRule(routeRuleParam);
        return Result.OK(routeRule);
    }

    @ApiOperation(value = "删除路由规则", notes = "删除路由规则")
    @DeleteMapping("/deleteRouteRule")
    public Result<?> deleteRouteRule(@RequestParam("id") Long id) {
        routeRuleService.deleteRouteRule(id);
        return Result.OK();
    }

    @ApiOperation(value = "更新路由规则", notes = "更新路由规则")
    @PutMapping("/updateRouteRule")
    public Result<?> updateRouteRule(@RequestBody RouteRuleParam routeRuleParam) {
        routeRuleService.updateRouteRule(routeRuleParam);
        return Result.OK();
    }
}
