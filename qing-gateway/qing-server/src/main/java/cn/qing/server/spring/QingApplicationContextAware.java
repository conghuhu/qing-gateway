package cn.qing.server.spring;

import cn.qing.server.utils.SpringContextUtil;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * @author conghuhu
 * @create 2022/12/26 20:08
 */
@Component
public class QingApplicationContextAware implements ApplicationContextAware {
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        SpringContextUtil.getInstance().setApplicationContext(applicationContext);
    }
}
