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

import cn.qing.admin.cache.LoadBalanceCache;
import cn.qing.admin.entity.QLimitRule;
import cn.qing.admin.entity.QNacosInfo;
import cn.qing.admin.event.serviceEvent.ServiceAddEvent;
import cn.qing.admin.event.serviceEvent.ServiceClearEvent;
import cn.qing.admin.pojo.params.InitParam;
import cn.qing.admin.pojo.vo.RouteRuleVo;
import cn.qing.admin.sync.NacosSyncListener;
import cn.qing.admin.util.NacosUtil;
import cn.qing.admin.util.SpringContextUtil;
import cn.qing.admin.util.WebsocketClientUtil;
import cn.qing.common.constants.NacosConstants;
import cn.qing.common.dto.LimitRuleDTO;
import cn.qing.common.dto.ServiceInstance;
import cn.qing.common.dto.ServiceRuleDTO;
import cn.qing.common.dto.WebsocketMessageDTO;
import cn.qing.common.enums.ActionTypeEnum;
import cn.qing.common.enums.EventTypeEnum;
import cn.qing.common.exception.QingException;
import com.alibaba.fastjson.JSON;
import com.alibaba.nacos.api.exception.NacosException;
import com.alibaba.nacos.api.naming.NamingService;
import com.alibaba.nacos.api.naming.pojo.ListView;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.java_websocket.WebSocket;
import org.springframework.beans.BeanUtils;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

/**
 * 核心方法
 *
 * @author conghuhu
 * @create 2022-04-07 20:46
 */
@Slf4j
@Service
public class CoreService {

    private final QRouteRuleService routeRuleService;

    private final QWebsocketInfoService websocketInfoService;

    private final QNacosInfoService nacosInfoService;

    private final QServiceService serviceService;

    private final QServiceInstanceService serviceInstanceService;

    private final QLimitRuleService limitRuleService;

    private final NacosUtil nacosUtil;

    @Resource
    private ApplicationEventPublisher eventPublisher;

    public CoreService(QRouteRuleService routeRuleService, QWebsocketInfoService websocketInfoService,
                       QNacosInfoService NacosInfoService, QServiceService serviceService,
                       QServiceInstanceService serviceInstanceService, QLimitRuleService limitRuleService, NacosUtil nacosUtil) {
        this.routeRuleService = routeRuleService;
        this.websocketInfoService = websocketInfoService;
        this.nacosInfoService = NacosInfoService;
        this.serviceService = serviceService;
        this.serviceInstanceService = serviceInstanceService;
        this.limitRuleService = limitRuleService;
        this.nacosUtil = nacosUtil;
    }

    /**
     * 初始化网关
     *
     * @param initDTO
     */
    @Transactional(rollbackFor = Exception.class)
    public void init(InitParam initDTO) throws ExecutionException, InterruptedException {
        if (StringUtils.hasLength(nacosUtil.getServerAddr())) {
            return;
        }
        // 设置nacos地址
        nacosUtil.setServerAddr(initDTO.getNacosServerAddr());
        // 初始化service以及实例
        CompletableFuture<Map<String, List<ServiceInstance>>> serviceMapFuture = initServiceInstance();

        // 将nacos信息存入数据库
        nacosInfoService.insert(QNacosInfo.builder()
                .address(initDTO.getNacosServerAddr())
                .enabled(true)
                .createdTime(LocalDateTime.now())
                .build());

        // 阻塞等待
        Map<String, List<ServiceInstance>> serviceMap = serviceMapFuture.get();
        // 启动NacosSyncListener，轮询更新nacos数据
        SpringContextUtil.getInstance().addBean(NacosSyncListener.class, "nacosSyncListener");
        // 发布serviceAdd事件
        eventPublisher.publishEvent(new ServiceAddEvent(this, serviceMap));
    }

    /**
     * 初始化service以及实例
     *
     * @return
     */
    public CompletableFuture<Map<String, List<ServiceInstance>>> initServiceInstance() {
        return CompletableFuture.supplyAsync(() -> {
            NamingService namingService = NacosUtil.getNamingService();
            try {
                ListView<String> services = namingService.getServicesOfServer(1, Integer.MAX_VALUE, NacosConstants.APP_GROUP_NAME);
                return WebsocketClientUtil.getServiceMap(namingService, services);
            } catch (NacosException e) {
                e.printStackTrace();
                throw new QingException("获取服务列表失败");
            } catch (NullPointerException e) {
                e.printStackTrace();
                return new HashMap<>();
            }
        });
    }

    /**
     * 更改负载均衡策略
     *
     * @param loadBalance
     */
    public void changeLoadBalance(String loadBalance) {
        WebsocketMessageDTO websocketMessageDTO = WebsocketMessageDTO.builder()
                .eventType(EventTypeEnum.LOAD_BALANCE.getName())
                .actionType(ActionTypeEnum.UPDATE.getCode())
                .detail(loadBalance)
                .build();
        LoadBalanceCache.setCurrentLoadBalance(loadBalance);
        WebsocketClientUtil.sendToAll(websocketMessageDTO);
    }

