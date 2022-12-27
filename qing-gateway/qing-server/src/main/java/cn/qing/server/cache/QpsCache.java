/*
 * Copyright 2023 qing-gateway
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package cn.qing.server.cache;

import cn.qing.common.dto.QpsDTO;
import cn.qing.server.utils.RedisSyncUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
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
