package cn.qing.server.annotation;

import java.lang.annotation.*;

/**
 * @author conghuhu
 * @create 2022-04-06 20:27
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface LoadBalanceType {

    String value() default "";

}
