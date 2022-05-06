package cn.qing.server.cache;

import lombok.extern.slf4j.Slf4j;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 插件信息缓存
 *
 * @author conghuhu
 * @create 2022-04-04 15:11
 */
@Slf4j
public class PluginCache {
    /**
     * 定义一个ConcurrentHashMap，key: serviceName value: enabled plugins name
     */
    private static final Map<String, List<String>> pluginMap = new ConcurrentHashMap<>();

    /**
     * 定义一个向pluginMap中添加数据的方法
     */
    public static void addPlugin(String serviceName, List<String> plugins) {
        pluginMap.put(serviceName, plugins);
    }

    /**
     * 定义一个移除pluginMap中失效数据的方法
     */
    public static void removePlugin(List<String> serviceNames) {
        List<String> expiredKeys = new LinkedList<>();
        pluginMap.keySet().forEach(key -> {
            if (!serviceNames.contains(key)) {
                expiredKeys.add(key);
            }
        });
        expiredKeys.forEach(key -> pluginMap.remove(key));
    }
}
