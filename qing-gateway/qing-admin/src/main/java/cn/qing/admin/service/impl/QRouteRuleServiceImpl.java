package cn.qing.admin.service.impl;

import cn.qing.admin.entity.QRouteRule;
import cn.qing.admin.entity.QService;
import cn.qing.admin.event.ruleEvent.RuleAddEvent;
import cn.qing.admin.event.ruleEvent.RuleDeleteEvent;
import cn.qing.admin.event.ruleEvent.RuleUpdateEvent;
import cn.qing.admin.mapper.QRouteRuleMapper;
import cn.qing.admin.pojo.vo.RouteRuleVo;
import cn.qing.admin.service.QRouteRuleService;
import cn.qing.admin.transfer.RouteRuleTransfer;
import cn.qing.common.exception.QingException;
import cn.qing.admin.pojo.params.RouteRuleParam;
import cn.qing.common.pojo.dto.ServiceRuleDTO;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author conghuhu
 * @since 2022-04-08
 */
@Service
public class QRouteRuleServiceImpl extends ServiceImpl<QRouteRuleMapper, QRouteRule> implements QRouteRuleService {

    private final QServiceServiceImpl serviceService;

    private final QRouteRuleMapper routeRuleMapper;

    @Resource
    private ApplicationEventPublisher eventPublisher;

    public QRouteRuleServiceImpl(QServiceServiceImpl serviceService, QRouteRuleMapper routeRuleMapper) {
        this.serviceService = serviceService;
        this.routeRuleMapper = routeRuleMapper;
    }

    /**
     * 获取路由规则列表
     *
     * @return
     */
    @Override
    public List<RouteRuleVo> getRouteRuleList() {
        List<QRouteRule> qRouteRuleList = routeRuleMapper.selectList(new LambdaQueryWrapper<QRouteRule>()
                .orderByDesc(QRouteRule::getCreatedTime));
        List<RouteRuleVo> routeRuleVoList = new ArrayList<>();
        qRouteRuleList.forEach(qRouteRule -> {
            Long serviceId = qRouteRule.getServiceId();
            RouteRuleVo vo = RouteRuleTransfer.getRouteRuleVoList(qRouteRule, serviceService.getById(serviceId));
            routeRuleVoList.add(vo);
        });
        return routeRuleVoList;
    }

    /**
     * 新增路由规则
     *
     * @param routeRuleParam
     */
    @Override
    public QRouteRule addRouteRule(RouteRuleParam routeRuleParam) {
        QRouteRule routeRule = new QRouteRule();
        QService service = serviceService.getOne(new LambdaQueryWrapper<QService>()
                .eq(QService::getServiceName, routeRuleParam.getServiceName()));
        routeRule.setServiceId(service.getId());
        routeRule.setPredicates(routeRuleParam.getPredicates());
        routeRule.setPriority(routeRuleParam.getPriority());
        routeRule.setEnabled(true);
        routeRule.setCreatedTime(LocalDateTime.now());
        routeRuleMapper.insert(routeRule);
        // 发布事件，通知网关添加路由规则
        Map<String, ServiceRuleDTO> serviceRuleDTOMap = getServiceRuleMap(routeRuleParam, routeRule);
        eventPublisher.publishEvent(new RuleAddEvent(this, serviceRuleDTOMap));
        return routeRule;
    }

    /**
     * 更新路由规则
     *
     * @param routeRuleParam
     */
    @Override
    public void updateRouteRule(RouteRuleParam routeRuleParam) {
        if (routeRuleParam.getId() == null) {
            throw new QingException("路由规则id不能为空");
        }
        QRouteRule routeRule = new QRouteRule();
        routeRule.setId(routeRuleParam.getId());
        if (StringUtils.hasLength(routeRuleParam.getServiceName())) {
            QService service = serviceService.getOne(new LambdaQueryWrapper<QService>()
                    .eq(QService::getServiceName, routeRuleParam.getServiceName()));
            routeRule.setServiceId(service.getId());
        }
        routeRule.setPredicates(routeRuleParam.getPredicates());
        routeRule.setPriority(routeRuleParam.getPriority());
        routeRule.setEnabled(routeRuleParam.getEnabled());
        routeRuleMapper.updateById(routeRule);
        // 发布事件，通知网关更新路由规则
        Map<String, ServiceRuleDTO> serviceRuleDTOMap = getServiceRuleMap(routeRuleParam, routeRule);
        eventPublisher.publishEvent(new RuleUpdateEvent(this, serviceRuleDTOMap));
    }

    private Map<String, ServiceRuleDTO> getServiceRuleMap(RouteRuleParam routeRuleParam, QRouteRule routeRule) {
        Map<String, ServiceRuleDTO> serviceRuleMap = new HashMap<>();
        ServiceRuleDTO serviceRuleDTO = new ServiceRuleDTO();
        serviceRuleDTO.setRouteName(routeRule.getPredicates());
        serviceRuleDTO.setPriority(routeRule.getPriority());
        serviceRuleDTO.setServiceName(routeRuleParam.getServiceName());
        serviceRuleMap.put(routeRuleParam.getPredicates(), serviceRuleDTO);
        return serviceRuleMap;
    }

    /**
     * 删除路由规则
     *
     * @param id
     */
    @Override
    public void deleteRouteRule(Long id) {
        QRouteRule routeRule = routeRuleMapper.selectById(id);
        if (routeRule == null) {
            throw new QingException("路由规则不存在");
        }
        routeRuleMapper.deleteById(id);
        eventPublisher.publishEvent(new RuleDeleteEvent(this, routeRule.getPredicates()));
    }
}
