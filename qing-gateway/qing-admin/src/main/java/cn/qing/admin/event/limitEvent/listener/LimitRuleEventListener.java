package cn.qing.admin.event.limitEvent.listener;

import cn.qing.admin.event.limitEvent.LimitRuleAddEvent;
import cn.qing.admin.event.limitEvent.LimitRuleDeleteEvent;
import cn.qing.admin.event.limitEvent.LimitRuleUpdateEvent;
import cn.qing.admin.service.CoreService;
import cn.qing.admin.util.WebsocketClientUtil;
import cn.qing.common.constants.ActionTypeEnum;
import cn.qing.common.constants.EventTypeEnum;
import cn.qing.common.dto.LimitRuleDTO;
import cn.qing.common.dto.WebsocketMessageDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

/**
 * @author conghuhu
 * @create 2022-04-15 13:41
 */
@Slf4j
@Component
public class LimitRuleEventListener {

    @Async
    @EventListener
    public void onAddLimit(LimitRuleAddEvent event) {
        Map<String, LimitRuleDTO> limitRuleMap = event.getLimitRuleMap();
        List<String> websocketBeanList = CoreService.getWebsocketBeanList();
        WebsocketMessageDTO websocketMessageDTO = WebsocketMessageDTO.builder()
                .eventType(EventTypeEnum.LIMIT_RULE.getName())
                .actionType(ActionTypeEnum.ADD.getCode())
                .limitRuleMap(limitRuleMap)
                .build();
        WebsocketClientUtil.sendToAll(websocketBeanList, websocketMessageDTO);
        log.info("添加限流规则: {}", event);
    }

    @Async
    @EventListener
    public void onUpdateLimit(LimitRuleUpdateEvent event) {
        Map<String, LimitRuleDTO> limitRuleMap = event.getLimitRuleMap();
        List<String> websocketBeanList = CoreService.getWebsocketBeanList();
        WebsocketMessageDTO websocketMessageDTO = WebsocketMessageDTO.builder()
                .eventType(EventTypeEnum.LIMIT_RULE.getName())
                .actionType(ActionTypeEnum.UPDATE.getCode())
                .limitRuleMap(limitRuleMap)
                .build();
        WebsocketClientUtil.sendToAll(websocketBeanList, websocketMessageDTO);
        log.info("更新限流规则: {}", event);
    }

    @Async
    @EventListener
    public void onDeleteLimit(LimitRuleDeleteEvent event) {
        String key = event.getKey();
        List<String> websocketBeanList = CoreService.getWebsocketBeanList();
        WebsocketMessageDTO websocketMessageDTO = WebsocketMessageDTO.builder()
                .eventType(EventTypeEnum.LIMIT_RULE.getName())
                .actionType(ActionTypeEnum.REMOVE.getCode())
                .detail(key)
                .build();
        WebsocketClientUtil.sendToAll(websocketBeanList, websocketMessageDTO);
        log.info("删除限流规则: {}", event);
    }
}
