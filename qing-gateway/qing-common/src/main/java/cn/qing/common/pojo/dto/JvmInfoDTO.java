package cn.qing.common.pojo.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class JvmInfoDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * JVM 内存总量 单位B
     */
    private Long jvmTotalMemoryByte;

    /**
     * JVM 当前可用内存
     */
    private Long jvmFreeMemoryByte;

    /**
     * JVM 最大可申请内存
     */
    private Long jvmMaxMemoryByte;

    /**
     * JDK版本
     */
    private String jdkVersion;

    /**
     * jvm内存使用率
     */
    private Double jvmMemoryUsedRate;

    private Long collectTime;

}
