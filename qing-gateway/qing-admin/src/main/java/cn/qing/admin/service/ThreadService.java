package cn.qing.admin.service;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.concurrent.CompletableFuture;

/**
 * @author conghuhu
 * @create 2022-04-08 18:53
 */
@Service
public class ThreadService {

    @Resource
    private ApplicationEventPublisher eventPublisher;

}
