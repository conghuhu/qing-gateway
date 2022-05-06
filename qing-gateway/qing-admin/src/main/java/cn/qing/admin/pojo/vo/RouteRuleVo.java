package cn.qing.admin.pojo.vo;

import cn.qing.admin.entity.QService;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * @author conghuhu
 * @create 2022-04-09 14:34
 */
@Data
public class RouteRuleVo implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;

    private QService service;

    private String predicates;

    private Integer priority;

    private Boolean enabled;

    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime createdTime;
}
