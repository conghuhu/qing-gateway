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
package cn.qing.server.sync;

import cn.qing.common.dto.WebsocketMessageDTO;
import cn.qing.server.config.properties.ServerConfigProperties;
import com.alibaba.fastjson.JSON;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.ContextRefreshedEvent;

/**
 * @author conghuhu
 * @create 2022-04-05 9:58
 */
@Slf4j
@Configuration
public class DataSyncTaskStarter implements ApplicationListener<ContextRefreshedEvent> {

    private final ServerConfigProperties properties;

    /**
     * 数据同步任务
     */
    public static DataSyncTask dataSyncTask;

    public DataSyncTaskStarter(ServerConfigProperties properties) {
        this.properties = properties;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        log.info("数据同步模块初始化,启动websocket服务");
        dataSyncTask = new DataSyncTask(properties);
        dataSyncTask.start();
    }

    /**
     * 向admin发送消息
     *
     * @param messageDTO
     */
    public void sendMessage(WebsocketMessageDTO messageDTO) {
        dataSyncTask.send(JSON.toJSONString(messageDTO));
    }
}
