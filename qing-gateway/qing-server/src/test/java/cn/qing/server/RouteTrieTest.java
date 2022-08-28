package cn.qing.server;

import cn.qing.common.pojo.dto.ServiceRuleDTO;
import cn.qing.server.utils.RouteTrie;
import java.util.concurrent.CountDownLatch;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

/**
 * 前缀树测试
 */
@Slf4j
public class RouteTrieTest {

    private static RouteTrie routeTrie = null;

    private static long startTime;

    @BeforeAll
    public static void start() {
        startTime = System.currentTimeMillis();
        routeTrie = new RouteTrie();
    }

    @Test
    public void testExtractRoute() {
        routeTrie.insertRoute("/api/test/hello", ServiceRuleDTO.builder().serviceName("medical").routeName("/api/test/hello").build());
        ServiceRuleDTO rule = routeTrie.getServiceRule("/api/test/hello");
        log.info("insert rule: {}", rule);
        Assertions.assertNotNull(rule);
        routeTrie.removeRouteRule("/api/test/hello");
    }

    @Test
    public void testWildRoute() {
        routeTrie.insertRoute("/api/test/*", ServiceRuleDTO.builder().serviceName("medical").routeName("/api/test/*").build());
        ServiceRuleDTO rule = routeTrie.getServiceRule("/api/test/hi");
        Assertions.assertNotNull(rule);
        routeTrie.insertRoute("/api/medical/*", ServiceRuleDTO.builder().serviceName("medical").routeName("/api/medical/*").build());
        ServiceRuleDTO rule2 = routeTrie.getServiceRule("/api/medical/hi");
        log.info("insert rule2: {}", rule2);
        Assertions.assertNotNull(rule2);
        routeTrie.removeRouteRule("/api/test/*");
        routeTrie.removeRouteRule("/api/medical/*");
    }

    @Test
    public void testVariableRoute() {
        routeTrie.insertRoute("/api/test/:id", ServiceRuleDTO.builder().serviceName("medical").routeName("/api/test/:id").build());
        ServiceRuleDTO rule = routeTrie.getServiceRule("/api/test/8888");
        log.info("insert rule: {}", rule);
        Assertions.assertNotNull(rule);
        routeTrie.removeRouteRule("/api/test/:id");
    }

    @Test
    public void testRemoveRoute() {
        routeTrie.insertRoute("/api/test/*", ServiceRuleDTO.builder().serviceName("medical").routeName("/api/test/*").build());
        ServiceRuleDTO rule = routeTrie.getServiceRule("/api/test/hi");
        log.info("insert rule: {}", rule);
        Assertions.assertNotNull(rule);
        routeTrie.insertRoute("/api/medical/*", ServiceRuleDTO.builder().serviceName("medical").routeName("/api/medical/*").build());
        routeTrie.removeRouteRule("/api/test/*");
        ServiceRuleDTO oldRule = routeTrie.getServiceRule("/api/test/hi");
        Assertions.assertNull(oldRule);

        routeTrie.removeRouteRule("/api/medical/*");
    }

    @Test
    public void testMultiThreadRoute() throws InterruptedException {
        CountDownLatch countDownLatch = new CountDownLatch(1);
        for (int i = 0; i < 35; i++) {
            new Thread(new Run(countDownLatch)).start();
        }
        countDownLatch.countDown();
    }

    class Run implements Runnable {
        private final CountDownLatch startLatch;

        public Run(CountDownLatch startLatch) {
            this.startLatch = startLatch;
        }

        @Override
        public void run() {
            try {
                startLatch.await();

                testWildRoute();

                long endTime = System.currentTimeMillis();
                System.out.println(Thread.currentThread().getName() + " ended at: " + endTime + ", cost: " + (endTime - startTime) + " ms.");
            } catch (Exception e) {
                e.printStackTrace();
            }

        }
    }

}
