package cn.qing.admin.controller;


import cn.qing.admin.entity.QServiceInstance;
import cn.qing.admin.pojo.params.InstanceUpdateParam;
import cn.qing.admin.pojo.vo.ServiceInfoVo;
import cn.qing.admin.service.QServiceInstanceService;
import cn.qing.admin.service.QServiceService;
import cn.qing.admin.util.NacosUtil;
import cn.qing.common.pojo.vo.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * nacos服务信息控制器
 *
 * @author conghuhu
 * @since 2022-04-08
 */
@Api(tags = "nacos及其服务相关接口")
@RestController
@RequestMapping("/nacosInfo")
public class NacosInfoController {

    private final NacosUtil nacosUtil;

    private final QServiceService serviceService;

    private final QServiceInstanceService serviceInstanceService;

    public NacosInfoController(NacosUtil nacosUtil, QServiceService serviceService, QServiceInstanceService serviceInstanceService) {
        this.nacosUtil = nacosUtil;
        this.serviceService = serviceService;
        this.serviceInstanceService = serviceInstanceService;
    }

    @ApiOperation(value = "获取服务及其实例列表", notes = "获取服务及其实例列表")
    @GetMapping("/getServiceList")
    public Result<List<ServiceInfoVo>> getServiceList() {
        List<ServiceInfoVo> serviceInstanceList = serviceService.getServiceList();
        return Result.OK(serviceInstanceList);
    }

    @ApiOperation(value = "获取某个服务下的所有实例列表", notes = "获取某个服务下的所有实例列表")
    @GetMapping("/getServiceInstanceList")
    public Result<List<QServiceInstance>> getServiceInstanceList(@RequestParam("serviceId") Long serviceId) {
        List<QServiceInstance> serviceInstanceList = serviceInstanceService.getServiceInstanceListByServiceId(serviceId);
        return Result.OK(serviceInstanceList);
    }

    @ApiOperation(value = "更新某个实例", notes = "更新某个实例")
    @PutMapping("updateInstance")
    public Result<?> updateInstance(@RequestBody InstanceUpdateParam instanceUpdateParam) {
        nacosUtil.updateInstance(instanceUpdateParam);
        return Result.OK();
    }
}
