package cn.qing.common.enums;

/**
 * @author conghuhu
 * @create 2022-04-07 20:36
 */
public enum EventTypeEnum {

    /**
     * 服务相关
     */
    SERVICE("service"),

    /**
     * 路由规则相关
     */
    RULE("rule"),

    /**
     * 插件相关
     */
    PLUGIN("plugin"),

    /**
     * 握手相关
     */
    HAND_SHAKE("handshake"),

    /**
     * 负载均衡相关
     */
    LOAD_BALANCE("loadBalance"),

    /**
     * 上线初始化相关
     */
    ONLINE("online"),

    /**
     * 限流规则相关
     */
    LIMIT_RULE("limitRule"),

    /**
     * 日志相关
     */
    LOG("log"),
    ;

    private String name;


    EventTypeEnum(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
