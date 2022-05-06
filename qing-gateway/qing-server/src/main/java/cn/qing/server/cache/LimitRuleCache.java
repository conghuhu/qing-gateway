package cn.qing.server.cache;

import cn.qing.common.pojo.dto.LimitRuleDTO;
import lombok.extern.slf4j.Slf4j;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author conghuhu
 * @create 2022-04-14 20:59
 */
@Slf4j
public class LimitRuleCache {

    private static final Map<String, LimitRuleDTO> LIMIT_RULE_MAP = new ConcurrentHashMap<>(16);

    /**
     * 添加限流规则
     *
     * @param limitRuleDTO
     */
    public static void addLimitRule(Map<String, LimitRuleDTO> limitRuleMap) {
        LIMIT_RULE_MAP.putAll(limitRuleMap);
    }

    /**
     * 批量添加限流规则
     *
     * @param limitRuleMap
     */
    public static void updateLimitRule(Map<String, LimitRuleDTO> limitRuleMap) {
        LIMIT_RULE_MAP.putAll(limitRuleMap);
    }

    public static LimitRuleDTO getLimitRule(String ruleKey) {
        return LIMIT_RULE_MAP.get(ruleKey);
    }

    public static void removeLimitRule(String ruleKey) {
        LIMIT_RULE_MAP.remove(ruleKey);
    }

    public static void removeAllLimitRule() {
        LIMIT_RULE_MAP.clear();
    }

    public static Map<String, LimitRuleDTO> getLimitRuleMap() {
        return LIMIT_RULE_MAP;
    }
}
