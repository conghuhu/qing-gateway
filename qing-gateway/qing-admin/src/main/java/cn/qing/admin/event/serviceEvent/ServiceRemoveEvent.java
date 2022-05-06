package cn.qing.admin.event.serviceEvent;

import org.springframework.context.ApplicationEvent;

import java.util.List;

/**
 * @author conghuhu
 * @create 2022-04-09 12:39
 */
public class ServiceRemoveEvent extends ApplicationEvent {
    private List<String> onlineServices;

    public ServiceRemoveEvent(Object source, List<String> onlineServices) {
        super(source);
        this.onlineServices = onlineServices;
    }

    public List<String> getOnlineServices() {
        return onlineServices;
    }
}
