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
package cn.qing.server.factory;

import cn.qing.common.exception.QingException;
import cn.qing.server.annotation.LoadBalanceType;
import cn.qing.server.spi.LoadBalance;
import org.springframework.util.Assert;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author conghuhu
 * @create 2022-04-06 20:43
 */
public class LoadBalanceFactory {

    /**
     * key: serviceName
     * value: 负载均衡算法
     */
    private static final Map<String, LoadBalance> LOAD_BALANCE_MAP = new ConcurrentHashMap<>();

    /**
     * 获取负载均衡算法
     *
     * @param loadBalanceName
     * @param serviceName
     * @return
     */
    public static LoadBalance getInstance(final String loadBalanceName, String serviceName) {
        String key = serviceName;
        return LOAD_BALANCE_MAP.computeIfAbsent(key, (k) -> getLoadBalance(loadBalanceName));
    }

    /**
     * 根据loadBalanceName，从spi获取对应的负载均衡算法
     *
     * @param loadBalanceName
     * @return
     */
    private static LoadBalance getLoadBalance(String loadBalanceName) {
        ServiceLoader<LoadBalance> loader = ServiceLoader.load(LoadBalance.class);
        Iterator<LoadBalance> iterator = loader.iterator();
        // 迭代遍历，选择name为${loadBalanceName}负载均衡算法
        while (iterator.hasNext()) {
            LoadBalance loadBalance = iterator.next();
            LoadBalanceType loadBalanceType = loadBalance.getClass().getAnnotation(LoadBalanceType.class);
            Assert.notNull(loadBalanceType, "loadBalanceType can ont be null");
            if (loadBalanceType.value().equals(loadBalanceName)) {
                return loadBalance;
            }
        }
        throw new QingException("invalid load balance config, please check your config");
    }

    /**
     * 获取所有负载均衡算法
     *
     * @return
     */
    public static List<String> getAllLoadBalance() {
        ServiceLoader<LoadBalance> loader = ServiceLoader.load(LoadBalance.class);
        Iterator<LoadBalance> iterator = loader.iterator();
        List<String> loadBalances = new ArrayList<>(16);
        while (iterator.hasNext()) {
            LoadBalance loadBalance = iterator.next();
            LoadBalanceType loadBalanceType = loadBalance.getClass().getAnnotation(LoadBalanceType.class);
            loadBalances.add(loadBalanceType.value());
        }
        return loadBalances;
    }

}
