package cn.qing.admin.event.serviceEvent.listener;

import cn.qing.admin.entity.QService;
import cn.qing.admin.entity.QServiceInstance;
import cn.qing.admin.event.serviceEvent.ServiceAddEvent;
import cn.qing.admin.event.serviceEvent.ServiceClearEvent;
import cn.qing.admin.event.serviceEvent.ServiceRemoveEvent;
import cn.qing.admin.event.serviceEvent.ServiceUpdateEvent;
import cn.qing.admin.service.CoreService;
import cn.qing.admin.service.QServiceInstanceService;
import cn.qing.admin.service.QServiceService;
import cn.qing.admin.util.WebsocketClientUtil;
import cn.qing.common.constants.ActionTypeEnum;
import cn.qing.common.constants.EventTypeEnum;
import cn.qing.common.pojo.dto.ServiceInstance;
import cn.qing.common.pojo.dto.WebsocketMessageDTO;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

/**
 * @author conghuhu
 * @create 2022-04-08 18:16
 */
@Slf4j
@Component
public class ServiceEventListener {

    private final QServiceService serviceService;

    private final QServiceInstanceService serviceInstanceService;

    public ServiceEventListener(QServiceService serviceService, QServiceInstanceService serviceInstanceService) {
        this.serviceService = serviceService;
        this.serviceInstanceService = serviceInstanceService;
    }

    private static Map<String, List<ServiceInstance>> serviceCacheMap = new ConcurrentHashMap<>(16);

    @Async
    @EventListener
    public void onAdd(ServiceAddEvent serviceAddEvent) {
        Map<String, List<ServiceInstance>> serviceMap = serviceAddEvent.getServiceMap();
        List<String> websocketBeanList = CoreService.getWebsocketBeanList();
        WebsocketMessageDTO websocketMessageDTO = WebsocketMessageDTO.builder()
                .eventType(EventTypeEnum.SERVICE.getName())
                .actionType(ActionTypeEnum.ADD.getCode())
                .serviceMap(serviceMap)
                .build();
        WebsocketClientUtil.sendToAll(websocketBeanList, websocketMessageDTO);
        log.info("???????????????{}", serviceMap);
        // ??????????????????????????????????????????
        serviceCacheMap.putAll(serviceMap);
        persistServiceAndInstance(serviceMap);
    }

    @Async
    @EventListener
    public void onUpdate(ServiceUpdateEvent serviceUpdateEvent) {
        Map<String, List<ServiceInstance>> serviceMap = serviceUpdateEvent.getServiceMap();
        // ????????????????????????????????????
        Map<String, List<ServiceInstance>> incrementServiceMap = getIncrementServiceMap(serviceMap);
        if (incrementServiceMap.isEmpty()) {
            return;
        }
        List<String> websocketBeanList = CoreService.getWebsocketBeanList();
        WebsocketMessageDTO websocketMessageDTO = WebsocketMessageDTO.builder()
                .eventType(EventTypeEnum.SERVICE.getName())
                .actionType(ActionTypeEnum.UPDATE.getCode())
                .serviceMap(incrementServiceMap)
                .build();
        WebsocketClientUtil.sendToAll(websocketBeanList, websocketMessageDTO);
        serviceCacheMap.putAll(incrementServiceMap);
        persistServiceAndInstance(incrementServiceMap);
    }

    @Async
    @EventListener
    public void onRemove(ServiceRemoveEvent serviceRemoveEvent) {
        List<String> onlineServices = serviceRemoveEvent.getOnlineServices();
        Set<String> serviceSet = serviceCacheMap.keySet();
        for (String serviceName : serviceSet) {
            if (!onlineServices.contains(serviceName)) {
                serviceCacheMap.remove(serviceName);
            }
        }
        List<String> websocketBeanList = CoreService.getWebsocketBeanList();
        WebsocketMessageDTO websocketMessageDTO = WebsocketMessageDTO.builder()
                .eventType(EventTypeEnum.SERVICE.getName())
                .actionType(ActionTypeEnum.REMOVE.getCode())
                .onlineServices(onlineServices)
                .build();
        WebsocketClientUtil.sendToAll(websocketBeanList, websocketMessageDTO);
    }

    @EventListener
    public void onClear(ServiceClearEvent serviceClearEvent) {
        serviceCacheMap.clear();
    }

    /**
     * ???????????????????????????
     *
     * @param serviceMap
     */
    public void persistServiceAndInstance(Map<String, List<ServiceInstance>> serviceMap) {
        serviceMap.forEach((serviceName, serviceInstances) -> {
            QService qService = new QService();
            qService.setServiceName(serviceName);
            qService.setEnabled(true);
            qService.setCreatedTime(LocalDateTime.now());
            serviceService.insert(qService);
            QService newService = serviceService.getOne(new LambdaQueryWrapper<QService>().eq(QService::getServiceName, serviceName));
            serviceInstances.parallelStream().forEach(serviceInstance -> {
                QServiceInstance qServiceInstance = new QServiceInstance();
                BeanUtils.copyProperties(serviceInstance, qServiceInstance);
                qServiceInstance.setPort(String.valueOf(serviceInstance.getPort()));
                qServiceInstance.setServiceId(newService.getId());
                qServiceInstance.setCreatedTime(LocalDateTime.now());
                qServiceInstance.setClustername(serviceInstance.getClusterName());
                serviceInstanceService.insert(qServiceInstance);
            });
        });
    }

    /**
     * ????????????serviceMap
     *
     * @param serviceMap
     * @return
     */
    public Map<String, List<ServiceInstance>> getIncrementServiceMap(Map<String, List<ServiceInstance>> serviceMap) {
        Map<String, List<ServiceInstance>> result = new HashMap<>(16);
        serviceMap.forEach((serviceName, serviceInstances) -> {
            if (serviceCacheMap.containsKey(serviceName)) {
                List<ServiceInstance> oldServiceInstances = serviceCacheMap.get(serviceName);
                List<ServiceInstance> newServiceInstances = serviceInstances;
                if (oldServiceInstances.size() == newServiceInstances.size()) {
                    List<ServiceInstance> reduce = newServiceInstances.stream()
                            .filter(item -> !contains(oldServiceInstances, item)).collect(Collectors.toList());
                    if (reduce.size() > 0) {
                        result.put(serviceName, newServiceInstances);
                    }
                } else {
                    result.put(serviceName, newServiceInstances);
                }
            } else {
                result.put(serviceName, serviceInstances);
            }
        });
        return result;
    }

    /**
     * ?????????????????????????????????????????????
     *
     * @param oldServiceInstances
     * @param instance
     * @return
     */
    private boolean contains(List<ServiceInstance> oldServiceInstances, ServiceInstance instance) {
        for (ServiceInstance oldServiceInstance : oldServiceInstances) {
            if (instance.equals(oldServiceInstance)) {
                return true;
            }
        }
        return false;
    }

}
