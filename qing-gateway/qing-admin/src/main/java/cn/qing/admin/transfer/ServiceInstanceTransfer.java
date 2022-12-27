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
package cn.qing.admin.transfer;

import cn.qing.common.dto.ServiceInstance;
import com.alibaba.nacos.api.naming.pojo.Instance;

import java.util.ArrayList;
import java.util.List;

/**
 * @author conghuhu
 * @create 2022-04-08 19:10
 */
public class ServiceInstanceTransfer {

    public static List<ServiceInstance> convert(List<Instance> instanceList) {
        List<ServiceInstance> serviceInstanceList = new ArrayList<>();
        instanceList.forEach(instance -> {
            ServiceInstance serviceInstance = new ServiceInstance();
            serviceInstance.setServiceName(instance.getServiceName().split("@@")[1]);
            serviceInstance.setIp(instance.getIp());
            serviceInstance.setPort(instance.getPort());
            double weight = instance.getWeight();
            serviceInstance.setWeight(Double.valueOf(weight).intValue());
            serviceInstance.setClusterName(instance.getClusterName());
            serviceInstance.setVersion(instance.getMetadata().get("version"));
            serviceInstance.setProtocol(instance.getMetadata().get("protocol"));
            serviceInstance.setInstanceId(instance.getInstanceId());
            serviceInstanceList.add(serviceInstance);
        });
        return serviceInstanceList;
    }
}
