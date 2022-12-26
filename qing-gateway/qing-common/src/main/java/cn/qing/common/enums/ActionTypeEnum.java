package cn.qing.common.enums;

/**
 * @author conghuhu
 * @create 2022-04-07 20:45
 */
public enum ActionTypeEnum {

    ADD("add", "新增"),

    REMOVE("remove", "删除"),

    UPDATE("update", "修改"),

    QUERY("query", "查询"),
    ;

    private String code;
    private String desc;

    ActionTypeEnum(String code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public String getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
