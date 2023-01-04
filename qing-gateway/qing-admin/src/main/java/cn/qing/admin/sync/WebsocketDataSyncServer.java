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
import cn.qing.admin.config.properties.WebsocketSyncProperties;
import cn.qing.admin.entity.QLog;
import cn.qing.admin.entity.QWebsocketInfo;
import cn.qing.admin.service.CoreService;
import cn.qing.admin.service.QLogService;
import cn.qing.admin.service.QWebsocketInfoService;
import cn.qing.admin.transfer.LogTransfer;
import cn.qing.admin.util.SpringContextUtil;
import cn.qing.common.dto.LogDTO;
import cn.qing.common.dto.WebsocketMessageDTO;
import cn.qing.common.enums.ActionTypeEnum;
import cn.qing.common.enums.EventTypeEnum;
import cn.qing.common.utils.UUIDUtils;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;
import org.springframework.stereotype.Component;

import java.net.InetSocketAddress;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * @author conghuhu
 * @create 2022/12/28 8:50
 */
@Slf4j
@Component
public class WebsocketDataSyncServer extends WebSocketServer {

    private final QWebsocketInfoService websocketInfoService;

    public WebsocketDataSyncServer(WebsocketSyncProperties properties, QWebsocketInfoService websocketInfoService) {
        super(new InetSocketAddress(properties.getPort()));
        this.websocketInfoService = websocketInfoService;
        this.start();
    }

    @SneakyThrows
    @Override
    public void onOpen(WebSocket conn, ClientHandshake clientHandshake) {
        String clientId = UUIDUtils.getInstance().generateShortUuid();
        conn.setAttachment(clientId);
        log.info("new connection: {} from clientId: {}", conn.getRemoteSocketAddress(), clientId);
        websocketInfoService.insert(QWebsocketInfo.builder()
                .clientId(clientId)
                .enabled(true).status(true).ip(conn.getRemoteSocketAddress().toString())
                .createdTime(LocalDateTime.now())
                .build());
        WebsocketMessageDTO websocketMessageDTO = WebsocketMessageDTO.builder()
                .eventType(EventTypeEnum.HAND_SHAKE.getName())
                .actionType(ActionTypeEnum.ADD.getCode())
                .detail(clientId)
                .build();
        conn.send(JSON.toJSONString(websocketMessageDTO));
        CoreService coreService = SpringContextUtil.getInstance().getBean(CoreService.class);
        coreService.refresh(conn);
    }

    @Override
    public void onClose(WebSocket conn, int code, String reason, boolean remote) {
        log.info("closed {} with exit code {}, additional info: {}, remote: {}", conn.getRemoteSocketAddress(), code, reason, remote);
        String clientId = conn.getAttachment();
        websocketInfoService.changeWebsocketStatus(clientId, false);
    }

    @SneakyThrows
    @Override
    public void onMessage(WebSocket conn, String msg) {
        String clientId = conn.getAttachment();
        log.info("received message from clientId {}, addr {}: {}", clientId, conn.getRemoteSocketAddress(), msg);
        WebsocketMessageDTO websocketMessageDTO = JSONObject.parseObject(msg, WebsocketMessageDTO.class);
        String eventType = websocketMessageDTO.getEventType();
        String actionType = websocketMessageDTO.getActionType();

        // 负载均衡
        if (eventType.equals(EventTypeEnum.LOAD_BALANCE.getName())) {
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
                QLog qlog = LogTransfer.transferToLog(logDTO);
                logList.add(qlog);
            });
            logService.saveBatch(logList);
        }
    }

    @Override
    public void onError(WebSocket conn, Exception e) {
        String clientId = conn.getAttachment();
        log.error("an error occurred on connection {} : {}", clientId, e);
        websocketInfoService.changeWebsocketStatus(clientId, false);
    }

    @Override
    public void onStart() {
        log.info("Websocket server started on port: {}", getPort());
    }

    /**
     * 广播消息
     *
     * @param msg 消息体格式 WebsocketMessageDTO
     */
    public void sendToAll(WebsocketMessageDTO msg) {
        broadcast(JSON.toJSONString(msg));
    }
}
