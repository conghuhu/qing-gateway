package cn.qing.server.handler;

import cn.qing.common.dto.LogDTO;
import cn.qing.server.cache.LogCache;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * @author qing
 */
@Service
@Slf4j
public class MultithreadingTaskHandler {

    private final LogCache logCache;

    public MultithreadingTaskHandler(LogCache logCache) {
        this.logCache = logCache;
    }

    /**
     * 经实验测得，同步优于异步
     *
     * @param logDTO
     */
//    @Async
    public void executeTask(LogDTO logDTO) {
        try {
            logCache.addLogDTO(logDTO);
        } catch (Exception e) {
            log.error("执行任务失败：{}", logDTO);
        }
    }
}
