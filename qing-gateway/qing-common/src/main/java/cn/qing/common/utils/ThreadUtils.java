package cn.qing.common.utils;

import java.util.concurrent.TimeUnit;

/**
 * @author conghuhu
 * @create 2022/12/26 17:56
 */
public class ThreadUtils {

    /**
     * sleep current thread.
     *
     * @param timeUnit the time unit
     * @param time     the time
     */
    public static void sleep(final TimeUnit timeUnit, final int time) {
        try {
            timeUnit.sleep(time);
        } catch (InterruptedException ex) {
            Thread.currentThread().interrupt();
        }
    }

}
