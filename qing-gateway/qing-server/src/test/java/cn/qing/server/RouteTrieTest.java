package cn.qing.server;

import cn.qing.common.pojo.dto.ServiceRuleDTO;
import cn.qing.server.utils.RouteTrie;
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

    @BeforeAll
    public static void start() {
        routeTrie = new RouteTrie();
    }

    @Test
    public void testExtractRoute() {
        routeTrie.insertRoute("/api/test/hello", ServiceRuleDTO.builder().serviceName("medical").routeName("/api/test/hello").build());
        ServiceRuleDTO rule = routeTrie.getServiceRule("/api/test/hello");
        log.info("insert rule: {}", rule);
        Assertions.assertNotNull(rule);
    }

    @Test
    public void testWildRoute() {
        routeTrie.insertRoute("/api/test/*", ServiceRuleDTO.builder().serviceName("medical").routeName("/api/test/*").build());
        ServiceRuleDTO rule = routeTrie.getServiceRule("/api/test/hi");
        log.info("insert rule: {}", rule);
        Assertions.assertNotNull(rule);
        routeTrie.insertRoute("/api/medical/*",ServiceRuleDTO.builder().serviceName("medical").routeName("/api/medical/*").build());
        ServiceRuleDTO rule2 = routeTrie.getServiceRule("/api/medical/hi");
        log.info("insert rule2: {}", rule2);
        Assertions.assertNotNull(rule2);
    }

    @Test
    public void testVariableRoute() {
        routeTrie.insertRoute("/api/test/:id", ServiceRuleDTO.builder().serviceName("medical").routeName("/api/test/:id").build());
        ServiceRuleDTO rule = routeTrie.getServiceRule("/api/test/8888");
        log.info("insert rule: {}", rule);
        Assertions.assertNotNull(rule);
    }

    @Test
    public void removeRoute() {
        routeTrie.insertRoute("/api/test/*", ServiceRuleDTO.builder().serviceName("medical").routeName("/api/test/*").build());
        ServiceRuleDTO rule = routeTrie.getServiceRule("/api/test/hi");
        log.info("insert rule: {}", rule);
        Assertions.assertNotNull(rule);
        routeTrie.insertRoute("/api/medical/*",ServiceRuleDTO.builder().serviceName("medical").routeName("/api/medical/*").build());
        routeTrie.removeRouteRule("/api/test/*");
        ServiceRuleDTO oldRule = routeTrie.getServiceRule("/api/test/hi");
        Assertions.assertNull(oldRule);
    }
}
