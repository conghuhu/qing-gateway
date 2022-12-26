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
