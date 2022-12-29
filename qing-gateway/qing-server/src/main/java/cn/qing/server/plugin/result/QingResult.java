package cn.qing.server.plugin.result;

import cn.qing.common.constants.CommonConstant;
import lombok.Data;

import java.io.Serializable;

/**
 * @author conghuhu
 * @create 2022/12/29 9:38
 */
@Data
public class QingResult<T> implements Serializable {

    private static final long serialVersionUID = -2792556188993845048L;

    /**
     * 成功标志
     */
    private boolean success = true;

    /**
     * 返回处理消息
     */
    private String message = "";

    /**
     * 返回代码
     */
    private Integer code = 0;

    /**
     * 返回数据对象 data
     */
    private T result;

    /**
     * 时间戳
     */
    private long timestamp = System.currentTimeMillis();


    public static <T> QingResult<T> ok() {
        QingResult<T> r = new QingResult<T>();
        r.setSuccess(true);
        r.setCode(CommonConstant.SC_OK_200);
        return r;
    }

    public static <T> QingResult<T> ok(String msg) {
        QingResult<T> r = new QingResult<T>();
        r.setSuccess(true);
        r.setCode(CommonConstant.SC_OK_200);
        r.setMessage(msg);
        r.setResult((T) msg);
        return r;
    }

    public static <T> QingResult<T> ok(T data) {
        QingResult<T> r = new QingResult<T>();
        r.setSuccess(true);
        r.setCode(CommonConstant.SC_OK_200);
        r.setResult(data);
        return r;
    }

    public static <T> QingResult<T> error(String msg, T data) {
        QingResult<T> r = new QingResult<>();
        r.setSuccess(false);
        r.setCode(CommonConstant.SC_INTERNAL_SERVER_ERROR_500);
        r.setMessage(msg);
        r.setResult(data);
        return r;
    }

    public static QingResult<Object> error(String msg) {
        return error(CommonConstant.SC_INTERNAL_SERVER_ERROR_500, msg);
    }

    public static QingResult<Object> error(int code, String msg) {
        QingResult<Object> r = new QingResult<>();
        r.setCode(code);
        r.setMessage(msg);
        r.setSuccess(false);
        return r;
    }

}
