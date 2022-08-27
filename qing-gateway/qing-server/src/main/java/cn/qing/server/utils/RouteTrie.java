package cn.qing.server.utils;

import cn.qing.common.exception.QingException;
import cn.qing.common.pojo.dto.ServiceRuleDTO;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Stack;
import org.springframework.util.StringUtils;

/**
 * 路由前缀树
 *
 * @author conghuhu
 */
public class RouteTrie {
    static class Node {

        String part;

        /**
         * key: part
         * value: Node
         */
        Map<String, Node> children;

        /**
         * 是否结束
         */
        Boolean isEnd;

        /**
         * 是否为通配符
         */
        Boolean isWild;

        ServiceRuleDTO serviceRule;

        public Node(String part) {
            this.part = part;
            this.children = new HashMap<>(1);
            this.isEnd = false;
            this.isWild = false;
        }

        public Node(String part, Boolean isWild) {
            this.part = part;
            this.isWild = isWild;
            this.children = new HashMap<>(1);
            this.isEnd = false;
        }
    }

    private final static String ROOT_PATH = "/";

    private final Map<String, Node> table;

    public RouteTrie() {
        table = new HashMap<>(16);
    }

    public void insertRoute(String routeName, ServiceRuleDTO serviceRule) {
        if (!StringUtils.hasText(routeName)) {
            return;
        }
        String[] parts = parsePath(routeName);

        String start = parts[0];
        if (!table.containsKey(start)) {
            table.put(start, new Node(start));
        }
        Node node = table.get(start);
        for (int i = 1; i < parts.length; i++) {
            String part = parts[i];
            Map<String, Node> children = node.children;
            if (!children.containsKey(part)) {
                children.put(part, new Node(part,
                    part.charAt(0) == ':' || part.charAt(0) == '*'));
            }
            node = children.get(part);
        }
        // 叶子结点
        node.isEnd = true;
        node.serviceRule = serviceRule;
    }

    public ServiceRuleDTO getServiceRule(String path) {
        if (!StringUtils.hasText(path)) {
            return null;
        }
        String[] parts = parsePath(path);
        String start = parts[0];
        Node node = table.get(start);
        if (node == null) {
            return null;
        }
        for (int i = 1; i < parts.length; i++) {
            String part = parts[i];
            Map<String, Node> children = node.children;
            boolean match = false;
            for (Node child : children.values()) {
                if (child.isWild) {
                    return child.serviceRule;
                }
                if (child.part.equals(part)) {
                    match = true;
                    break;
                }
            }
            if (!match) {
                return null;
            }

            node = children.get(part);
        }
        return node.serviceRule;
    }

    public void removeRouteRule(String routeName) {
        ServiceRuleDTO serviceRule = getServiceRule(routeName);
        if (serviceRule == null) {
            return;
        }
        String[] parts = parsePath(routeName);
        String start = parts[0];
        Stack<Node> stack = new Stack<>();
        Node node = table.get(start);
        stack.push(node);
        for (int i = 1; i < parts.length; i++) {
            String part = parts[i];
            Map<String, Node> children = node.children;
            if (!children.containsKey(part)) {
                return;
            }
            node = children.get(part);
            stack.push(node);
        }
        stack.pop();
        int deep = stack.size();
        while (!stack.isEmpty()) {
            Node pop = stack.pop();
            if (pop.children.size() == 1) {
                pop.children.remove(parts[deep--]);
            } else {
                pop.children.remove(parts[deep]);
                return;
            }
        }
        Node top = table.get(start);

        table.remove(top.part);

    }

    /**
     * 处理path
     *
     * @param path 路径
     * @return String[]
     */
    private String[] parsePath(String path) {
        if (ROOT_PATH.equals(path)) {
            return new String[] {ROOT_PATH};
        }
        String[] parts = path.split("/");
        if (parts.length == 1) {
            throw new QingException("route predicates format is error, please check it");
        }
        return Arrays.copyOfRange(parts, 1, parts.length);
    }
}
