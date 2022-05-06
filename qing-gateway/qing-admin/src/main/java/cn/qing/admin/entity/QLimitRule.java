package cn.qing.admin.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;

import java.io.Serializable;

import com.baomidou.mybatisplus.annotation.TableId;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 *
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-15
 */
@Data
@EqualsAndHashCode(callSuper = false)
@ApiModel(value = "QLimitRule对象", description = "")
public class QLimitRule implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "限流key，ip或接口名")
    @TableField("limitKey")
    private String limitKey;

    @ApiModelProperty(value = "限流规则类型，ip还是接口")
    private String type;

    @ApiModelProperty(value = "限流单位，秒或分钟")
    @TableField("timeUnit")
    private String timeunit;

    @TableField("QPS")
    private Integer qps;

    @TableField("QPM")
    private Integer qpm;


}
