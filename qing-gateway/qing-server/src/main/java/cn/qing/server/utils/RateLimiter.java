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
package cn.qing.server.utils;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

/**
 * @author conghuhu
 * @create 2022-04-15 18:25
 */
@Slf4j
@Component
public class RateLimiter {

    private String KEY_PREFIX = "limiter_";

    private final RedisSyncUtil redisSyncUtil;

    private final RedisUtil redisUtil;

    public RateLimiter(RedisSyncUtil redisSyncUtil, RedisUtil redisUtil) {
        this.redisSyncUtil = redisSyncUtil;

        this.redisUtil = redisUtil;
    }

    /**
     * 滑动窗口限流
     *
     * @param key
     * @param limit
     * @return
     */
    public Flux<Long> acquire(String key, Integer limit, String timeUnit) {
        long now = System.currentTimeMillis();
        key = KEY_PREFIX + key;
        String oldest = String.valueOf("seconds".equals(timeUnit) ? now - 1_000 : now - 60_000);
        String score = String.valueOf(now);
        String scoreValue = String.valueOf(now);
        redisSyncUtil.removeRangeByScore(key, 0, Double.parseDouble(oldest));
        Long res = redisSyncUtil.zCard(key);
        if (res == null || res < limit) {
            Boolean addToSet = redisSyncUtil.zAddToSet(key, score, Double.parseDouble(scoreValue));
            return Flux.just(addToSet ? 1L : 0L);
        } else {
            return Flux.just(0L);
        }
    }
}
