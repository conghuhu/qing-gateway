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

import cn.qing.common.exception.QingException;
import cn.qing.common.dto.ServiceRuleDTO;
import cn.qing.server.utils.RouteTrie;
import lombok.extern.slf4j.Slf4j;

import java.util.Map;
import java.util.Optional;

/**
 * 路由规则缓存
 *
 * @author conghuhu
 * @create 2022-04-07 10:01
 */
@Slf4j
public class RouteRuleCache {

    /**
     * 路由规则缓存-前缀树
     */
    private static final RouteTrie ROUTE_RULE_ROUTE_TRIE = new RouteTrie();

    /**
     * 添加路由规则
     *
     * @param map key: path value: ServiceRuleDTO
     */
    public static void addRule(Map<String, ServiceRuleDTO> map) {
        for (Map.Entry<String, ServiceRuleDTO> entry : map.entrySet()) {
            String routeName = entry.getKey();
            ServiceRuleDTO serviceRuleDTO = entry.getValue();
            ROUTE_RULE_ROUTE_TRIE.insertRoute(routeName, serviceRuleDTO);
        }
    }

    public static void updateRule(Map<String, ServiceRuleDTO> map) {
        addRule(map);
    }

    /**
     * 删除某条路由规则
     *
     * @param routeName
     */
    public static void removeRule(String routeName) {
        ROUTE_RULE_ROUTE_TRIE.removeRouteRule(routeName);
    }

    /**
     * 获取某条路由规则
     *
     * @param path
     * @return
     */
    public static ServiceRuleDTO getServiceRule(String path) {
        return Optional.ofNullable(ROUTE_RULE_ROUTE_TRIE.getServiceRule(path))
            .orElseThrow(() -> new QingException("routeName: " + path + " not found"));
    }
}
