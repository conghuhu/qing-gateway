package cn.qing.common.utils;

/**
 * @author conghuhu
 * @create 2022/12/26 18:44
 */
public class ObjectTypeUtils {

    /**
     * is basic type or not.
     *
     * @param object the object
     * @return true is basic
     */
    public static boolean isBasicType(final Object object) {
        return (object instanceof Integer)
                || (object instanceof Byte)
                || (object instanceof Long)
                || (object instanceof Double)
                || (object instanceof Float)
                || (object instanceof Short)
                || (object instanceof Boolean)
                || (object instanceof CharSequence);
    }
}
