package cn.qing.admin.util;

import org.springframework.beans.factory.support.BeanDefinitionBuilder;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;

/**
 * Spring上下文工具类
 *
 * @author conghuhu
 * @create 2022-04-05 16:26
 * @update 2022-12-26 16:23
 */
public final class SpringContextUtil {

    private static final SpringContextUtil INSTANCE = new SpringContextUtil();

    private ApplicationContext applicationContext;

    public static SpringContextUtil getInstance() {
        return INSTANCE;
    }

    /**
     * 设置上下文
     *
     * @param applicationContext application context
     */
    public void setApplicationContext(ApplicationContext applicationContext) {
        this.applicationContext = applicationContext;
    }


    /**
     * 通过名字获取上下文中的bean
     *
     * @param name bean name
     * @return bean
     */
    public Object getBean(String name) {
        return applicationContext.getBean(name);
    }


    /**
     * 通过类型获取上下文中的bean
     *
     * @param requiredType bean type
     * @return bean
     */
    public <T> T getBean(Class<T> requiredType) {
        return applicationContext.getBean(requiredType);
    }


    /**
     * 通过名字和类型获取上下文中的bean
     *
     * @param name         bean name
     * @param requiredType bean type
     * @return bean
     */
    public <T> T getBean(String name, Class<T> requiredType) {
        return applicationContext.getBean(name, requiredType);
    }

    /**
     * 动态注入Bean
     *
     * @param beanClass bean classz
     * @param beanName  bean name
     * @param args      arguments
     * @param <T>       type
     * @return bean
     */
    public <T> T addBean(Class<T> beanClass, String beanName, Object... args) {
        //将applicationContext转换为ConfigurableApplicationContext
        ConfigurableApplicationContext configurableApplicationContext = (ConfigurableApplicationContext)
                this.applicationContext;

        // 获取bean工厂并转换为DefaultListableBeanFactory
        DefaultListableBeanFactory defaultListableBeanFactory = (DefaultListableBeanFactory)
                configurableApplicationContext.getBeanFactory();

        // 通过BeanDefinitionBuilder创建bean定义
        BeanDefinitionBuilder beanDefinitionBuilder = BeanDefinitionBuilder.genericBeanDefinition(beanClass);

        for (Object arg : args) {
            beanDefinitionBuilder.addConstructorArgValue(arg);
        }

        // 注册bean
        defaultListableBeanFactory.registerBeanDefinition(beanName, beanDefinitionBuilder.getRawBeanDefinition());

        T bean = getBean(beanName, beanClass);
        return bean;
    }

    /**
     * 删除bean
     *
     * @param beanName bean name
     * @return res boolean
     */
    public Boolean removeBean(String beanName) {
        try {
            //将applicationContext转换为ConfigurableApplicationContext
            ConfigurableApplicationContext configurableApplicationContext = (ConfigurableApplicationContext) applicationContext;

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