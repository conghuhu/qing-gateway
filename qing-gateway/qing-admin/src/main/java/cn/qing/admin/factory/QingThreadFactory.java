package cn.qing.admin.factory;

import org.springframework.scheduling.concurrent.CustomizableThreadFactory;

import java.util.concurrent.ThreadFactory;

/**
 * @author conghuhu
 * @create 2022-04-07 14:52
 */
public class QingThreadFactory {
    private String name;

    public QingThreadFactory(String name) {
        this.name = name;
    }

    public ThreadFactory create() {
        ThreadFactory springThreadFactory = new CustomizableThreadFactory(name + "-");
        return springThreadFactory;
    }
}
