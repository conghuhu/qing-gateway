package cn.qing.admin.service;

import cn.qing.admin.entity.QRouteRule;
import cn.qing.admin.pojo.vo.RouteRuleVo;
import cn.qing.admin.pojo.params.RouteRuleParam;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-08
 */
public interface QRouteRuleService extends IService<QRouteRule> {

    /**
     * 获取路由规则列表
     *
     * @return
     */
    List<RouteRuleVo> getRouteRuleList();

    /**
     * 新增路由规则
     *
     * @param routeRuleParam
     */
    QRouteRule addRouteRule(RouteRuleParam routeRuleParam);

    /**
     * 更新路由规则
     *
     * @param routeRuleParam
     */
    void updateRouteRule(RouteRuleParam routeRuleParam);

    /**
     * 删除路由规则
     * @param id
     */
    void deleteRouteRule(Long id);
}
