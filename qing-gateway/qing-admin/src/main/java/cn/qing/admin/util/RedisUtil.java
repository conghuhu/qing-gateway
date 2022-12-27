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
package cn.qing.admin.util;

import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

@Slf4j
@Component
public class RedisUtil {

    private final RedisTemplate<String, Object> redisTemplate;

    public RedisUtil(RedisTemplate<String, Object> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    /**
     * 根据key读取数据
     */
    public Object get(final String key) {
        if (StringUtils.isBlank(key)) {
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
        if (StringUtils.isBlank(key)) {
            return false;
        }
        try {
            redisTemplate.opsForValue().set(key, value);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    /**
     * 写入数据，设置有效期
     *
     * @param key
     * @param value
     * @param seconds
     * @return
     */
    public boolean set(final String key, Object value, long seconds) {
        if (StringUtils.isBlank(key)) {
            return false;
        }
        try {
            redisTemplate.opsForValue().set(key, value, seconds, TimeUnit.SECONDS);
            return true;
        } catch (Exception e) {
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
            res = true;
        } catch (Exception e) {
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
     * 发布消息
     *
     * @param channel
     * @param message
     * @return
     */
    public boolean sendChannelMess(String channel, String message) {
        boolean res = false;
        try {
            redisTemplate.convertAndSend(channel, message);
            res = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }

    public List<?> getZSet(String key) {
        Set<Object> set = redisTemplate.opsForZSet().range(key, 0, -1);
        if (set != null && set.size() > 0) {
            return new ArrayList<>(set);
        }
        return new ArrayList<>();
    }
}
