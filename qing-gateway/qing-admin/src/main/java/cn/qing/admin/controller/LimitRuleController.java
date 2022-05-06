package cn.qing.admin.controller;


import cn.qing.admin.entity.QLimitRule;
import cn.qing.admin.service.QLimitRuleService;
import cn.qing.common.pojo.vo.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 限流控制器
 *
 * @author conghuhu
 * @since 2022-04-15
 */
@Api(tags = "限流相关接口")
@RestController
@RequestMapping("/limitRule")
public class LimitRuleController {

    private final QLimitRuleService limitRuleService;

    public LimitRuleController(QLimitRuleService limitRuleService) {
        this.limitRuleService = limitRuleService;
    }

    @ApiOperation(value = "获取限流规则列表", notes = "获取限流规则列表")
    @GetMapping("/getLimitRuleList")
    public Result<List<QLimitRule>> getLimitRuleList() {
        List<QLimitRule> limitRuleList = limitRuleService.getLimitRuleList();
        return Result.OK(limitRuleList);
    }

    @ApiOperation(value = "添加限流规则", notes = "添加限流规则")
    @PostMapping("/addLimitRule")
    public Result<QLimitRule> addLimitRule(@RequestBody QLimitRule limitRule) {
        return Result.OK(limitRuleService.addLimitRule(limitRule));
    }

    @ApiOperation(value = "更新限流规则", notes = "更新限流规则")
    @PutMapping("/updateLimitRule")
    public Result<?> updateLimitRule(@RequestBody QLimitRule limitRule) {
        limitRuleService.updateLimitRule(limitRule);
        return Result.OK();
    }

    @ApiOperation(value = "删除限流规则", notes = "删除限流规则")
    @DeleteMapping("/deleteLimitRule")
    public Result<?> deleteLimitRule(@RequestParam("id") Long id) {
        limitRuleService.deleteLimitRule(id);
        return Result.OK();
    }
}
