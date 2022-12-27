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

import org.springframework.context.ApplicationEvent;

/**
 * @author conghuhu
 * @create 2022-04-08 15:59
 */
public class RuleDeleteEvent extends ApplicationEvent {

    private String routeName;

    public RuleDeleteEvent(Object source, String routeName) {
        super(source);
        this.routeName = routeName;
    }

    public String getRouteName() {
        return routeName;
    }
}
