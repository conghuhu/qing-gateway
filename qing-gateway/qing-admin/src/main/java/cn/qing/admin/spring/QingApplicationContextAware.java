package cn.qing.admin.spring;

import cn.qing.admin.starter.SystemInitStarter;
import cn.qing.admin.util.SpringContextUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * @author conghuhu
 * @create 2022/12/26 16:34
 */
@Slf4j
@Component
public class QingApplicationContextAware implements ApplicationContextAware {

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        SpringContextUtil.getInstance().setApplicationContext(applicationContext);
        SystemInitStarter systemInitStarter = SpringContextUtil.getInstance().getBean(SystemInitStarter.class);
        try {
            systemInitStarter.run();
        } catch (Exception e) {
            e.printStackTrace();
            log.error("系统初始化失败，请检查");
        }
    }
}
