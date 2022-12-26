package cn.qing.common.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class QpsDTO implements Serializable {

    private static final long serialVersionUID = -8572612362424098981L;

    private Integer QPS;

    private Long collectTime;

}
