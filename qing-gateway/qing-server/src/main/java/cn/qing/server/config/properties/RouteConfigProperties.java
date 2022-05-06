package cn.qing.server.config.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.Map;

/**
 * 路由配置
 *
 * @author conghuhu
 * @create 2022-04-07 12:49
 */
@Data
@ConfigurationProperties(prefix = "qing")
@Configuration
public class RouteConfigProperties {
    private List<Map<String, String>> routes;
}
