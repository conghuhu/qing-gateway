package com.example.qingclientexqmple.config;

import com.example.qingclientexqmple.filter.TraceInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author conghuhu
 * @create 2023/1/6 17:00
 */
@Configuration
public class MyWebMvcConfig implements WebMvcConfigurer {

    private final TraceInterceptor traceInterceptor;

    public MyWebMvcConfig(TraceInterceptor traceInterceptor) {
        this.traceInterceptor = traceInterceptor;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(traceInterceptor)
                .addPathPatterns("/**");
    }

}
