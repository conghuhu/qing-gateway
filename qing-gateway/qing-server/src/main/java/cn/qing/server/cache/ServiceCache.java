package cn.qing.server.cache;

import cn.qing.common.dto.ServiceInstance;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 本地缓存：服务->实例列表
 *
 * @author conghuhu
 * @create 2022-04-03 21:18
 */
public class ServiceCache {
    /**
     * key: serviceName 服务名称
     */
    private static final Map<String, List<ServiceInstance>> SERVICE_MAP = new ConcurrentHashMap<>();

    /**
     * 获取本地缓存某个服务的所有实例
     *
     * @param serviceName
     * @return
     */
    public static List<ServiceInstance> getAllInstances(String serviceName) {
        return SERVICE_MAP.get(serviceName);
    }

    /**
     * 添加 服务-实例列表 至缓存
     *
     * @param serviceMap
     */
    public static void addService(Map<String, List<ServiceInstance>> serviceMap) {
        for (Map.Entry<String, List<ServiceInstance>> entry : serviceMap.entrySet()) {
            String serviceName = entry.getKey();
            List<ServiceInstance> serviceInstanceList = entry.getValue();
            Collections.sort(serviceInstanceList);
            SERVICE_MAP.put(serviceName, serviceInstanceList);
        }
    }

    /**
     * 更新某个服务的缓存
     *
     * @param serviceMap
     */
    public static void update(Map<String, List<ServiceInstance>> serviceMap) {
        for (Map.Entry<String, List<ServiceInstance>> entry : serviceMap.entrySet()) {
            String serviceName = entry.getKey();
            List<ServiceInstance> serviceInstanceList = entry.getValue();
            Collections.sort(serviceInstanceList);
            SERVICE_MAP.put(serviceName, serviceInstanceList);
        }
    }

    /**
     * 移除失效的服务
     *
     * @param onlineServices
     */
    public static void removeExpired(List<String> onlineServices) {
        List<String> expiredKeys = new LinkedList<>();
        SERVICE_MAP.keySet().forEach(k -> {
            if (!onlineServices.contains(k)) {
                expiredKeys.add(k);
            }
        });
        expiredKeys.forEach(expiredKey -> SERVICE_MAP.remove(expiredKey));
    }
}
