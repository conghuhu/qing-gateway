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
package cn.qing.admin.service.impl;

import cn.qing.admin.entity.QLimitRule;
import cn.qing.admin.event.limitEvent.LimitRuleAddEvent;
import cn.qing.admin.event.limitEvent.LimitRuleDeleteEvent;
import cn.qing.admin.event.limitEvent.LimitRuleUpdateEvent;
import cn.qing.admin.mapper.QLimitRuleMapper;
import cn.qing.admin.service.QLimitRuleService;
import cn.qing.common.exception.QingException;
import cn.qing.common.dto.LimitRuleDTO;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.BeanUtils;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-15
 */
@Service
public class QLimitRuleServiceImpl extends ServiceImpl<QLimitRuleMapper, QLimitRule> implements QLimitRuleService {

    private final QLimitRuleMapper limitRuleMapper;

    public QLimitRuleServiceImpl(QLimitRuleMapper limitRuleMapper) {
        this.limitRuleMapper = limitRuleMapper;
    }

    @Resource
    private ApplicationEventPublisher eventPublisher;

    /**
     * 查询所有限制规则
     *
     * @return
     */
    @Override
    public List<QLimitRule> getLimitRuleList() {
        List<QLimitRule> qLimitRules = limitRuleMapper.selectList(new LambdaQueryWrapper<>());
        return qLimitRules;
    }

    /**
     * 添加限制规则
     *
     * @param limitRule
     * @return
     */
    @Override
    public QLimitRule addLimitRule(QLimitRule limitRule) {
        limitRuleMapper.insert(limitRule);
        Map<String, LimitRuleDTO> map = new HashMap<>(1);
        LimitRuleDTO limitRuleDTO = new LimitRuleDTO();
        BeanUtils.copyProperties(limitRule, limitRuleDTO);
        map.put(limitRuleDTO.getLimitKey(), limitRuleDTO);
        eventPublisher.publishEvent(new LimitRuleAddEvent(this, map));
        return limitRule;
    }

    /**
     * 修改限制规则
     *
     * @param limitRule
     */
    @Override
    public void updateLimitRule(QLimitRule limitRule) {
        limitRuleMapper.updateById(limitRule);
        Map<String, LimitRuleDTO> map = new HashMap<>(1);
        LimitRuleDTO limitRuleDTO = new LimitRuleDTO();
        BeanUtils.copyProperties(limitRule, limitRuleDTO);
        map.put(limitRuleDTO.getLimitKey(), limitRuleDTO);
        eventPublisher.publishEvent(new LimitRuleUpdateEvent(this, map));
    }

    /**
     * 删除限制规则
     *
     * @param id
     */
    @Override
    public void deleteLimitRule(Long id) {
        QLimitRule limitRule = limitRuleMapper.selectById(id);
        if (limitRule == null) {
            throw new QingException("限制规则不存在");
        }
        limitRuleMapper.deleteById(id);
        eventPublisher.publishEvent(new LimitRuleDeleteEvent(this, limitRule.getLimitKey()));
    }
}
