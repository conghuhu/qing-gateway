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
package cn.qing.admin.pojo.vo;

import cn.qing.common.dto.CpuInfoDTO;
import cn.qing.common.dto.JvmInfoDTO;
import cn.qing.common.dto.MemInfoDTO;
import cn.qing.common.dto.QpsDTO;
import cn.qing.common.dto.ThreadInfoDTO;
import lombok.Data;

import java.util.List;

/**
 * @author qing
 */
@Data
public class MonitorInfoVo {

    private String gatewayId;

    private List<QpsDTO> qpsDTOList;

    private List<CpuInfoDTO> cpuInfoList;

    private List<MemInfoDTO> memInfoList;

    private List<JvmInfoDTO> jvmInfoList;

    private List<ThreadInfoDTO> threadInfoList;

}
