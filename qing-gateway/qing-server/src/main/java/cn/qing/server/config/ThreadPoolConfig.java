package cn.qing.server.config;

import org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.AsyncConfigurer;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.Executor;

/**
 * 线程池配置类
 *
 * @author qing
 */
@Configuration
@EnableAsync
public class ThreadPoolConfig implements AsyncConfigurer {
    @Override
    public Executor getAsyncExecutor() {
        //使用Spring内置线程池任务对象
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        //设置线程池参数
        //核心池大小
        taskExecutor.setCorePoolSize(2);
        //最大线程数
        taskExecutor.setMaxPoolSize(5);
        //队列程度
        taskExecutor.setQueueCapacity(25);
        //空闲时间
        taskExecutor.setKeepAliveSeconds(100);
        //线程前缀名称
        taskExecutor.setThreadNamePrefix("Async_");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Override
    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
        return null;
    }
}
