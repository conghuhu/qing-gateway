package cn.qing.server.cache;

import cn.qing.common.constants.ActionTypeEnum;
import cn.qing.common.constants.EventTypeEnum;
import cn.qing.common.pojo.dto.LogDTO;
import cn.qing.common.pojo.dto.QpsDTO;
import cn.qing.common.pojo.dto.WebsocketMessageDTO;
import cn.qing.server.utils.RedisSyncUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @author qing
 */
@Component
@Slf4j
public class QpsCache {

    private final RedisSyncUtil redisSyncUtil;

    private final ScheduledThreadPoolExecutor scheduledThreadPoolExecutor;

    public static AtomicInteger qps = new AtomicInteger(0);

    public QpsCache(RedisSyncUtil redisSyncUtil, ScheduledThreadPoolExecutor scheduledThreadPoolExecutor) {
        this.redisSyncUtil = redisSyncUtil;
        this.scheduledThreadPoolExecutor = scheduledThreadPoolExecutor;
    }

    @PostConstruct
    public void init() {
        scheduledThreadPoolExecutor.scheduleAtFixedRate(() -> {
            int currQpsVal = qps.get();
            long now = System.currentTimeMillis();
            // 往前三分钟
            String oldest = String.valueOf(now - 3 * 60_000);
            qps.set(0);
            QpsDTO qpsDTO = new QpsDTO();
            qpsDTO.setQPS(currQpsVal);
            qpsDTO.setCollectTime(now);
            String key = IdentificationCache.getGatewayId() + "_sysQps";
            redisSyncUtil.removeRangeByScore(key, 0, Double.parseDouble(oldest));
            redisSyncUtil.zAddToSet(key, qpsDTO, Double.parseDouble(String.valueOf(now)));
        }, 0, 1000, TimeUnit.MILLISECONDS);

        log.info("初始化QPS计数器");
    }


}
