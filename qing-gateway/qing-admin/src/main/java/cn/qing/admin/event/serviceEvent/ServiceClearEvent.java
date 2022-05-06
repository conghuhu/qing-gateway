package cn.qing.admin.event.serviceEvent;

import org.springframework.context.ApplicationEvent;

/**
 * @author conghuhu
 * @create 2022-04-13 21:49
 */
public class ServiceClearEvent extends ApplicationEvent {

    private static final long serialVersionUID = -8586914174899662649L;

    public ServiceClearEvent(Object source) {
        super(source);
    }
}