    /**
     * 获取负载均衡策略
     *
     * @return List<String>
     */
    public List<String> getLoadBalance() {
        return LoadBalanceCache.getAll();
    }

    /**
     * 将管理台数据更新至各网关结点,一般某个网关结点上线时，这么操作
     */
    public void refresh(WebSocket conn) throws ExecutionException, InterruptedException {
        // 更新service
        CompletableFuture<Map<String, List<ServiceInstance>>> serviceFuture = initServiceInstance();
        // 更新路由
        Map<String, ServiceRuleDTO> serviceRuleDTOMap = initRouteRule();
        // 更新限流规则
        Map<String, LimitRuleDTO> limitRuleDTOMap = initLimitRule();

        Map<String, List<ServiceInstance>> serviceMap = serviceFuture.get();

        WebsocketMessageDTO updateServiceMessageDTO = WebsocketMessageDTO.builder()
                .eventType(EventTypeEnum.SERVICE.getName())
                .actionType(ActionTypeEnum.UPDATE.getCode())
                .serviceMap(serviceMap)
                .build();
        WebsocketMessageDTO updateRouteMessageDTO = WebsocketMessageDTO.builder()
                .eventType(EventTypeEnum.RULE.getName())
                .actionType(ActionTypeEnum.UPDATE.getCode())
                .routeRuleMap(serviceRuleDTOMap)
                .build();
        WebsocketMessageDTO updateLimitMessageDTO = WebsocketMessageDTO.builder()
                .eventType(EventTypeEnum.LIMIT_RULE.getName())
                .actionType(ActionTypeEnum.UPDATE.getCode())
                .limitRuleMap(limitRuleDTOMap)
                .build();
        conn.send(JSON.toJSONString(updateServiceMessageDTO));
        conn.send(JSON.toJSONString(updateRouteMessageDTO));
        conn.send(JSON.toJSONString(updateLimitMessageDTO));
    }

    /**
     * 初始化限流规则
     *
     * @return
     */
    private Map<String, LimitRuleDTO> initLimitRule() {
        List<QLimitRule> limitRuleList = limitRuleService.getLimitRuleList();
        Map<String, LimitRuleDTO> limitRuleDTOMap = new HashMap<>(limitRuleList.size());
        for (QLimitRule limitRule : limitRuleList) {
            LimitRuleDTO limitRuleDTO = new LimitRuleDTO();
            BeanUtils.copyProperties(limitRule, limitRuleDTO);
            limitRuleDTOMap.put(limitRule.getLimitKey(), limitRuleDTO);
        }
        return limitRuleDTOMap;
    }

    /**
     * 数据库中获取路由规则
     *
     * @return Map<String, ServiceRuleDTO>
     */
    private Map<String, ServiceRuleDTO> initRouteRule() {
        List<RouteRuleVo> routeRuleList = routeRuleService.getRouteRuleList();
        Map<String, ServiceRuleDTO> serviceRuleMap = new HashMap<>(routeRuleList.size());
        routeRuleList.forEach(routeRuleVo -> {
            ServiceRuleDTO serviceRuleDTO = new ServiceRuleDTO();
            serviceRuleDTO.setServiceName(routeRuleVo.getService().getServiceName());
            serviceRuleDTO.setRouteName(routeRuleVo.getPredicates());
            serviceRuleDTO.setPriority(routeRuleVo.getPriority());
            serviceRuleMap.put(routeRuleVo.getPredicates(), serviceRuleDTO);
        });
        return serviceRuleMap;
    }

    /**
     * 查询系统是否已初始化
     *
     * @return Boolean
     */
    public Boolean queryInitStatus() {
        QNacosInfo nacosInfo = nacosInfoService.getOne(new LambdaQueryWrapper<>());
        return nacosInfo != null;
    }

    /**
     * 重置系统
     *
     * @param initDTO
     */
    public void reset(InitParam initDTO) throws ExecutionException, InterruptedException {
        // 清空数据库
        cleanAllData();
        init(initDTO);
    }

    /**
     * 清空本地缓存
     */
    private void cleanAllCache() {
        nacosUtil.setServerAddr(null);
        eventPublisher.publishEvent(new ServiceClearEvent(this));
    }

    /**
     * 清空数据库
     */
    private void cleanAllData() {
        // 关闭所有网关websocket连接
        WebsocketClientUtil.closeServer();
        SpringContextUtil.getInstance().getBean("nacosSyncListener", NacosSyncListener.class).shutdown();
        SpringContextUtil.getInstance().removeBean("nacosSyncListener");
        cleanAllCache();

        nacosInfoService.clean();
        websocketInfoService.clean();
        serviceService.clean();
        serviceInstanceService.clean();
    }

}
