/*
 * Copyright 2023 qing-gateway
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package cn.qing.server;

import cn.qing.common.dto.ServiceRuleDTO;
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
