package cn.qing.server.config;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.jsontype.impl.LaissezFaireSubTypeValidator;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.module.paramnames.ParameterNamesModule;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.redis.connection.ReactiveRedisConnectionFactory;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.ReactiveRedisTemplate;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializationContext;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

/**
 * redis配置
 *
 * @author conghuhu
 * @create 2022-04-14 19:54
 */
@Configuration
public class RedisConfig {

    @Bean
    public RedisSerializationContext redisSerializationContext() {
        RedisSerializationContext.RedisSerializationContextBuilder builder = RedisSerializationContext.newSerializationContext();
        builder.key(StringRedisSerializer.UTF_8);
        builder.value(RedisSerializer.json());
        builder.hashKey(StringRedisSerializer.UTF_8);
        builder.hashValue(StringRedisSerializer.UTF_8);
        return builder.build();
    }

    @Bean
    public ReactiveRedisTemplate reactiveRedisTemplate(ReactiveRedisConnectionFactory connectionFactory) {
        RedisSerializationContext serializationContext = redisSerializationContext();
        return new ReactiveRedisTemplate(connectionFactory, serializationContext);
    }

    @Primary
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
        //objectMapper.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);//最近升级SpringBoot，发现enableDefaultTyping方法过期过期了。可以使用下面的方法代替
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
}
