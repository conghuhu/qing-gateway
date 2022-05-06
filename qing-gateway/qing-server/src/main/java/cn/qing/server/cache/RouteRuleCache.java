package cn.qing.server.cache;

import cn.qing.common.exception.QingException;
import cn.qing.common.pojo.dto.ServiceRuleDTO;
import lombok.extern.slf4j.Slf4j;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 路由规则缓存
 *
 * @author conghuhu
 * @create 2022-04-07 10:01
 */
@Slf4j
public class RouteRuleCache {
    /**
     * 路由规则缓存
     * key: routeName
     * value: ServiceRuleDTO
     */
    private static final Map<String, ServiceRuleDTO> ROUTE_RULE_MAP = new ConcurrentHashMap<>();

    /**
     * 添加路由规则
     *
     * @param map
     */
    public static void addRule(Map<String, ServiceRuleDTO> map) {
        ROUTE_RULE_MAP.putAll(map);
    }

    public static void updateRule(Map<String, ServiceRuleDTO> map) {
        ROUTE_RULE_MAP.putAll(map);
    }

    /**
     * 删除某条路由规则
     *
     * @param routeName
     */
    public static void removeRule(String routeName) {
        ROUTE_RULE_MAP.remove(routeName);
    }

    /**
     * 获取某条路由规则
     *
     * @param routeName
     * @return
     */
    public static ServiceRuleDTO getServiceRule(String routeName) {
        return Optional.ofNullable(ROUTE_RULE_MAP.get(routeName))
                .orElseThrow(() -> new QingException("routeName: " + routeName + " not found"));
    }
}
