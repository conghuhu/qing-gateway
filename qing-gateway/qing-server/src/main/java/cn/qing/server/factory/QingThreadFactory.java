package cn.qing.server.factory;

import org.springframework.scheduling.concurrent.CustomizableThreadFactory;

import java.util.concurrent.ThreadFactory;

/**
 * @author conghuhu
 * @create 2022-04-05 13:16
 */
public class QingThreadFactory {
    private String name;

    public QingThreadFactory(String name) {
        this.name = name;
    }

    public ThreadFactory create() {
        return new CustomizableThreadFactory(name + "-");
    }
}
