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
package cn.qing.server.spi.balance;

import cn.qing.common.constants.LoadBalanceConstants;
import cn.qing.common.dto.ServiceInstance;
import cn.qing.server.annotation.LoadBalanceType;
import cn.qing.server.spi.LoadBalance;

import java.util.List;

/**
 * 轮询算法
 *
 * @author conghuhu
 */
@LoadBalanceType(LoadBalanceConstants.LOAD_BALANCE_ROUND_ROBIN)
public class RoundRobinBalance implements LoadBalance {

    private volatile int index;

    @Override
    public synchronized ServiceInstance chooseOne(List<ServiceInstance> instances) {
        if (index == instances.size()) {
            index = 0;
        }
        return instances.get(index++);
    }
}
