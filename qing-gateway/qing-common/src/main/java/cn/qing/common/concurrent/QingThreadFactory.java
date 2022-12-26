package cn.qing.common.concurrent;

import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicLong;

/**
 * @author conghuhu
 * @create 2022-04-05 13:16
 */
public class QingThreadFactory implements ThreadFactory {
    private static final AtomicLong THREAD_NUMBER = new AtomicLong(1);

    private static final ThreadGroup THREAD_GROUP = new ThreadGroup("qing");

    private final boolean daemon;

    private final String namePrefix;

    private final int priority;

    private QingThreadFactory(final String namePrefix, final boolean daemon, final int priority) {
        this.namePrefix = namePrefix;
        this.daemon = daemon;
        this.priority = priority;
    }

    /**
     * create custom thread factory.
     *
     * @param namePrefix prefix
     * @param daemon     daemon
     * @return {@linkplain ThreadFactory}
     */
    public static ThreadFactory create(final String namePrefix, final boolean daemon) {
        return create(namePrefix, daemon, Thread.NORM_PRIORITY);
    }

    /**
     * create custom thread factory.
     *
     * @param namePrefix prefix
     * @param daemon     daemon
     * @param priority   priority
     * @return {@linkplain ThreadFactory}
     */
    public static ThreadFactory create(final String namePrefix, final boolean daemon, final int priority) {
        return new QingThreadFactory(namePrefix, daemon, priority);
    }

    @Override
    public Thread newThread(final Runnable runnable) {
        Thread thread = new Thread(THREAD_GROUP, runnable,
                THREAD_GROUP.getName() + "-" + namePrefix + "-" + THREAD_NUMBER.getAndIncrement());
        thread.setDaemon(daemon);
        thread.setPriority(priority);

        return thread;
    }
}
