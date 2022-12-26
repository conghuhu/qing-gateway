package cn.qing.admin.event.ruleEvent;

import cn.qing.common.dto.ServiceRuleDTO;
import org.springframework.context.ApplicationEvent;

import java.util.Map;

/**
 * @author conghuhu
 * @create 2022-04-08 9:17
 */
public class RuleAddEvent extends ApplicationEvent {

    private Map<String, ServiceRuleDTO> serviceRuleMap;

    public RuleAddEvent(Object source, Map<String, ServiceRuleDTO> serviceRuleMap) {
        super(source);
        this.serviceRuleMap = serviceRuleMap;
    }

    public Map<String, ServiceRuleDTO> getServiceRuleMap() {
        return serviceRuleMap;
    }
}
