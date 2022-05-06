package cn.qing.server.config;

import cn.qing.server.factory.QingThreadFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;

import java.util.concurrent.ScheduledThreadPoolExecutor;

@Configuration
public class ScheduledConfig {

    @Bean
    public ScheduledThreadPoolExecutor scheduledThreadPoolExecutor() {
        return new ScheduledThreadPoolExecutor(3,
                new QingThreadFactory("guard").create());
    }
}
