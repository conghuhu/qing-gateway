package cn.qing.admin.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableField;

import java.io.Serializable;
import java.time.LocalDateTime;

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
 * @since 2022-04-18
 */
@Data
@EqualsAndHashCode(callSuper = false)
@ApiModel(value = "QLog对象", description = "")
public class QLog implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @TableField("originIP")
    private String originIP;

    @TableField("originURI")
    private String originuri;

    private String targetService;

    private String serviceInstance;

    private String routeName;

    @TableField("proxyURI")
    private String proxyuri;

    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime createdTime;
}
