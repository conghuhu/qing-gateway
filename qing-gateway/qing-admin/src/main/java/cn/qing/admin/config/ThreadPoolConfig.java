package cn.qing.admin.config;

import org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.AsyncConfigurer;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.Executor;

/**
 * @author conghuhu
 * @create 2022-04-08 12:03
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
        taskExecutor.setCorePoolSize(5);
        //最大线程数
        taskExecutor.setMaxPoolSize(10);
        //队列程度
        taskExecutor.setQueueCapacity(25);
        //空闲时间
        taskExecutor.setKeepAliveSeconds(100);
        //线程前缀名称
        taskExecutor.setThreadNamePrefix("Thread_pool");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Override
    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
        return null;
    }
}
