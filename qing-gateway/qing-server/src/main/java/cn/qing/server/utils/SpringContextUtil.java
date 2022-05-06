package cn.qing.server.utils;

import org.springframework.beans.factory.support.BeanDefinitionBuilder;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;

/**
 * Spring上下文工具类
 *
 * @author conghuhu
 * @create 2022-04-05 16:26
 */
public class SpringContextUtil {

    private static ApplicationContext applicationContext;

    /**
     * 获取spring上下文
     *
     * @return
     */
    public static ApplicationContext getApplicationContext() {
        return applicationContext;
    }

    /**
     * 设置上下文
     *
     * @param applicationContext
     */
    public static void setApplicationContext(ApplicationContext applicationContext) {
        SpringContextUtil.applicationContext = applicationContext;
    }


    /**
     * 通过名字获取上下文中的bean
     *
     * @param name
     * @return
     */
    public static Object getBean(String name) {
        return applicationContext.getBean(name);
    }


    /**
     * 通过类型获取上下文中的bean
     *
     * @param requiredType
     * @return
     */
    public static <T> T getBean(Class<T> requiredType) {
        return applicationContext.getBean(requiredType);
    }


    /**
     * 通过名字和类型获取上下文中的bean
     *
     * @param name
     * @param requiredType
     * @return
     */
    public static <T> T getBean(String name, Class<T> requiredType) {
        return applicationContext.getBean(name, requiredType);
    }

    /**
     * 动态注入Bean
     */
    public static <T> T addBean(Class<T> beanClass, String beanName) {
        //将applicationContext转换为ConfigurableApplicationContext
        ConfigurableApplicationContext configurableApplicationContext = (ConfigurableApplicationContext)
                SpringContextUtil.getApplicationContext();

        // 获取bean工厂并转换为DefaultListableBeanFactory
        DefaultListableBeanFactory defaultListableBeanFactory = (DefaultListableBeanFactory)
                configurableApplicationContext.getBeanFactory();

        // 通过BeanDefinitionBuilder创建bean定义
        BeanDefinitionBuilder beanDefinitionBuilder = BeanDefinitionBuilder.genericBeanDefinition(beanClass);

        // 注册bean
        defaultListableBeanFactory.registerBeanDefinition(beanName, beanDefinitionBuilder.getRawBeanDefinition());

        T bean = (T) getBean(beanName);
        return bean;
    }

    /**
     * 删除bean
     */
    public static Boolean removeBean(String beanName) {
        try {
            //将applicationContext转换为ConfigurableApplicationContext
            ConfigurableApplicationContext configurableApplicationContext = (ConfigurableApplicationContext)
                    SpringContextUtil.getApplicationContext();

            // 获取bean工厂并转换为DefaultListableBeanFactory
            DefaultListableBeanFactory defaultListableBeanFactory = (DefaultListableBeanFactory)
                    configurableApplicationContext.getBeanFactory();

            defaultListableBeanFactory.removeBeanDefinition(beanName);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}