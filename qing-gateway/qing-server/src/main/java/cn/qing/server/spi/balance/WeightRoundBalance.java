package cn.qing.server.spi.balance;


import cn.qing.common.constants.LoadBalanceConstants;
import cn.qing.common.dto.ServiceInstance;
import cn.qing.server.annotation.LoadBalanceType;
import cn.qing.server.spi.LoadBalance;

import java.util.List;

/**
 * @Author: Ship
 * @Description:
 * @Date: Created in 2020/12/30
 */
@LoadBalanceType(LoadBalanceConstants.WEIGHT_ROUND)
public class WeightRoundBalance implements LoadBalance {

    private volatile int index;

    @Override
    public synchronized ServiceInstance chooseOne(List<ServiceInstance> instances) {
        int allWeight = instances.stream().mapToInt(ServiceInstance::getWeight).sum();
        int number = (index++) % allWeight;
        for (ServiceInstance instance : instances) {
            if (instance.getWeight() > number) {
                return instance;
            }
            number -= instance.getWeight();
        }
        return null;
    }
}
