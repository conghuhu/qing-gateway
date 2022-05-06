package cn.qing.admin.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;

import java.beans.Transient;
import java.time.LocalDateTime;
import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

/**
 * @author conghuhu
 * @since 2022-04-08
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@ApiModel(value = "QWebsocketInfo对象", description = "")
public class QWebsocketInfo implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "网关所在websocket地址")
    private String uri;

    @ApiModelProperty(value = "在IOC中的bean名称")
    private String beanName;

    @ApiModelProperty(value = "是否开启，1开启0未开启")
    private Boolean enabled;

    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    @ApiModelProperty(value = "创建时间")
    private LocalDateTime createdTime;

    @ApiModelProperty(value = "实例ip")
    private String ip;

    @TableField(exist = false)
    @ApiModelProperty(value = "实例状态")
    private Boolean status;
}
