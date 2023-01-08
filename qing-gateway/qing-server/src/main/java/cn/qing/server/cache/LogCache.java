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

import cn.qing.common.dto.LZ4CompressData;
import cn.qing.common.dto.LogDTO;
import cn.qing.common.dto.WebsocketMessageDTO;
import cn.qing.common.enums.ActionTypeEnum;
import cn.qing.common.enums.EventTypeEnum;
import cn.qing.common.exception.QingException;
import cn.qing.server.config.properties.AccessLoggingProperties;
import cn.qing.server.sync.WebsocketDataSyncClient;
import com.alibaba.fastjson.JSON;
import lombok.extern.slf4j.Slf4j;
import net.jpountz.lz4.LZ4Compressor;
import net.jpountz.lz4.LZ4Factory;
import org.apache.kafka.clients.CommonClientConfigs;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.KafkaException;
import org.apache.kafka.common.errors.AuthorizationException;
import org.apache.kafka.common.errors.OutOfOrderSequenceException;
import org.apache.kafka.common.errors.ProducerFencedException;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Properties;
import java.util.concurrent.BlockingQueue;
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
public class LogCache implements InitializingBean, DisposableBean {

    private static BlockingQueue<LogDTO> LINKED_BLOCKING_DEQUE;

    private final WebsocketDataSyncClient websocketDataSyncClient;

    private final ScheduledThreadPoolExecutor scheduledThreadPoolExecutor;

    private final AccessLoggingProperties properties;

    private Provider provider;

    public LogCache(WebsocketDataSyncClient websocketDataSyncClient,
                    ScheduledThreadPoolExecutor scheduledThreadPoolExecutor,
                    AccessLoggingProperties properties) {
        this.websocketDataSyncClient = websocketDataSyncClient;
        this.scheduledThreadPoolExecutor = scheduledThreadPoolExecutor;
        this.properties = properties;

        LINKED_BLOCKING_DEQUE = new LinkedBlockingDeque<>(properties.getBufferQueueSize());
    }

    /**
     * 添加日志
     *
     * @param logDTO
     */
    public boolean addLogDTO(LogDTO logDTO) {
        return LINKED_BLOCKING_DEQUE.offer(logDTO);
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        if ("admin".equals(properties.getStrategy())) {
            provider = new AdminProvider(websocketDataSyncClient);
        } else if ("kafka".equals(properties.getStrategy())) {
            provider = new KafkaProvider(properties);
        } else {
            throw new QingException("not support logging type, please check config.");
        }
        scheduledThreadPoolExecutor.scheduleAtFixedRate(() -> {
            int size = LINKED_BLOCKING_DEQUE.size();
            if (size == 0) {
                return;
            }
            log.debug("批量处理日志缓存池中日志：{}条", size);
            List<LogDTO> logContentList = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                logContentList.add(LINKED_BLOCKING_DEQUE.poll());
            }
            provider.sendMessage(logContentList);

        }, 0, 2000, TimeUnit.MILLISECONDS);
        log.info("init log cache pool");
    }

    @Override
    public void destroy() throws Exception {
        scheduledThreadPoolExecutor.shutdown();
    }

    interface Provider extends AutoCloseable {

        void initClient();

        void sendMessage(List<LogDTO> logDTOList);
    }

    static class AdminProvider implements Provider {

        private final WebsocketDataSyncClient websocketDataSyncClient;

        public AdminProvider(WebsocketDataSyncClient websocketDataSyncClient) {
            log.info("init logging provider: admin");
            this.websocketDataSyncClient = websocketDataSyncClient;
        }

        @Override
        public void initClient() {

        }

        @Override
        public void sendMessage(List<LogDTO> logDTOList) {
            WebsocketMessageDTO messageDTO = WebsocketMessageDTO.builder()
                    .eventType(EventTypeEnum.LOG.getName())
                    .actionType(ActionTypeEnum.ADD.getCode())
                    .logDTOList(logDTOList)
                    .build();
            websocketDataSyncClient.sendMessage(messageDTO);
        }

        @Override
        public void close() {

        }
    }

    static class KafkaProvider implements Provider {

        private final AccessLoggingProperties properties;

        private KafkaProducer<String, String> producer;

        private String topic;

        public KafkaProvider(AccessLoggingProperties properties) {
            log.info("init logging provider: kafka");
            this.properties = properties;

            initClient();
        }

        @Override
        public void initClient() {
            String topic = properties.getTopic();
            this.topic = topic;
            String nameserverAddress = properties.getNameserverAddr();

            if (!StringUtils.hasText(topic) || !StringUtils.hasText(nameserverAddress)) {
                log.error("init kafkaLogClient error, please check topic or nameserverAddress");
                return;
            }

            Properties props = new Properties();
            props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
            props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
            props.put(CommonClientConfigs.BOOTSTRAP_SERVERS_CONFIG, nameserverAddress);

            producer = new KafkaProducer<>(props);
            ProducerRecord<String, String> record = new ProducerRecord<>(topic, StringSerializer.class.getName(), StringSerializer.class.getName());
            try {
                producer.send(record);
                log.info("init kafkaLogClient success");
            } catch (ProducerFencedException | OutOfOrderSequenceException | AuthorizationException e) {
                // We can't recover from these exceptions, so our only option is to close the producer and exit.
                log.error("Init kafkaLogClient error, We can't recover from these exceptions, so our only option is to close the producer and exit", e);
                producer.close();
            } catch (KafkaException e) {
                // For all other exceptions, just abort the transaction and try again.
                log.error(
                        "init kafkaLogClient error，Exceptions other than ProducerFencedException or OutOfOrderSequenceException or AuthorizationException, just abort the transaction and try again", e);
            }
        }

        @Override
        public void sendMessage(List<LogDTO> logDTOList) {
            logDTOList.forEach(logDTO -> {
                ProducerRecord<String, String> record = toProducerRecord(topic, logDTO);
                try {
                    producer.send(record);
                } catch (Exception e) {
                    log.error("kafka push logs error", e);
                }
            });
        }

        private ProducerRecord<String, String> toProducerRecord(final String logTopic, final LogDTO log) {
            byte[] bytes = JSON.toJSONString(log).getBytes(StandardCharsets.UTF_8);
            String compressAlg = StringUtils.hasText(properties.getCompressAlg()) ? properties.getCompressAlg() : "";
            if ("LZ4".equalsIgnoreCase(compressAlg.trim())) {
                LZ4CompressData lz4CompressData = new LZ4CompressData(bytes.length, compressedByte(bytes));
                return new ProducerRecord<>(logTopic, JSON.toJSONString(lz4CompressData));
            } else {
                return new ProducerRecord<>(logTopic, JSON.toJSONString(log));
            }
        }

        private byte[] compressedByte(final byte[] srcByte) {
            LZ4Factory factory = LZ4Factory.fastestInstance();
            LZ4Compressor compressor = factory.fastCompressor();
            return compressor.compress(srcByte);
        }

        @Override
        public void close() {
            if (Objects.nonNull(producer)) {
                producer.close();
            }
        }
    }
}
