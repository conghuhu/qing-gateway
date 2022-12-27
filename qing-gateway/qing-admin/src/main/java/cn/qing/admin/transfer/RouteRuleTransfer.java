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
package cn.qing.admin.transfer;

import cn.qing.admin.entity.QRouteRule;
import cn.qing.admin.entity.QService;
import cn.qing.admin.pojo.vo.RouteRuleVo;

import java.util.List;

/**
 * @author conghuhu
 * @create 2022-04-09 14:38
 */
public class RouteRuleTransfer {
    public static RouteRuleVo getRouteRuleVoList(QRouteRule routeRule, QService service) {
        RouteRuleVo routeRuleVo = new RouteRuleVo();
        routeRuleVo.setId(routeRule.getId());
        routeRuleVo.setPredicates(routeRule.getPredicates());
        routeRuleVo.setCreatedTime(routeRule.getCreatedTime());
        routeRuleVo.setPriority(routeRule.getPriority());
        routeRuleVo.setEnabled(routeRule.getEnabled());
        routeRuleVo.setService(service);
        return routeRuleVo;
    }
}
