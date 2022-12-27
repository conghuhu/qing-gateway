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
package cn.qing.admin.event.limitEvent;

import org.springframework.context.ApplicationEvent;

/**
 * @author conghuhu
 * @create 2022-04-15 13:40
 */
public class LimitRuleDeleteEvent extends ApplicationEvent {

    private String key;

    public LimitRuleDeleteEvent(Object source, String key) {
        super(source);
        this.key = key;
    }

    public String getKey() {
        return key;
    }
}
