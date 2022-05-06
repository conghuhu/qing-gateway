package cn.qing.admin.starter;

import cn.qing.admin.entity.QNacosInfo;
import cn.qing.admin.entity.QWebsocketInfo;
import cn.qing.admin.event.ruleEvent.RuleAddEvent;
import cn.qing.admin.pojo.params.InitParam;
import cn.qing.admin.pojo.vo.RouteRuleVo;
import cn.qing.admin.service.CoreService;
import cn.qing.admin.service.QNacosInfoService;
import cn.qing.admin.service.QRouteRuleService;
import cn.qing.admin.service.QWebsocketInfoService;
import cn.qing.common.pojo.dto.ServiceRuleDTO;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

/**
 * @author conghuhu
 * @create 2022-04-11 15:22
 */
@Slf4j
@Component
public class SystemInitStarter {

    private final QRouteRuleService routeRuleService;

    private final QNacosInfoService nacosInfoService;

    private final QWebsocketInfoService websocketInfoService;

    private final CoreService coreService;

    public SystemInitStarter(QRouteRuleService routeRuleService, QNacosInfoService nacosInfoService,
                             QWebsocketInfoService websocketInfoService, CoreService coreService) {
        this.routeRuleService = routeRuleService;
        this.nacosInfoService = nacosInfoService;
        this.websocketInfoService = websocketInfoService;
        this.coreService = coreService;
    }

    @Resource
    private ApplicationEventPublisher eventPublisher;

    /**
     * 初始化系统，检测是否有历史配置，如果没有则初始化
     *
     * @param args
     * @throws Exception
     */
    public void run(String... args) throws Exception {
        log.info("检测到应用启动，开始初始化系统...");
        InitParam initParam = new InitParam();
        QNacosInfo nacosInfo = nacosInfoService.getOne(new LambdaQueryWrapper<>());
        if (nacosInfo != null) {
            log.info("历史数据检测到Nacos配置，开始根据历史数据初始化...");
            initParam.setNacosServerAddr(nacosInfo.getAddress());
            List<QWebsocketInfo> websocketInfoList = websocketInfoService.getWebsocketInfo();
            initParam.setWebsocketUriList(websocketInfoList.stream().map(QWebsocketInfo::getUri).collect(Collectors.toList()));
            coreService.init(initParam);
            // 路由初始化
            initRouteRule();
        } else {
            log.info("未检测到Nacos配置，开始初始化...");
        }
    }

    /**
     * 初始化路由规则
     */
    private void initRouteRule() {
        List<RouteRuleVo> routeRuleList = routeRuleService.getRouteRuleList();
        if (routeRuleList.size() == 0) {
            return;
        }
        Map<String, ServiceRuleDTO> serviceRuleDTOMap = new HashMap<>();
        routeRuleList.forEach(routeRuleVo -> {
            ServiceRuleDTO serviceRuleDTO = ServiceRuleDTO.builder()
                    .routeName(routeRuleVo.getPredicates())
                    .serviceName(routeRuleVo.getService().getServiceName())
                    .priority(routeRuleVo.getPriority())
                    .build();
            serviceRuleDTOMap.put(routeRuleVo.getPredicates(), serviceRuleDTO);
        });
        eventPublisher.publishEvent(new RuleAddEvent(this, serviceRuleDTOMap));
    }
}
