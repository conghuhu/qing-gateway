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
package cn.qing.admin.event.limitEvent.listener;

import cn.qing.admin.event.limitEvent.LimitRuleAddEvent;
import cn.qing.admin.event.limitEvent.LimitRuleDeleteEvent;
import cn.qing.admin.event.limitEvent.LimitRuleUpdateEvent;
import cn.qing.admin.service.CoreService;
import cn.qing.admin.util.WebsocketClientUtil;
import cn.qing.common.enums.ActionTypeEnum;
import cn.qing.common.enums.EventTypeEnum;
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
