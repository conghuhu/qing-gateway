package cn.qing.common.pojo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @author conghuhu
 * @create 2022-04-07 10:21
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ServiceRuleDTO implements Serializable {

    private static final long serialVersionUID = -66469240129393501L;

    /**
     * 路由名字,对应predicates
     */
    private String routeName;

    /**
     * 路由对应转发的服务名
     */
    private String serviceName;


    /**
     * 优先级，值越大优先级越高
     */
    private Integer priority;

}
