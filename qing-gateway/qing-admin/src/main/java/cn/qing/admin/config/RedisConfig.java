package cn.qing.admin.config;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.jsontype.impl.LaissezFaireSubTypeValidator;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializationContext;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import java.time.Duration;

@Configuration
@EnableCaching
public class RedisConfig {

    /**
     * 此时，将我们的redisTemplate加载到了我们的spring的上下文中，applicationContext
     *
     * @param factory
     * @return
     */
    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory factory) {
        //1.初始化一个redisTemplate
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<String, Object>();
        //2.序列话（一般用于key值）
        RedisSerializer<String> redisSerializer = new StringRedisSerializer();
        //3.引入json串的转化类（一般用于value的处理）
        Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);
        ObjectMapper objectMapper = new ObjectMapper();
        //3.1设置objectMapper的访问权限
        objectMapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        //3.2指定序列化输入类型,就是将数据库里的数据按照一定类型存储到redis缓存中。
        objectMapper.activateDefaultTyping(LaissezFaireSubTypeValidator.instance, ObjectMapper.DefaultTyping.NON_FINAL, JsonTypeInfo.As.WRAPPER_ARRAY);
        jackson2JsonRedisSerializer.setObjectMapper(objectMapper);
        //4.创建链接
        redisTemplate.setConnectionFactory(factory);
        //4.1redis key值序列化
        redisTemplate.setKeySerializer(redisSerializer);
        //4.2value序列化，因为我们的value大多是通过对象转化过来的，所以使用jackson2JsonRedisSerializer
        redisTemplate.setValueSerializer(jackson2JsonRedisSerializer);
        //4.3value序列化，hashmap的序列话
        redisTemplate.setHashValueSerializer(jackson2JsonRedisSerializer);
        return redisTemplate;
    }

    @Bean
    public CacheManager cacheManager(RedisConnectionFactory factory) {
        //1.序列话（一般用于key值）
        RedisSerializer<String> redisSerializer = new StringRedisSerializer();
        //2.引入json串的转化类（一般用于value的处理）
        Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);
        ObjectMapper objectMapper = new ObjectMapper();
        //2.1设置objectMapper的访问权限
        objectMapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        //2.2指定序列化输入类型,就是将数据库里的数据按照一定类型存储到redis缓存中。
        objectMapper.activateDefaultTyping(LaissezFaireSubTypeValidator.instance, ObjectMapper.DefaultTyping.NON_FINAL, JsonTypeInfo.As.WRAPPER_ARRAY);
        jackson2JsonRedisSerializer.setObjectMapper(objectMapper);
        //3.序列话配置，乱码问题解决以及我们缓存的时效性
        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig().
                //缓存时效性设置
                        entryTtl(Duration.ofSeconds(1000)).
                //key序列化
                        serializeKeysWith(RedisSerializationContext.SerializationPair.fromSerializer(redisSerializer)).
                //value序列化
                        serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(jackson2JsonRedisSerializer)).
                //空值不存入缓存
                        disableCachingNullValues();
        //4.创建cacheManager链接并设置属性
        RedisCacheManager cacheManager = RedisCacheManager.builder(factory).cacheDefaults(config).build();
        return cacheManager;
    }
}