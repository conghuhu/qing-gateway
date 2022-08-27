package cn.qing.admin.sync;

import cn.qing.admin.event.serviceEvent.ServiceRemoveEvent;
import cn.qing.admin.event.serviceEvent.ServiceUpdateEvent;
import cn.qing.admin.factory.QingThreadFactory;
import cn.qing.admin.transfer.ServiceInstanceTransfer;
import cn.qing.admin.util.NacosUtil;
import cn.qing.admin.util.SpringContextUtil;
import cn.qing.admin.util.WebsocketClientUtil;
import cn.qing.common.constants.NacosConstants;
import cn.qing.common.exception.QingException;
import cn.qing.common.pojo.dto.ServiceInstance;
import com.alibaba.nacos.api.exception.NacosException;
import com.alibaba.nacos.api.naming.NamingService;
import com.alibaba.nacos.api.naming.pojo.Instance;
import com.alibaba.nacos.api.naming.pojo.ListView;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
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
        this.nacosUtil = SpringContextUtil.getBean(NacosUtil.class);
        this.scheduledThreadPoolExecutor = SpringContextUtil.getBean(ScheduledThreadPoolExecutor.class);
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
