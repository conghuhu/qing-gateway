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
package cn.qing.admin.util;

import cn.qing.admin.pojo.params.InstanceUpdateParam;
import cn.qing.common.constants.NacosConstants;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.nacos.api.exception.NacosException;
import com.alibaba.nacos.api.naming.NamingFactory;
import com.alibaba.nacos.api.naming.NamingService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

/**
 * @author conghuhu
 * @create 2022-04-05 22:01
 */
@Component
@Slf4j
public class NacosUtil {

    private final RestTemplate restTemplate;

    private static String serverAddr;

    private volatile static NamingService namingService;

    public NacosUtil(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String getServerAddr() {
        return serverAddr;
    }

    public void setServerAddr(String serverAddr) {
        NacosUtil.serverAddr = serverAddr;
    }

    /**
     * 获取Nacos服务-单列模式 DCL懒汉式
     *
     * @return
     */
    public static NamingService getNamingService() {
        if (namingService == null) {
            synchronized (NacosUtil.class) {
                if (namingService == null) {
                    try {
                        namingService = NamingFactory.createNamingService(serverAddr);
                    } catch (NacosException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
        return namingService;
    }

    public void updateInstance(InstanceUpdateParam instanceUpdateParam) {
        try {
            String url = "http://" + serverAddr + NacosConstants.INSTANCE_UPDATE_PATH
                    + "?serviceName=" + instanceUpdateParam.getServiceName()
                    + "&ip=" + instanceUpdateParam.getIp()
                    + "&port=" + instanceUpdateParam.getPort()
                    + "&groupName=" + NacosConstants.APP_GROUP_NAME
                    + "&weight=" + instanceUpdateParam.getWeight()
                    + "&clusterName=" + instanceUpdateParam.getClusterName()
                    + "&metadata={metadata}";
            log.debug("nacos url: {}", url);

            Map<String, String> metaDataMap = new HashMap<>(2);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("protocol", instanceUpdateParam.getProtocol());
            jsonObject.put("version", instanceUpdateParam.getVersion());
            metaDataMap.put("metadata", jsonObject.toString());
            restTemplate.put(url, null, metaDataMap);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
