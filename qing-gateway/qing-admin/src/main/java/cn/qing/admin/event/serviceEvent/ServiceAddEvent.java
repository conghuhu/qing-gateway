package cn.qing.admin.event.serviceEvent;

import cn.qing.common.dto.ServiceInstance;
import org.springframework.context.ApplicationEvent;

import java.util.List;
import java.util.Map;

/**
 * @author conghuhu
 * @create 2022-04-08 16:13
 */
public class ServiceAddEvent extends ApplicationEvent {

    private Map<String, List<ServiceInstance>> serviceMap;

    public ServiceAddEvent(Object source, Map<String, List<ServiceInstance>> serviceMap) {
        super(source);
        this.serviceMap = serviceMap;
    }

    public Map<String, List<ServiceInstance>> getServiceMap() {
        return serviceMap;
    }
}
