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
package cn.qing.common.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * @author qing
 */
@Data
public class ThreadInfoItemDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 线程Id
     */
    private Long threadId;

    /**
     * 线程名称
     */
    private String threadName;

    /**
     * 线程状态
     */
    private String threadState;

    /**
     * 线程优先级
     */
    private Integer threadPriority;

    /**
     * 线程组名称
     */
    private String threadGroupName;

    /**
     * 线程组活跃线程数
     */
    private Integer threadGroupActiveCount;

}
