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
package cn.qing.admin.sync;

import cn.qing.admin.cache.LoadBalanceCache;
import cn.qing.admin.entity.QLog;
import cn.qing.admin.service.CoreService;
import cn.qing.admin.service.QLogService;
import cn.qing.admin.util.SpringContextUtil;
import cn.qing.common.concurrent.QingThreadFactory;
import cn.qing.common.dto.LogDTO;
import cn.qing.common.dto.WebsocketMessageDTO;
import cn.qing.common.enums.ActionTypeEnum;
import cn.qing.common.enums.EventTypeEnum;
import cn.qing.common.exception.QingException;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.java_websocket.client.WebSocketClient;
import org.java_websocket.handshake.ServerHandshake;
import org.springframework.beans.factory.InitializingBean;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * @author conghuhu
 * @create 2022-04-07 14:48
 */
@Slf4j
public class WebsocketSyncCacheClient implements InitializingBean {

    private final String websocketSessionId;

    private static String serverWebSocketUrl = "";

    private WebSocketClient client;

    private static ScheduledThreadPoolExecutor executor;

    public WebsocketSyncCacheClient(String serverWebSocketUrl, String websocketSessionId) {
        WebsocketSyncCacheClient.serverWebSocketUrl = serverWebSocketUrl;
        this.websocketSessionId = websocketSessionId;
    }

    @Override
    public void afterPropertiesSet() {
        executor = new ScheduledThreadPoolExecutor(1,
                QingThreadFactory.create("socket-connect", true));
        try {
            client = new WebSocketClient(new URI(serverWebSocketUrl)) {
                @Override
                public void onOpen(ServerHandshake serverHandshake) {
                    log.info("admin websocket is open");
                    WebsocketMessageDTO messageDTO = WebsocketMessageDTO.builder()
                            .eventType(EventTypeEnum.HAND_SHAKE.getName())
                            .detail(websocketSessionId)
                            .build();
                    send(JSON.toJSONString(messageDTO));
                    CoreService coreService = SpringContextUtil.getInstance().getBean(CoreService.class);
                    coreService.changeWebsocketStatus(serverWebSocketUrl, true);
                }

                @SneakyThrows
                @Override
                public void onMessage(String message) {
                    log.info("admin receive message:{}", message);
                    WebsocketMessageDTO websocketMessageDTO = JSONObject.parseObject(message, WebsocketMessageDTO.class);
                    String eventType = websocketMessageDTO.getEventType();
                    String actionType = websocketMessageDTO.getActionType();

                    if (eventType.equals(EventTypeEnum.ONLINE.getName())) {
                        CoreService coreService = SpringContextUtil.getInstance().getBean(CoreService.class);
                        coreService.refresh();
                    }
                    // 负载均衡
                    else if (eventType.equals(EventTypeEnum.LOAD_BALANCE.getName())) {
                        if (actionType.equals(ActionTypeEnum.QUERY.getCode())) {
                            List<String> loadBalanceList = websocketMessageDTO.getLoadBalanceList();
                            LoadBalanceCache.addAll(loadBalanceList);
                            LoadBalanceCache.setCurrentLoadBalance(websocketMessageDTO.getDetail());
                        }
                    }
                    // 调用行为日志
                    else if (eventType.equals(EventTypeEnum.LOG.getName())) {
                        QLogService logService = SpringContextUtil.getInstance().getBean(QLogService.class);
                        List<LogDTO> logDTOList = websocketMessageDTO.getLogDTOList();
                        List<QLog> logList = new ArrayList<>();
                        logDTOList.forEach(logDTO -> {
                            QLog log = new QLog();
                            log.setOriginIP(logDTO.getOriginIP());
                            log.setOriginuri(logDTO.getOriginURI());
                            log.setProxyuri(logDTO.getProxyURI());
                            log.setRouteName(logDTO.getRouteName());
                            log.setServiceInstance(logDTO.getServiceInstance().getIp() + ":" + logDTO.getServiceInstance().getPort());
                            log.setTargetService(logDTO.getTargetService());
                            log.setCreatedTime(logDTO.getCreatedTime());
                            logList.add(log);
                        });
                        logService.saveBatch(logList);
                    }
                }

                @Override
                public void onClose(int i, String s, boolean b) {
                    log.info("admin websocket close");
                    CoreService coreService = SpringContextUtil.getInstance().getBean(CoreService.class);
                    coreService.changeWebsocketStatus(serverWebSocketUrl, false);
                }

                @Override
                public void onError(Exception e) {
                    log.error("websocket client error", e);
                    CoreService coreService = SpringContextUtil.getInstance().getBean(CoreService.class);
                    coreService.changeWebsocketStatus(serverWebSocketUrl, false);
                }
            };
            client.connectBlocking();
            executor.scheduleAtFixedRate(() -> {
                if (client != null && client.isClosed()) {
                    try {
                        client.reconnectBlocking();
                    } catch (InterruptedException e) {
                        log.error("reconnect server fail", e);
                    }
                }
            }, 2, 10, TimeUnit.SECONDS);
        } catch (Exception e) {
            e.printStackTrace();
            throw new QingException(e.getMessage());
        }
        log.info("admin websocket init");
    }

    /**
     * 向ws服务端发送消息
     *
     * @param msg
     */
    public void send(Object msg) {
        if (client != null && client.isOpen()) {
            client.send(JSON.toJSONString(msg));
        }
    }

    public void close() {
        if (client != null) {
            client.close();
            executor.shutdown();
        }
    }
}
