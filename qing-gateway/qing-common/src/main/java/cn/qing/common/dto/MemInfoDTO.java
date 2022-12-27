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
import java.util.List;

@Data
public class MemInfoDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 总内存 单位B
     */
    private Long totalMem;

    /**
     * 已用内存
     */
    private Long usedMem;

    /**
     * 剩余内存
     */
    private Long freeMem;

    /**
     * 已用内存百分比
     */
    private Double usedRate;

    /**
     * 统计时间
     */
    private Long collectTime;
}
