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
package cn.qing.admin.event.ruleEvent;

import cn.qing.common.dto.ServiceRuleDTO;
import org.springframework.context.ApplicationEvent;

import java.util.Map;

/**
 * @author conghuhu
 * @create 2022-04-08 9:17
 */
public class RuleAddEvent extends ApplicationEvent {

    private Map<String, ServiceRuleDTO> serviceRuleMap;

    public RuleAddEvent(Object source, Map<String, ServiceRuleDTO> serviceRuleMap) {
        super(source);
        this.serviceRuleMap = serviceRuleMap;
    }

    public Map<String, ServiceRuleDTO> getServiceRuleMap() {
        return serviceRuleMap;
    }
}
