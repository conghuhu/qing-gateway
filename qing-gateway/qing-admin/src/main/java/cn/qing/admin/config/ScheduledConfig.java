package cn.qing.admin.config;

import cn.qing.admin.factory.QingThreadFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.ScheduledThreadPoolExecutor;

@Configuration
public class ScheduledConfig {

    @Bean
    public ScheduledThreadPoolExecutor scheduledThreadPoolExecutor() {
        return new ScheduledThreadPoolExecutor(5,
                new QingThreadFactory("guard").create());
    }
}
