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
package cn.qing.admin.sync;

import cn.qing.admin.event.serviceEvent.ServiceRemoveEvent;
import cn.qing.admin.event.serviceEvent.ServiceUpdateEvent;
import cn.qing.admin.util.NacosUtil;
import cn.qing.admin.util.SpringContextUtil;
import cn.qing.admin.util.WebsocketClientUtil;
import cn.qing.common.constants.NacosConstants;
import cn.qing.common.dto.ServiceInstance;
import com.alibaba.nacos.api.naming.NamingService;
import com.alibaba.nacos.api.naming.pojo.ListView;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationEventPublisher;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * @author conghuhu
 * @create 2022-04-07 19:28
 */
@Slf4j
public class NacosSyncListener {

    @Resource
    private ApplicationEventPublisher eventPublisher;

    private final NacosUtil nacosUtil;

    private final ScheduledThreadPoolExecutor scheduledThreadPoolExecutor;

    public NacosSyncListener() {
        this.nacosUtil = SpringContextUtil.getInstance().getBean(NacosUtil.class);
        this.scheduledThreadPoolExecutor = SpringContextUtil.getInstance().getBean(ScheduledThreadPoolExecutor.class);
        this.init();
    }

    public void init() {
        log.info("NacosSyncListener init");
        scheduledThreadPoolExecutor.scheduleAtFixedRate(new NacosListenerTask(), 5, 5, TimeUnit.SECONDS);
    }

    /**
     * 关闭线程池
     */
    public void shutdown() {
        log.info("NacosSyncListener shutdown");
        scheduledThreadPoolExecutor.shutdown();
    }

    /**
     * 同步nacos数据线程
     */
    class NacosListenerTask implements Runnable {
        @Override
        public void run() {
            try {
                NamingService namingService = NacosUtil.getNamingService();
                ListView<String> services = namingService.getServicesOfServer(1, Integer.MAX_VALUE, NacosConstants.APP_GROUP_NAME);
                Map<String, List<ServiceInstance>> serviceMap = WebsocketClientUtil.getServiceMap(namingService, services);
                eventPublisher.publishEvent(new ServiceUpdateEvent(this, serviceMap));
                eventPublisher.publishEvent(new ServiceRemoveEvent(this, services.getData()));
            } catch (Exception e) {
                log.error("nacos sync error", e);
            }
        }
    }
}
