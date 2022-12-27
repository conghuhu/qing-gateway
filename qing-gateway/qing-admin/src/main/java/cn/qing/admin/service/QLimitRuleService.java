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

import cn.qing.admin.entity.QLimitRule;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-15
 */
public interface QLimitRuleService extends IService<QLimitRule> {

    /**
     * 查询所有限制规则
     * @return
     */
    List<QLimitRule> getLimitRuleList();

    /**
     * 添加限制规则
     * @param limitRule
     * @return
     */
    QLimitRule addLimitRule(QLimitRule limitRule);

    /**
     * 修改限制规则
     * @param limitRule
     */
    void updateLimitRule(QLimitRule limitRule);

    /**
     * 删除限制规则
     * @param id
     */
    void deleteLimitRule(Long id);
}
