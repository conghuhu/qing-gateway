package cn.qing.admin.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.time.LocalDateTime;
import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonFormat;
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
 * @since 2022-04-08
 */
@Data
@EqualsAndHashCode(callSuper = false)
@ApiModel(value="QRouteRule对象", description="")
public class QRouteRule implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "转发到的应用Id")
    private Long serviceId;

    @ApiModelProperty(value = "匹配key,路由断言")
    private String predicates;

    @ApiModelProperty(value = "优先级，值越大优先级越高")
    private Integer priority;

    @ApiModelProperty(value = "是否启用，1=开启0=禁用")
    private Boolean enabled;

    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    @ApiModelProperty(value = "创建时间")
    private LocalDateTime createdTime;


}
