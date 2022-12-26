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
