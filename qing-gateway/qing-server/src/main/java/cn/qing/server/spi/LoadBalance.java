package cn.qing.server.spi;

import cn.qing.common.dto.ServiceInstance;

import java.util.List;

/**
 * @author conghuhu
 * @create 2022-04-06 20:20
 */
public interface LoadBalance {
    /**
     * Select an instance based on the load balancing algorithm
     * @param instances
     * @return
     */
    ServiceInstance chooseOne(List<ServiceInstance> instances);
}
