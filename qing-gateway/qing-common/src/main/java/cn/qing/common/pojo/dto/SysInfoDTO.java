package cn.qing.common.pojo.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class SysInfoDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String osName;

    private String osArch;

    private String osVersion;

    private Long collectTime;

}
