package cn.qing.server.spi.balance;

import cn.qing.common.constants.LoadBalanceConstants;
import cn.qing.common.dto.ServiceInstance;
import cn.qing.server.annotation.LoadBalanceType;
import cn.qing.server.spi.LoadBalance;

import java.util.List;
import java.util.Random;

/**
 * 随机算法
 *
 * @author conghuhu
 */
@LoadBalanceType(LoadBalanceConstants.RANDOM)
public class RandomBalance implements LoadBalance {

    private static Random random = new Random();

    @Override
    public ServiceInstance chooseOne(List<ServiceInstance> instances) {
        return instances.get(random.nextInt(instances.size()));
    }
}
