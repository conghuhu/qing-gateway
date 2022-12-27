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
package cn.qing.admin.service;

import cn.qing.admin.entity.QRouteRule;
import cn.qing.admin.pojo.vo.RouteRuleVo;
import cn.qing.admin.pojo.params.RouteRuleParam;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-08
 */
public interface QRouteRuleService extends IService<QRouteRule> {

    /**
     * 获取路由规则列表
     *
     * @return
     */
    List<RouteRuleVo> getRouteRuleList();

    /**
     * 新增路由规则
     *
     * @param routeRuleParam
     */
    QRouteRule addRouteRule(RouteRuleParam routeRuleParam);

    /**
     * 更新路由规则
     *
     * @param routeRuleParam
     */
    void updateRouteRule(RouteRuleParam routeRuleParam);

    /**
     * 删除路由规则
     * @param id
     */
    void deleteRouteRule(Long id);
}
