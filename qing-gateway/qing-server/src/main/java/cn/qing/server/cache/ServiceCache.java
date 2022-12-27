/*
 * Copyright 2023 qing-gateway
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
