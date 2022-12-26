package cn.qing.common.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * @author conghuhu
 * @create 2022-04-07 20:14
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WebsocketMessageDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String eventType;

    private String actionType;

    /**
     * 普通 消息体
     */
    private String detail;

    /**
     * 服务及实例map
     */
    private Map<String, List<ServiceInstance>> serviceMap;

    /**
     * 路由规则map
     */
    private Map<String, ServiceRuleDTO> routeRuleMap;

    /**
     * 在线的服务
     */
    private List<String> onlineServices;

    /**
     * 负载均衡策略
     */
    private List<String> loadBalanceList;

    /**
     * 限流策略map
     */
    private Map<String, LimitRuleDTO> limitRuleMap;

    /**
     * 日志记录
     */
    private List<LogDTO> logDTOList;
}
