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
package cn.qing.admin.service;

import cn.qing.admin.pojo.vo.MonitorInfoVo;
import cn.qing.admin.util.RedisUtil;
import cn.qing.common.dto.CpuInfoDTO;
import cn.qing.common.dto.JvmInfoDTO;
import cn.qing.common.dto.MemInfoDTO;
import cn.qing.common.dto.QpsDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MonitorService {

    private final RedisUtil redisUtil;

    public MonitorService(RedisUtil redisUtil) {
        this.redisUtil = redisUtil;
    }

    public List<MonitorInfoVo> getMonitorInfo() {
        List<String> websocketBeanList = CoreService.getWebsocketBeanList();
        List<MonitorInfoVo> resList = new ArrayList<>();
        websocketBeanList.forEach(websocketId -> {
            MonitorInfoVo monitorInfoVo = new MonitorInfoVo();
            monitorInfoVo.setGatewayId(websocketId);
            List<QpsDTO> qpsList = (List<QpsDTO>) redisUtil.getZSet(websocketId + "_sysQps");
            monitorInfoVo.setQpsDTOList(qpsList);
            List<CpuInfoDTO> cpuInfoList = (List<CpuInfoDTO>) redisUtil.getZSet(websocketId + "_cpu");
            monitorInfoVo.setCpuInfoList(cpuInfoList);
            List<MemInfoDTO> memInfoList = (List<MemInfoDTO>) redisUtil.getZSet(websocketId + "_mem");
            monitorInfoVo.setMemInfoList(memInfoList);
            List<JvmInfoDTO> jvmInfoList = (List<JvmInfoDTO>) redisUtil.getZSet(websocketId + "_jvm");
            monitorInfoVo.setJvmInfoList(jvmInfoList);
//            List<ThreadInfoDTO> threadInfoList = (List<ThreadInfoDTO>) redisUtil.getZSet(websocketId + "_thread");
//            monitorInfoVo.setThreadInfoList(threadInfoList);
            resList.add(monitorInfoVo);
        });
        return resList;
    }
}
