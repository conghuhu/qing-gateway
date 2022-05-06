package cn.qing.admin.event.limitEvent;

import org.springframework.context.ApplicationEvent;

/**
 * @author conghuhu
 * @create 2022-04-15 13:40
 */
public class LimitRuleDeleteEvent extends ApplicationEvent {

    private String key;

    public LimitRuleDeleteEvent(Object source, String key) {
        super(source);
        this.key = key;
    }

    public String getKey() {
        return key;
    }
}
