package cn.qing.common.utils;

import cn.qing.common.exception.QingException;

/**
 * The type Param check utils.
 *
 * @author conghuhu
 * @create 2022/12/26 18:45
 */
public class ParamCheckUtils {

    /**
     * Body is empty boolean.
     *
     * @param body the body
     * @return the boolean
     */
    public static boolean bodyIsEmpty(final String body) {
        return null == body || "".equals(body) || "null".equals(body);
    }

    /**
     * Check params length.
     *
     * @param argsLength  params length.
     * @param typesLength types length.
     */
    public static void checkParamsLength(final Integer argsLength, final Integer typesLength) {
        if (argsLength < typesLength) {
            throw new QingException("args.length < types.length");
        }
    }
}
