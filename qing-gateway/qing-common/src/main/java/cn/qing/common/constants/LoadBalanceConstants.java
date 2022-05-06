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
