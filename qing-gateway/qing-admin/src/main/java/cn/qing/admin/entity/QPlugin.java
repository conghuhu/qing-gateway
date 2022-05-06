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
@ApiModel(value="QPlugin对象", description="")
public class QPlugin implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "插件名称 eg:DynamicRoute,类的名称")
    private String name;

    @ApiModelProperty(value = "描述，如鉴权")
    private String description;

    @ApiModelProperty(value = "顺序")
    private Integer order;

    @ApiModelProperty(value = "0为false，1为true")
    private Boolean skip;

    @ApiModelProperty(value = "创建时间")
    private LocalDateTime createdTime;


}
