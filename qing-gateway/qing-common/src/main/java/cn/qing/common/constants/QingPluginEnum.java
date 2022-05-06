package cn.qing.common.constants;

/**
 * @author conghuhu
 * @create 2022-04-04 16:55
 */
public enum QingPluginEnum {
    /**
     * 鉴权插件
     */
    AUTH("Auth", 1, "鉴权插件"),
    /**
     * 限流插件
     */
    CURRENT_LIMITING("CurrentLimiting", 2, "限流插件"),

    /**
     * 路由插件
     */
    DYNAMIC_ROUTE("DynamicRoute", 3, "动态路由插件");

    private String name;

    private Integer order;

    private String desc;

    QingPluginEnum(String name, Integer order, String desc) {
        this.name = name;
        this.order = order;
        this.desc = desc;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
