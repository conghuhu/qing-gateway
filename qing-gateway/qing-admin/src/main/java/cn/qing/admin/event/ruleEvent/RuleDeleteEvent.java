package cn.qing.admin.event.ruleEvent;

import org.springframework.context.ApplicationEvent;

/**
 * @author conghuhu
 * @create 2022-04-08 15:59
 */
public class RuleDeleteEvent extends ApplicationEvent {

    private String routeName;

    public RuleDeleteEvent(Object source, String routeName) {
        super(source);
        this.routeName = routeName;
    }

    public String getRouteName() {
        return routeName;
    }
}
