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
import org.springframework.data.redis.core.ReactiveRedisTemplate;
import org.springframework.data.redis.core.script.DefaultRedisScript;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.Duration;
import java.util.List;

/**
 * @author conghuhu
 * @create 2022-04-15 15:01
 */
@Slf4j
@Component
public class RedisUtil {

    private final ReactiveRedisTemplate reactiveRedisTemplate;

    public RedisUtil(ReactiveRedisTemplate reactiveRedisTemplate) {
        this.reactiveRedisTemplate = reactiveRedisTemplate;
    }

    public Mono<Boolean> set(String key, String value) {
        return reactiveRedisTemplate.opsForValue().set(key, value);
    }

    public Mono<Boolean> set(String key, String value, long milliseconds) {
        return reactiveRedisTemplate.opsForValue().set(key, value, Duration.ofMillis(milliseconds));
    }

    public Mono<String> get(String key) {
        return reactiveRedisTemplate.opsForValue().get(key);
    }

    public Mono<Long> del(String key) {
        return reactiveRedisTemplate.delete(key);
    }

    public Mono<Boolean> setExpire(String key, long milliseconds) {
        return reactiveRedisTemplate.expire(key, Duration.ofMillis(milliseconds));
    }

    public Mono<Duration> getExpire(String key) {
        return reactiveRedisTemplate.getExpire(key);
    }

    public Mono<Boolean> hasKey(String key) {
        return reactiveRedisTemplate.hasKey(key);
    }

    public void incr(String currCountKey, long milliseconds) {
        reactiveRedisTemplate.opsForValue().increment(currCountKey, 1);
        reactiveRedisTemplate.expire(currCountKey, Duration.ofMillis(milliseconds));
    }


    public Flux<Long> execute(DefaultRedisScript<Long> redisScript, List<String> asList, List<String> args) {
        log.info("execute redis script,{}", args);
        try {
            return reactiveRedisTemplate.execute(redisScript, asList, args);
        } catch (Exception e) {
            log.error("execute redis script error", e);
            return null;
        }
    }
}
