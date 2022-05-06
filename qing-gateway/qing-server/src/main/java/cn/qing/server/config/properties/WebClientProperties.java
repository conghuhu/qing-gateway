package cn.qing.server.config.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * @author conghuhu
 * @create 2022-04-06 10:41
 */
@ConfigurationProperties("web.client")
@Data
@Configuration
public class WebClientProperties {
    /**
     * 超时时间 单位秒
     */
    private int pendingAcquireTimeout = 50;

    /**
     * 最大等待任务数
     */
    private int pendingAcquireMaxCount = 10000;

    /**
     * 连接池最大连接数
     */
    private int maxConnections = 1000;

    /**
     * 最大空闲时间 单位秒
     */
    private int maxIdleTime = 30;

    /**
     * 工作线程数
     */
    private int workCounts = 10;
}
