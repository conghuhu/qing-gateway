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
