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
 * @since 2022-04-24
 */
@Data
@EqualsAndHashCode(callSuper = false)
@ApiModel(value = "QUser对象", description = "")
public class QUser implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private String username;

    private String password;

    private LocalDateTime createdTime;

    private LocalDateTime lastLoginTime;

    private String salt;

}
