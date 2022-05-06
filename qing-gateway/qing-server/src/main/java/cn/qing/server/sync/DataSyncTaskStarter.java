package cn.qing.server.sync;

import cn.qing.common.constants.ActionTypeEnum;
import cn.qing.common.constants.EventTypeEnum;
import cn.qing.common.pojo.dto.WebsocketMessageDTO;
import cn.qing.server.config.properties.ServerConfigProperties;
import cn.qing.server.factory.LoadBalanceFactory;
import cn.qing.server.spi.LoadBalance;
import com.alibaba.fastjson.JSON;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.ContextRefreshedEvent;

import java.util.List;

/**
 * @author conghuhu
 * @create 2022-04-05 9:58
 */
@Slf4j
@Configuration
public class DataSyncTaskStarter implements ApplicationListener<ContextRefreshedEvent> {

    private final ServerConfigProperties properties;

    /**
     * 数据同步任务
     */
    public static DataSyncTask dataSyncTask;

    public DataSyncTaskStarter(ServerConfigProperties properties) {
        this.properties = properties;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        log.info("数据同步模块初始化,启动websocket服务");
        dataSyncTask = new DataSyncTask(properties);
        dataSyncTask.start();
    }

    /**
     * 向admin发送消息
     *
     * @param messageDTO
     */
    public void sendMessage(WebsocketMessageDTO messageDTO) {
        dataSyncTask.send(JSON.toJSONString(messageDTO));
    }
}
