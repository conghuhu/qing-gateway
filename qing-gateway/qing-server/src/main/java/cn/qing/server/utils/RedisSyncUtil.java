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
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * @author conghuhu
 * @create 2022-04-16 11:08
 */
@Slf4j
@Component
public class RedisSyncUtil {

    private final RedisTemplate<String, Object> redisTemplate;

    public RedisSyncUtil(RedisTemplate<String, Object> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }


    /**
     * 根据key读取数据
     */
    public Object get(final String key) {
        if (!StringUtils.hasLength(key)) {
            return null;
        }
        try {
            return redisTemplate.opsForValue().get(key);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 写入数据
     */
    public boolean set(final String key, Object value) {
        if (!StringUtils.hasLength(key)) {
            return false;
        }
        try {
            redisTemplate.opsForValue().set(key, value);
            log.info("存入redis成功，key：{}，value：{}", key, value);
            return true;
        } catch (Exception e) {
            log.error("存入redis失败，key：{}，value：{}", key, value);
            e.printStackTrace();
        }
        return false;
    }


    /**
     * 根据key更新数据
     */
    public boolean update(final String key, Object value) {
        boolean res = false;
        try {
            redisTemplate.opsForValue().getAndSet(key, value);
            log.info("更新redis成功，key：{}，value：{}", key, value);
            res = true;
        } catch (Exception e) {
            log.error("更新redis失败，key：{}，value：{}", key, value);
            e.printStackTrace();
        }
        return res;
    }

    /**
     * 根据key删除数据
     */
    public boolean del(final String key) {
        boolean res = false;
        try {
            redisTemplate.delete(key);
            res = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }

    /**
     * 是否存在key
     */
    public boolean hasKey(final String key) {
        boolean res = false;
        try {
            res = redisTemplate.hasKey(key);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }

    /**
     * 给指定的key设置存活时间
     * 默认为-1，表示永久不失效
     */
    public boolean setExpire(final String key, long seconds) {
        boolean res = false;
        try {
            if (0 < seconds) {
                res = redisTemplate.expire(key, seconds, TimeUnit.SECONDS);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }

    /**
     * 获取指定key的剩余存活时间
     * 默认为-1，表示永久不失效，-2表示该key不存在
     */
    public long getExpire(final String key) {
        long res = 0;
        try {
            res = redisTemplate.getExpire(key, TimeUnit.SECONDS);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }

    /**
     * 移除指定key的有效时间
     * 当key的有效时间为-1即永久不失效和当key不存在时返回false，否则返回true
     */
    public boolean persist(final String key) {
        boolean res = false;
        try {
            res = redisTemplate.persist(key);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }

    /**
     * 移除窗口范围外的数据
     */
    public Long removeRangeByScore(String key, double min, double max) {
        return redisTemplate.opsForZSet().removeRangeByScore(key, min, max);
    }

    /**
     * 统计当前元素数量
     *
     * @param key
     * @return
     */
    public Long zCard(String key) {
        return redisTemplate.opsForZSet().zCard(key);
    }

    /**
     * 向zSet中添加元素
     *
     * @param key
     * @param member
     * @param score
     */
    public Boolean zAddToSet(String key, Object member, double score) {
        return redisTemplate.opsForZSet().add(key, member, score);
    }

    /**
     * 尾插入list
     *
     * @param key
     * @param value
     */
    public void pushToRightList(String key, Object value) {
        redisTemplate.opsForList().rightPush(key, value);
    }

    /**
     * 头插入list
     *
     * @param key
     * @param value
     */
    public void pushToLeftList(String key, Object value) {
        redisTemplate.opsForList().leftPush(key, value);
    }

    /**
     * 从list的尾部弹出节点元素，并删除
     *
     * @param key
     */
    public void popFromList(String key) {
        redisTemplate.opsForList().rightPop(key);
    }

    /**
     * 从list的头部弹出节点元素，并删除
     *
     * @param key
     */
    public void pollFromList(String key) {
        redisTemplate.opsForList().leftPop(key);
    }

    /**
     * 从list中获取指定范围的元素
     *
     * @param key
     * @param start
     * @param end
     * @return
     */
    public Object getValueFromList(String key, int start, int end) {
        List<Object> res = redisTemplate.opsForList().range(key, start, end);
        if (res != null && res.size() > 0) {
            return res.get(0);
        } else {
            return null;
        }
    }
}
