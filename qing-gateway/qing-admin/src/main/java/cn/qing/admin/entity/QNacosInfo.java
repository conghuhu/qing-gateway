package cn.qing.admin.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.time.LocalDateTime;
import java.io.Serializable;

import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

/**
 * <p>
 *
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-08
 */
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode(callSuper = false)
@ApiModel(value = "QNacosInfo对象", description = "")
public class QNacosInfo implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "nacos地址")
    private String address;

    @ApiModelProperty(value = "描述")
    private String description;

    @ApiModelProperty(value = "是否开启，1开启0未开启")
    private Boolean enabled;

    @ApiModelProperty(value = "创建时间")
    private LocalDateTime createdTime;


}
