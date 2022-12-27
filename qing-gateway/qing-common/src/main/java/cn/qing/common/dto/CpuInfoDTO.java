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
 * CPU信息类
 *
 * @author qing
 */
@Data
public class CpuInfoDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * CPU核心数
     */
    private Integer cpuCoreCount;

    /**
     * CPU系统的使用率
     */
    private Double cpuSysUsage;

    /**
     * CPU用户的使用率
     */
    private Double cpuUserUsage;

    /**
     * CPU当前空闲率
     */
    private Double cpuIdleUsage;

    /**
     * CPU当前等待率
     */
    private Double cpuWaitUsage;

    /**
     * CPU当前总使用率
     */
    private Double cpuCombinedUsage;

    /**
     * 采集时间
     */
    private Long collectTime;

}
