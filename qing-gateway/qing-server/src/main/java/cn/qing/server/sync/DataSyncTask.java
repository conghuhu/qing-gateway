package cn.qing.server.sync;

import cn.qing.common.constants.ActionTypeEnum;
import cn.qing.common.constants.EventTypeEnum;
import cn.qing.common.exception.QingException;
import cn.qing.common.pojo.dto.WebsocketMessageDTO;
import cn.qing.server.cache.IdentificationCache;
import cn.qing.server.cache.LimitRuleCache;
import cn.qing.server.cache.RouteRuleCache;
import cn.qing.server.cache.ServiceCache;
import cn.qing.server.config.properties.ServerConfigProperties;
import cn.qing.server.factory.LoadBalanceFactory;
import cn.qing.server.utils.SpringContextUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;

import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.util.List;

/**
 * @author conghuhu
 * @create 2022-04-05 13:26
 */
@Slf4j
public class DataSyncTask extends WebSocketServer {

    private ServerConfigProperties serverConfigProperties;

    public DataSyncTask(ServerConfigProperties serverConfigProperties) {
        super(new InetSocketAddress(serverConfigProperties.getWebSocketPort()));
        this.serverConfigProperties = serverConfigProperties;
    }

    /**
     * 广播消息
     * 消息体格式必须是 WebsocketMessageDTO
     *
     * @param message
     */
    public void send(String message) {
        try {
            JSONObject.parseObject(message, WebsocketMessageDTO.class);
        } catch (Exception e) {
            throw new QingException("消息体格式错误");
        }
        broadcast(message);
    }

    @Override
    public void onOpen(WebSocket conn, ClientHandshake handshake) {
        log.info("new connection to: {}", conn.getRemoteSocketAddress());
        // 告知管理台，该网关结点已上线
        WebsocketMessageDTO onlineMessage = WebsocketMessageDTO.builder()
                .eventType(EventTypeEnum.ONLINE.getName())
                .actionType(ActionTypeEnum.UPDATE.getCode())
                .build();
        this.send(JSON.toJSONString(onlineMessage));

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

    @Override
    public void onClose(WebSocket conn, int code, String reason, boolean remote) {
        log.info("closed  {} with exit code {} additional info: {}", conn.getRemoteSocketAddress(), code, reason);
    }

    @Override
    public void onMessage(WebSocket conn, String message) {
        log.info("received message from {}: {}", conn.getRemoteSocketAddress(), message);
        WebsocketMessageDTO websocketMessageDTO = JSONObject.parseObject(message, WebsocketMessageDTO.class);
        String eventType = websocketMessageDTO.getEventType();
        String actionType = websocketMessageDTO.getActionType();
        // TODO 引入决策模式
        if (eventType.equals(EventTypeEnum.HAND_SHAKE.getName())) {
            log.info(websocketMessageDTO.getDetail());
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
            ServerConfigProperties serverConfigProperties = SpringContextUtil.getBean(ServerConfigProperties.class);
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
    public void onMessage(WebSocket conn, ByteBuffer message) {
        log.info("received message from {}: {}", conn.getRemoteSocketAddress(), message);
    }

    @Override
    public void onError(WebSocket conn, Exception ex) {
        log.error("an error occurred on connection {} : {}", ex.getMessage(), ex);
    }

    @Override
    public void onStart() {
        log.info("websocket server started on port {}", getPort());
    }
}
