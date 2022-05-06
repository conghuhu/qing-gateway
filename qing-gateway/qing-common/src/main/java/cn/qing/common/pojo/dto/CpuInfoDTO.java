package cn.qing.common.pojo.dto;

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
