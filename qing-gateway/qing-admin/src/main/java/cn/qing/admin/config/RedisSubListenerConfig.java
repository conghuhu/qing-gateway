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
package cn.qing.admin.config;

import cn.qing.admin.sync.RedisReceiver;
import cn.qing.common.constants.RedisChannel;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.listener.PatternTopic;
import org.springframework.data.redis.listener.RedisMessageListenerContainer;
import org.springframework.data.redis.listener.adapter.MessageListenerAdapter;

//@Configuration
public class RedisSubListenerConfig {
    /**
     * 消息适配器
     * <p>
     * 绑定消息监听者和接收监听的方法,必须要注入这个监听器，不然会报错
     *
     * @return MessageListenerAdapter
     */
    @Bean
    public MessageListenerAdapter listenerAdapter() {
        return new MessageListenerAdapter(new RedisReceiver(), "receiveMessage");
    }

    /**
     * 定义消息监听者容器
     *
     * @param connectionFactory 连接工厂
     * @param listenerAdapter   消息处理器
     * @return RedisMessageListenerContainer
     */
    @Bean
    public RedisMessageListenerContainer container(RedisConnectionFactory connectionFactory,
                                                   MessageListenerAdapter listenerAdapter) {
        RedisMessageListenerContainer listenerContainer = new RedisMessageListenerContainer();
        listenerContainer.setConnectionFactory(connectionFactory);
        listenerContainer.addMessageListener(listenerAdapter, new PatternTopic(RedisChannel.MONITOR_CHANNEL));
        return listenerContainer;
    }
}
