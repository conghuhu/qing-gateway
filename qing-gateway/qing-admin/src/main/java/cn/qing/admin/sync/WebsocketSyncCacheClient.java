package cn.qing.admin.sync;

import cn.qing.admin.cache.LoadBalanceCache;
import cn.qing.admin.entity.QLog;
import cn.qing.admin.factory.QingThreadFactory;
import cn.qing.admin.service.CoreService;
import cn.qing.admin.service.QLogService;
import cn.qing.admin.util.SpringContextUtil;
import cn.qing.common.constants.ActionTypeEnum;
import cn.qing.common.constants.EventTypeEnum;
import cn.qing.common.exception.QingException;
import cn.qing.common.pojo.dto.LogDTO;
import cn.qing.common.pojo.dto.WebsocketMessageDTO;
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
                new QingThreadFactory("socket-connect").create());
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
                    CoreService coreService = SpringContextUtil.getBean(CoreService.class);
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
                        CoreService coreService = SpringContextUtil.getBean(CoreService.class);
                        coreService.refresh();
                    }
                    // ????????????
                    else if (eventType.equals(EventTypeEnum.LOAD_BALANCE.getName())) {
                        if (actionType.equals(ActionTypeEnum.QUERY.getCode())) {
                            List<String> loadBalanceList = websocketMessageDTO.getLoadBalanceList();
                            LoadBalanceCache.addAll(loadBalanceList);
                            LoadBalanceCache.setCurrentLoadBalance(websocketMessageDTO.getDetail());
                        }
                    }
                    // ??????????????????
                    else if (eventType.equals(EventTypeEnum.LOG.getName())) {
                        QLogService logService = SpringContextUtil.getBean(QLogService.class);
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
                    CoreService coreService = SpringContextUtil.getBean(CoreService.class);
                    coreService.changeWebsocketStatus(serverWebSocketUrl, false);
                }

                @Override
                public void onError(Exception e) {
                    log.error("websocket client error", e);
                    CoreService coreService = SpringContextUtil.getBean(CoreService.class);
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
     * ???ws?????????????????????
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
