package cn.qing.common.exception;

import cn.qing.common.constants.QingExceptionEnum;
import lombok.Getter;

/**
 * @author conghuhu
 * @create 2022-04-03 19:08
 */
@Getter
public class QingException extends RuntimeException {

    private Integer code;

    private String errMsg;


    public QingException(String message) {
        super(message);
        this.code = 5000;
        this.errMsg = message;
    }

    public QingException(String message, Integer code) {
        super(message);
        this.code = code;
        this.errMsg = message;
    }

    public QingException(QingExceptionEnum exceptionEnum) {
        super(exceptionEnum.getMessage());
        this.code = exceptionEnum.getCode();
        this.errMsg = exceptionEnum.getMessage();
    }


}
