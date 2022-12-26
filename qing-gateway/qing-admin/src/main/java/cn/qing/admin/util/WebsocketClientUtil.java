package cn.qing.admin.util;

import cn.qing.admin.sync.WebsocketSyncCacheClient;
import cn.qing.admin.transfer.ServiceInstanceTransfer;
import cn.qing.common.constants.NacosConstants;
import cn.qing.common.exception.QingException;
import cn.qing.common.dto.ServiceInstance;
import cn.qing.common.dto.WebsocketMessageDTO;
import com.alibaba.nacos.api.exception.NacosException;
import com.alibaba.nacos.api.naming.NamingService;
import com.alibaba.nacos.api.naming.pojo.Instance;
import com.alibaba.nacos.api.naming.pojo.ListView;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author conghuhu
 * @create 2022-04-08 18:41
 */
@Slf4j
@Component
public class WebsocketClientUtil {

    /**
     * 向所有网关节点发送消息
     *
     * @param websocketBeanList
     * @param websocketMessageDTO
     */
    public static void sendToAll(List<String> websocketBeanList, WebsocketMessageDTO websocketMessageDTO) {
        for (String beanName : websocketBeanList) {
            WebsocketSyncCacheClient websocketSyncCacheClient = SpringContextUtil.getInstance().getBean(beanName, WebsocketSyncCacheClient.class);
            websocketSyncCacheClient.send(websocketMessageDTO);
        }
    }

    /**
     * 获取serviceMap,当前nacos服务器中的所有服务以及实例
     * key: serviceName
     * value: serviceInstanceList
     *
     * @param namingService
     * @return
     * @throws NacosException
     */
    public static Map<String, List<ServiceInstance>> getServiceMap(NamingService namingService, ListView<String> services) throws NacosException {
        List<String> servicesList = services.getData();
        Map<String, List<ServiceInstance>> serviceMap = new ConcurrentHashMap<>(servicesList.size());
        servicesList.parallelStream().forEach(service -> {
            List<Instance> instanceList = null;
            try {
                instanceList = namingService.getAllInstances(service, NacosConstants.APP_GROUP_NAME);
            } catch (NacosException e) {
                e.printStackTrace();
                throw new QingException("获取" + service + "的实例列表失败");
            }
            serviceMap.put(service, ServiceInstanceTransfer.convert(instanceList));
        });
        return serviceMap;
    }
}
