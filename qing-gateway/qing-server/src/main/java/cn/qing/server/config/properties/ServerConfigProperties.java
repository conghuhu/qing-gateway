package cn.qing.server.config.properties;

import cn.qing.common.constants.LoadBalanceConstants;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

/**
 * @author conghuhu
 * @create 2022-04-03 21:36
 */
@Data
@ConfigurationProperties(prefix = "qing.server")
@Configuration
public class ServerConfigProperties {
    /**
     * 负载均衡算法，默认轮询
     */
    private String loadBalance = LoadBalanceConstants.LOAD_BALANCE_ROUND_ROBIN;
    /**
     * 网关超时时间，默认5s
     */
    private Long timeOutMillis = 5000L;
    /**
     * 缓存刷新间隔，默认10s
     */
    private Long cacheRefreshIntervalMillis = 10000L;

    /**
     * websocket服务端口
     */
    private Integer webSocketPort;
}
