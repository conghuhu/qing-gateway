package cn.qing.admin.cache;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.stream.Collectors;

/**
 * @author conghuhu
 * @create 2022-04-12 10:13
 */
public class LoadBalanceCache {

    private static final List<String> loadBalanceList = new CopyOnWriteArrayList<>();

    private static String currentLoadBalance;

    public static void addAll(List<String> list) {
        loadBalanceList.addAll(list);
        List<String> distinctList = loadBalanceList.stream().distinct().collect(Collectors.toList());
        loadBalanceList.clear();
        loadBalanceList.addAll(distinctList);
    }

    public static List<String> getAll() {
        return loadBalanceList;
    }

    public static String getCurrentLoadBalance() {
        return currentLoadBalance;
    }

    public static void setCurrentLoadBalance(String currentLoadBalance) {
        LoadBalanceCache.currentLoadBalance = currentLoadBalance;
    }
}
