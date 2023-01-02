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
package cn.qing.server.plugin.impl;

import cn.qing.common.constants.CommonConstant;
import cn.qing.common.constants.ProtocolConstantMap;
import cn.qing.common.dto.LogDTO;
import cn.qing.common.dto.ServiceInstance;
import cn.qing.common.enums.QingExceptionEnum;
import cn.qing.common.enums.QingPluginEnum;
import cn.qing.common.exception.QingException;
import cn.qing.server.cache.ServiceCache;
import cn.qing.server.chain.QingPluginChain;
import cn.qing.server.config.properties.ServerConfigProperties;
import cn.qing.server.factory.LoadBalanceFactory;
import cn.qing.server.handler.MultithreadingTaskHandler;
import cn.qing.server.plugin.base.AbstractQingPlugin;
import cn.qing.server.spi.LoadBalance;
import cn.qing.server.utils.HttpUtil;
import cn.qing.server.utils.SpringContextUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author conghuhu
 * @create 2022-04-04 16:57
 */
@Slf4j
public class DynamicRoutePlugin extends AbstractQingPlugin {

    private ServerConfigProperties properties;

    public DynamicRoutePlugin(ServerConfigProperties properties) {
        this.properties = properties;
    }

    /**
     * 插件执行
     *
     * @param exchange
     * @param chain
     * @return
     */
    @Override
    public Mono<Void> doExecute(ServerWebExchange exchange, QingPluginChain chain) {
        String serviceName = chain.serviceName();
        String routeName = chain.routeName();
        // 利用负载均衡算法选择服务实例
        ServiceInstance serviceInstance = chooseInstance(serviceName, exchange.getRequest());
        // 根据路由规则获取此次转发目标服务的url
        String url = getTargetUrl(exchange, serviceInstance, routeName);
        log.info("服务[{}]对应的服务实例[{}]，转发目标url[{}]", serviceName, serviceInstance, url);
        exchange.getAttributes().put(CommonConstant.HTTP_URI, url);
        recordLog(exchange, serviceName, routeName, serviceInstance, url);
        return chain.doChain(exchange);
    }

    /**
     * 利用负载均衡算法选择服务实例
     *
     * @param serviceName
     * @param request
     * @return
     */
    private ServiceInstance chooseInstance(String serviceName, ServerHttpRequest request) {
        List<ServiceInstance> serviceInstanceList = ServiceCache.getAllInstances(serviceName);
        if (CollectionUtils.isEmpty(serviceInstanceList)) {
            throw new QingException(QingExceptionEnum.SERVICE_NOT_FIND);
        }
        log.info("服务[{}]对应的服务实例列表[{}]", serviceName, serviceInstanceList);
        String version = getLargestVersion(serviceInstanceList);
        // 利用负载均衡算法选择服务实例
        LoadBalance loadBalance = LoadBalanceFactory.getInstance(properties.getLoadBalance(), serviceName);
        return loadBalance.chooseOne(serviceInstanceList.stream()
                // TODO 此处有并发修改异常,collect
                .filter(item -> item.getVersion().equals(version)).collect(Collectors.toList()));
    }

    /**
     * 获取最大版本号,灰度发布时使用
     * 选取最大版本号的服务实例，用来做灰度过度，当老版本号更新到新版本后，全面稳定后，可以删除老版本号
     *
     * @param serviceInstanceList
     * @return
     */
    private String getLargestVersion(List<ServiceInstance> serviceInstanceList) {
        // TODO 此处有并发修改异常
//        Collections.sort(serviceInstanceList);
        return serviceInstanceList.get(0).getVersion();
    }

    /**
     * 根据路由规则获取此次转发目标服务的url
     *
     * @param exchange
     * @param serviceInstance
     * @param routeName
     * @return
     */
    private String getTargetUrl(ServerWebExchange exchange, ServiceInstance serviceInstance, String routeName) {
        ServerHttpRequest request = exchange.getRequest();
        String query = request.getURI().getQuery();
        // TODO 待实现协议转化模块，http->https https->http http->rpc; 还要做一个路由是否重写的判断
        String path = request.getURI().getPath();
        String protocol = serviceInstance.getProtocol();
        if (!ProtocolConstantMap.PROTOCOL_SET.contains(protocol)) {
            throw new QingException("Unsupported protocol type.");
        }
        String url = protocol + "://" + serviceInstance.getIp() + ":" + serviceInstance.getPort() + path;
        if (StringUtils.hasText(query)) {
            url += "?" + query;
        }
        return url;
    }

    /**
     * 记录log至本地缓存
     *
     * @param exchange
     * @param serviceName
     * @param routeName
     * @param serviceInstance
     * @param url
     */
    private void recordLog(ServerWebExchange exchange, String serviceName,
                           String routeName, ServiceInstance serviceInstance, String url) {
        MultithreadingTaskHandler multithreadingTaskHandler = SpringContextUtil.getInstance().getBean(MultithreadingTaskHandler.class);
        multithreadingTaskHandler.executeTask(LogDTO.builder()
                .originIP(HttpUtil.getIpAddress(exchange.getRequest()))
                .originURI(exchange.getRequest().getPath().value())
                .proxyURI(url)
                .routeName(routeName)
                .targetService(serviceName)
                .serviceInstance(serviceInstance)
                .createdTime(LocalDateTime.now())
                .build());
    }

    /**
     * 插件名称
     *
     * @return
     */
    @Override
    public String getName() {
        return QingPluginEnum.DYNAMIC_ROUTE.getName();
    }

    /**
     * 插件顺序
     *
     * @return
     */
    @Override
    public int getOrder() {
        return QingPluginEnum.DYNAMIC_ROUTE.getOrder();
    }

    /**
     * 是否跳过插件
     *
     * @param exchange
     * @return
     */
    @Override
    public boolean skip(ServerWebExchange exchange) {
        return super.skip(exchange);
    }
}
