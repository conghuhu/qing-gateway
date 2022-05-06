package cn.qing.common.constants;

import lombok.Getter;

/**
 * @author conghuhu
 * @create 2022-04-03 19:09
 */
@Getter
public enum QingExceptionEnum {
    /**
     * 解析错误
     */
    PARAM_ERROR(1000, "param error"),
    /**
     * 服务未找到
     */
    SERVICE_NOT_FIND(1001, "service not find,maybe not register"),
    /**
     * 无效的配置
     */
    CONFIG_ERROR(1002, "invalid config"),
    /**
     * 用户名或密码错误
     */
    LOGIN_ERROR(1003, "userName or password error"),
    /**
     * 未登录
     */
    NOT_LOGIN(1004, "not login"),
    /**
     * token错误
     */
    TOKEN_ERROR(1005, "token error");

    private Integer code;

    private String message;

    QingExceptionEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }
}
