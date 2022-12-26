package cn.qing.common.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * 限流规则DTO
 *
 * @author conghuhu
 * @create 2022-04-14 20:50
 */
@Data
public class LimitRuleDTO implements Serializable {
    
    private static final long serialVersionUID = -81259258818147060L;

    /**
     * 限流key，ip或接口名
     */
    private String limitKey;

    /**
     * 限流规则类型,ip还是接口
     */
    private String type;

    /**
     * 限流单位，秒或分钟
     */
    private String timeunit;

    /**
     * 每秒可以访问的次数
     */
    private Integer qps;

    /**
     * 每分钟可以访问的次数
     */
    private Integer qpm;
}
