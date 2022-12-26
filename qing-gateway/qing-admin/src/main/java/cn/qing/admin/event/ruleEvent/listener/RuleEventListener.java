package cn.qing.admin.event.ruleEvent.listener;

import cn.qing.admin.event.ruleEvent.RuleAddEvent;
import cn.qing.admin.event.ruleEvent.RuleDeleteEvent;
import cn.qing.admin.event.ruleEvent.RuleUpdateEvent;
import cn.qing.admin.service.CoreService;
import cn.qing.admin.util.WebsocketClientUtil;
import cn.qing.common.constants.ActionTypeEnum;
import cn.qing.common.constants.EventTypeEnum;
import cn.qing.common.dto.ServiceRuleDTO;
import cn.qing.common.dto.WebsocketMessageDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

/**
 * @author conghuhu
 * @create 2022-04-08 16:01
 */
@Slf4j
@Component
public class RuleEventListener {

    @Async
    @EventListener
    public void onAddRule(RuleAddEvent ruleAddEvent) {
        Map<String, ServiceRuleDTO> serviceRuleMap = ruleAddEvent.getServiceRuleMap();
        List<String> websocketBeanList = CoreService.getWebsocketBeanList();
        WebsocketMessageDTO websocketMessageDTO = WebsocketMessageDTO.builder()
                .eventType(EventTypeEnum.RULE.getName())
                .actionType(ActionTypeEnum.ADD.getCode())
                .routeRuleMap(serviceRuleMap)
                .build();
        WebsocketClientUtil.sendToAll(websocketBeanList, websocketMessageDTO);
        log.info("添加规则：{}", serviceRuleMap);
    }

    @Async
    @EventListener
    public void onUpdateRule(RuleUpdateEvent ruleUpdateEvent) {
        Map<String, ServiceRuleDTO> serviceRuleMap = ruleUpdateEvent.getServiceRuleMap();
        List<String> websocketBeanList = CoreService.getWebsocketBeanList();
        WebsocketMessageDTO websocketMessageDTO = WebsocketMessageDTO.builder()
                .eventType(EventTypeEnum.RULE.getName())
                .actionType(ActionTypeEnum.UPDATE.getCode())
                .routeRuleMap(serviceRuleMap)
                .build();
        WebsocketClientUtil.sendToAll(websocketBeanList, websocketMessageDTO);
        log.info("更新规则：{}", serviceRuleMap);
    }

    @Async
    @EventListener
    public void onDeleteRule(RuleDeleteEvent ruleDeleteEvent) {
        String routeName = ruleDeleteEvent.getRouteName();
        List<String> websocketBeanList = CoreService.getWebsocketBeanList();
        WebsocketMessageDTO websocketMessageDTO = WebsocketMessageDTO.builder()
                .eventType(EventTypeEnum.RULE.getName())
                .actionType(ActionTypeEnum.REMOVE.getCode())
                .detail(routeName)
                .build();
        WebsocketClientUtil.sendToAll(websocketBeanList, websocketMessageDTO);
        log.info("删除规则：{}", routeName);
    }
}
