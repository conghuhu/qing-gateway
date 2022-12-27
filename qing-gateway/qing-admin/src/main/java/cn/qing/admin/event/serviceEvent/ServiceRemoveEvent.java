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
package cn.qing.admin.event.serviceEvent;

import org.springframework.context.ApplicationEvent;

import java.util.List;

/**
 * @author conghuhu
 * @create 2022-04-09 12:39
 */
public class ServiceRemoveEvent extends ApplicationEvent {
    private List<String> onlineServices;

    public ServiceRemoveEvent(Object source, List<String> onlineServices) {
        super(source);
        this.onlineServices = onlineServices;
    }

    public List<String> getOnlineServices() {
        return onlineServices;
    }
}
