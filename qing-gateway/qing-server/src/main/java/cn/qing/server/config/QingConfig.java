package cn.qing.server.config;

import cn.qing.common.pojo.dto.ServiceRuleDTO;
import cn.qing.server.cache.RouteRuleCache;
import cn.qing.server.config.properties.RouteConfigProperties;
import cn.qing.server.config.properties.ServerConfigProperties;
import cn.qing.server.handler.QingWebHandler;
import cn.qing.server.plugin.base.QingPlugin;
import cn.qing.server.plugin.impl.AuthPlugin;
import cn.qing.server.plugin.impl.CurrentLimitingPlugin;
import cn.qing.server.plugin.impl.DynamicRoutePlugin;
import cn.qing.server.utils.RateLimiter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.server.WebHandler;

import java.util.*;
import java.util.stream.Collectors;

/**
 * @author conghuhu
 * @create 2022-04-04 11:05
 */
@Slf4j
@Configuration
public class QingConfig {

    private final RouteConfigProperties routeConfigProperties;

    private final ServerConfigProperties serverConfigProperties;

    private final RateLimiter rateLimiter;

    public QingConfig(RouteConfigProperties routeConfigProperties, ServerConfigProperties serverConfigProperties, RateLimiter rateLimiter) {
        this.routeConfigProperties = routeConfigProperties;
        this.serverConfigProperties = serverConfigProperties;
        this.rateLimiter = rateLimiter;
    }

    /**
     * TODO List<QingPlugin> 未注入
     *
     * @param plugins
     * @return
     */
    @Bean("qingWebHandler")
    public QingWebHandler qingWebHandler(final ObjectProvider<List<QingPlugin>> plugins) {
        log.info("init web handler");
        log.info("服务配置：{}", serverConfigProperties);
        List<QingPlugin> pluginList = plugins.getIfAvailable(Collections::emptyList);
        List<QingPlugin> qingPluginList = pluginList.stream()
                .sorted(Comparator.comparingInt(QingPlugin::getOrder)).collect(Collectors.toList());
        QingWebHandler webHandler = new QingWebHandler(qingPluginList);
        webHandler.addPlugin(new AuthPlugin());
        webHandler.addPlugin(new CurrentLimitingPlugin(rateLimiter));
        webHandler.addPlugin(new DynamicRoutePlugin(serverConfigProperties));
        webHandler.getPlugins().forEach(qingPlugin -> {
            log.info("init plugin: {} {}", qingPlugin.getName(), qingPlugin.getClass().getName());
        });
        return webHandler;
    }

    @Bean
    public void routeRegister() {
        List<Map<String, String>> routes = routeConfigProperties.getRoutes();
        if (routes == null || routes.size() == 0) {
            return;
        }
        log.info("路由配置：{}", routes);
        Map<String, ServiceRuleDTO> map = new LinkedHashMap<>();
        routes.forEach(route -> {
            ServiceRuleDTO serviceRuleDTO = new ServiceRuleDTO();
            serviceRuleDTO.setServiceName(route.get("uri"));
            serviceRuleDTO.setRouteName(route.get("predicates"));
            serviceRuleDTO.setPriority(Integer.parseInt(route.get("priority")));
            map.put(route.get("predicates"), serviceRuleDTO);
        });
        RouteRuleCache.addRule(map);
    }
}
