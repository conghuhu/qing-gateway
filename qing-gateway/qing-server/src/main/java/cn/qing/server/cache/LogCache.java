package cn.qing.server.cache;


import cn.qing.common.constants.ActionTypeEnum;
import cn.qing.common.constants.EventTypeEnum;
import cn.qing.common.dto.LogDTO;
import cn.qing.common.dto.WebsocketMessageDTO;
import cn.qing.server.sync.DataSyncTaskStarter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * 日志本地缓存池
 *
 * @author qing
 */
@Slf4j
@Component
public class LogCache {

    private static final LinkedBlockingDeque<LogDTO> LINKED_BLOCKING_DEQUE = new LinkedBlockingDeque();

    private final DataSyncTaskStarter dataSyncTaskStarter;

    private final ScheduledThreadPoolExecutor scheduledThreadPoolExecutor;

    public LogCache(DataSyncTaskStarter dataSyncTaskStarter, ScheduledThreadPoolExecutor scheduledThreadPoolExecutor) {
        this.dataSyncTaskStarter = dataSyncTaskStarter;
        this.scheduledThreadPoolExecutor = scheduledThreadPoolExecutor;
    }

    @PostConstruct
    public void init() {
        scheduledThreadPoolExecutor.scheduleAtFixedRate(() -> {
            int size = LINKED_BLOCKING_DEQUE.size();
            if (size == 0) {
                return;
            }
            log.info("批量处理日志缓存池中日志：{}条", size);
            List<LogDTO> logContentList = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                logContentList.add(LINKED_BLOCKING_DEQUE.poll());
            }
            WebsocketMessageDTO messageDTO = WebsocketMessageDTO.builder()
                    .eventType(EventTypeEnum.LOG.getName())
                    .actionType(ActionTypeEnum.ADD.getCode())
                    .logDTOList(logContentList)
                    .build();
            dataSyncTaskStarter.sendMessage(messageDTO);
        }, 100, 2000, TimeUnit.MILLISECONDS);
        log.info("初始化日志缓存池");
    }

    /**
     * 添加日志
     *
     * @param logDTO
     * @throws InterruptedException
     */
    public void addLogDTO(LogDTO logDTO) throws InterruptedException {
        LINKED_BLOCKING_DEQUE.put(logDTO);
    }

}
