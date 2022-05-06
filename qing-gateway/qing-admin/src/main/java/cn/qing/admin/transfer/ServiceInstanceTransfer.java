package cn.qing.admin.transfer;

import cn.qing.common.pojo.dto.ServiceInstance;
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
