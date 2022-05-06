package cn.qing.server.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.reactive.config.WebFluxConfigurer;

/**
 * @author conghuhu
 * @create 2022-04-10 9:44
 */
@Configuration
public class WebFluxConfig implements WebFluxConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns("*")
                // 允许本地请求方法：PUT、POST、DELETE、GET等
                .allowedMethods("*")
                // 预检间隔时间
                .maxAge(3600)
                // 允许头部设置
                .allowedHeaders("*")
                // 是否发送cookie
                .allowCredentials(true);
    }
}
