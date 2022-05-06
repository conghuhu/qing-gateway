package cn.qing.admin.transfer;

import cn.qing.admin.entity.QRouteRule;
import cn.qing.admin.entity.QService;
import cn.qing.admin.pojo.vo.RouteRuleVo;

import java.util.List;

/**
 * @author conghuhu
 * @create 2022-04-09 14:38
 */
public class RouteRuleTransfer {
    public static RouteRuleVo getRouteRuleVoList(QRouteRule routeRule, QService service) {
        RouteRuleVo routeRuleVo = new RouteRuleVo();
        routeRuleVo.setId(routeRule.getId());
        routeRuleVo.setPredicates(routeRule.getPredicates());
        routeRuleVo.setCreatedTime(routeRule.getCreatedTime());
        routeRuleVo.setPriority(routeRule.getPriority());
        routeRuleVo.setEnabled(routeRule.getEnabled());
        routeRuleVo.setService(service);
        return routeRuleVo;
    }
}
