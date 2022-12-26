package cn.qing.admin.event.limitEvent;

import cn.qing.common.dto.LimitRuleDTO;
import org.springframework.context.ApplicationEvent;

import java.util.Map;

/**
 * @author conghuhu
 * @create 2022-04-15 13:39
 */
public class LimitRuleAddEvent extends ApplicationEvent {

    private Map<String, LimitRuleDTO> limitRuleMap;

    public LimitRuleAddEvent(Object source, Map<String, LimitRuleDTO> limitRuleMap) {
        super(source);
        this.limitRuleMap = limitRuleMap;
    }

    public Map<String, LimitRuleDTO> getLimitRuleMap() {
        return limitRuleMap;
    }
}
