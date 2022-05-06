package cn.qing.admin.pojo.vo;

import cn.qing.admin.entity.QServiceInstance;
import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

/**
 * @author conghuhu
 * @create 2022-04-09 14:57
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ServiceInfoVo implements Serializable {

    private static final long serialVersionUID = -81880795944227537L;

    private Long id;

    private String serviceName;

    private String contextPath;

    private String description;

    private Boolean enabled;

    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime createdTime;

    private List<QServiceInstance> serviceInstanceList;

}
