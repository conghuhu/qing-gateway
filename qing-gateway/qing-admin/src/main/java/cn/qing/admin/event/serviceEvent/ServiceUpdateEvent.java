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

import cn.qing.common.dto.ServiceInstance;
import org.springframework.context.ApplicationEvent;

import java.util.List;
import java.util.Map;

/**
 * @author conghuhu
 * @create 2022-04-08 18:13
 */
public class ServiceUpdateEvent extends ApplicationEvent {

    private Map<String, List<ServiceInstance>> serviceMap;

    public ServiceUpdateEvent(Object source, Map<String, List<ServiceInstance>> serviceMap) {
        super(source);
        this.serviceMap = serviceMap;
    }

    public Map<String, List<ServiceInstance>> getServiceMap() {
        return serviceMap;
    }
}
