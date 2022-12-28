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
package cn.qing.server.sync;

import cn.qing.common.concurrent.QingThreadFactory;
import cn.qing.common.dto.WebsocketMessageDTO;
import cn.qing.common.enums.ActionTypeEnum;
import cn.qing.common.enums.EventTypeEnum;
import cn.qing.common.exception.QingException;
import cn.qing.server.cache.IdentificationCache;
import cn.qing.server.cache.LimitRuleCache;
import cn.qing.server.cache.RouteRuleCache;
import cn.qing.server.cache.ServiceCache;
import cn.qing.server.config.properties.AdminConfigProperties;
import cn.qing.server.config.properties.ServerConfigProperties;
import cn.qing.server.factory.LoadBalanceFactory;
import cn.qing.server.utils.SpringContextUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.java_websocket.client.WebSocketClient;
import org.java_websocket.handshake.ServerHandshake;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.net.URI;
import java.util.List;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * @author conghuhu
 * @create 2022/12/27 22:52
 */
@Slf4j
@Component
public class WebsocketDataSyncClient implements ApplicationListener<ContextRefreshedEvent> {

    private WebSocketClient client;

    private static ScheduledThreadPoolExecutor executor;

    private final AdminConfigProperties adminConfigProperties;

    private final ServerConfigProperties serverConfigProperties;


    public WebsocketDataSyncClient(AdminConfigProperties adminConfigProperties, ServerConfigProperties serverConfigProperties) {
        this.adminConfigProperties = adminConfigProperties;
        this.serverConfigProperties = serverConfigProperties;
        executor = new ScheduledThreadPoolExecutor(1,
                QingThreadFactory.create("socket-connect", true));
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        log.info("websocket data sync module init");
        try {
            client = new QingWebsocketClient(new URI(getWsServerUrl()), serverConfigProperties);
            client.connectBlocking();
            executor.scheduleAtFixedRate(() -> {
                if (client != null && client.isClosed()) {
                    try {
                        client.reconnectBlocking();
                    } catch (InterruptedException e) {
                        log.error("reconnect server fail", e);
                    }
                }
            }, 2, 5, TimeUnit.SECONDS);
        } catch (Exception e) {
            e.printStackTrace();
            throw new QingException(e.getMessage());
        }
    }

    private String getWsServerUrl() {
        List<AdminConfigProperties.AdminInfo> infos = adminConfigProperties.getInfos();
        if (infos.size() == 0) {
            log.warn("can not found available admin url, use default: ws://127.0.0.1:9099");
            return "ws://127.0.0.1:9099";
        }
        return "ws://" + infos.get(0).getUrl();
    }

    /**
     * 向admin发送消息
     *
     * @param messageDTO
     */
    public void sendMessage(WebsocketMessageDTO messageDTO) {
        send(JSON.toJSONString(messageDTO));
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

    static class QingWebsocketClient extends WebSocketClient {

        private final ServerConfigProperties serverConfigProperties;

        public QingWebsocketClient(URI serverUri, ServerConfigProperties serverConfigProperties) {
            super(serverUri);
            this.serverConfigProperties = serverConfigProperties;
        }

        @Override
        public void onOpen(ServerHandshake serverHandshake) {
            log.info("admin websocket is open");

            // 查询本地负载均衡策略，告知网关管理平台
            List<String> loadBalanceList = LoadBalanceFactory.getAllLoadBalance();
            WebsocketMessageDTO websocketMessageDTO = WebsocketMessageDTO.builder()
                    .eventType(EventTypeEnum.LOAD_BALANCE.getName())
                    .actionType(ActionTypeEnum.QUERY.getCode())
                    .loadBalanceList(loadBalanceList)
                    .detail(serverConfigProperties.getLoadBalance())
                    .build();
            this.send(JSON.toJSONString(websocketMessageDTO));

            // TODO 查询本地路由，若有配置告知网关管理平台
        }

        @SneakyThrows
        @Override
        public void onMessage(String message) {
            WebsocketMessageDTO websocketMessageDTO = JSONObject.parseObject(message, WebsocketMessageDTO.class);
            String eventType = websocketMessageDTO.getEventType();
            String actionType = websocketMessageDTO.getActionType();
            // TODO 引入策略模式
            // 与admin成功建连
            if (eventType.equals(EventTypeEnum.HAND_SHAKE.getName())) {
                log.info("clientId from admin is: {}", websocketMessageDTO.getDetail());
                IdentificationCache.setGatewayId(websocketMessageDTO.getDetail());
            }
            // 服务及实例
            else if (eventType.equals(EventTypeEnum.SERVICE.getName())) {
                if (actionType.equals(ActionTypeEnum.ADD.getCode())) {
                    ServiceCache.addService(websocketMessageDTO.getServiceMap());
                } else if (actionType.equals(ActionTypeEnum.UPDATE.getCode())) {
                    ServiceCache.update(websocketMessageDTO.getServiceMap());
                } else if (actionType.equals(ActionTypeEnum.REMOVE.getCode())) {
                    ServiceCache.removeExpired(websocketMessageDTO.getOnlineServices());
                }
            }
            // 路由规则
            else if (eventType.equals(EventTypeEnum.RULE.getName())) {
                if (actionType.equals(ActionTypeEnum.ADD.getCode())) {
                    RouteRuleCache.addRule(websocketMessageDTO.getRouteRuleMap());
                } else if (actionType.equals(ActionTypeEnum.UPDATE.getCode())) {
                    RouteRuleCache.updateRule(websocketMessageDTO.getRouteRuleMap());
                } else if (actionType.equals(ActionTypeEnum.REMOVE.getCode())) {
                    RouteRuleCache.removeRule(websocketMessageDTO.getDetail());
                }
            }
            // 负载均衡
            else if (eventType.equals(EventTypeEnum.LOAD_BALANCE.getName())) {
                ServerConfigProperties serverConfigProperties = SpringContextUtil.getInstance().getBean(ServerConfigProperties.class);
                if (actionType.equals(ActionTypeEnum.UPDATE.getCode())) {
                    serverConfigProperties.setLoadBalance(websocketMessageDTO.getDetail());
                }
            }
            // 限流规则
            else if (eventType.equals(EventTypeEnum.LIMIT_RULE.getName())) {
                if (actionType.equals(ActionTypeEnum.ADD.getCode())) {
                    LimitRuleCache.addLimitRule(websocketMessageDTO.getLimitRuleMap());
                } else if (actionType.equals(ActionTypeEnum.UPDATE.getCode())) {
                    LimitRuleCache.updateLimitRule(websocketMessageDTO.getLimitRuleMap());
                } else if (actionType.equals(ActionTypeEnum.REMOVE.getCode())) {
                    LimitRuleCache.removeLimitRule(websocketMessageDTO.getDetail());
                }
            }
        }

        @Override
        public void onClose(int code, String reason, boolean remote) {
            log.info("admin websocket close, code: {}, reason: {}, remote: {}", code, reason, remote);
        }

        @Override
        public void onError(Exception e) {
            log.error("websocket client error", e);
        }
    }
}
