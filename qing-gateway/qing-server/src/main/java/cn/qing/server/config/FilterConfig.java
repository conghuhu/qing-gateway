package cn.qing.server.config;

import cn.qing.server.filter.PluginFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.web.reactive.config.EnableWebFlux;

/**
 * @author conghuhu
 * @create 2022-04-03 15:45
 */
@Configuration
@EnableWebFlux
public class FilterConfig {

    @Order(-1)
    @Bean
    public PluginFilter pluginFilter() {
        return new PluginFilter();
    }
}
