package cn.qing.admin.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.time.LocalDateTime;
import java.io.Serializable;
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
@ApiModel(value="QService对象", description="")
public class QService implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "应用名称")
    private String serviceName;

    @ApiModelProperty(value = "描述")
    private String description;

    @ApiModelProperty(value = "路径上下文")
    private String contextPath;

    @ApiModelProperty(value = "是否开启，1开启0未开启")
    private Boolean enabled;

    @ApiModelProperty(value = "创建时间")
    private LocalDateTime createdTime;


}
