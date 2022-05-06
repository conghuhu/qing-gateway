package cn.qing.admin.pojo.params;

import lombok.Data;

/**
 * @author conghuhu
 * @create 2022-04-10 16:46
 */
@Data
public class RouteRuleParam {

    private Long id;

    private String serviceName;

    private String predicates;

    private Integer priority;

    private Boolean enabled;

}
