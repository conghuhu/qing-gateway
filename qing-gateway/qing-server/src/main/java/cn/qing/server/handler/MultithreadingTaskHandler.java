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
package cn.qing.server.handler;

import cn.qing.common.dto.LogDTO;
import cn.qing.server.cache.LogCache;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * @author qing
 */
@Service
@Slf4j
public class MultithreadingTaskHandler {

    private final LogCache logCache;

    public MultithreadingTaskHandler(LogCache logCache) {
        this.logCache = logCache;
    }

    /**
     * 经实验测得，同步优于异步
     *
     * @param logDTO
     */
//    @Async
    public void executeTask(LogDTO logDTO) {
        try {
            logCache.addLogDTO(logDTO);
        } catch (Exception e) {
            log.error("执行任务失败：{}", logDTO);
        }
    }
}
