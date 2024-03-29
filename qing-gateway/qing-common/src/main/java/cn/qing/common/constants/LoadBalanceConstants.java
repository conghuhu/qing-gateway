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
package cn.qing.common.constants;

import lombok.Data;

/**
 * 负载均衡常量
 *
 * @author conghuhu
 * @create 2022-04-03 21:45
 */
public final class LoadBalanceConstants {
    /**
     * 轮询
     */
    public static final String LOAD_BALANCE_ROUND_ROBIN = "round_robin";
    /**
     * 加权轮询
     */
    public static final String WEIGHT_ROUND = "weightRound";
    /**
     * 随机
     */
    public static final String RANDOM = "random";
    /**
     * 平滑加权轮询
     */
    public static final String SMOOTH_WEIGHT_ROUND = "smoothWeightRound";
}
