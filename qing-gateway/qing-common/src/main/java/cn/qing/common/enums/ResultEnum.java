package cn.qing.common.enums;

/**
 * ResultEnum.
 *
 * @author conghuhu
 * @create 2022/12/28 18:26
 */
public enum ResultEnum {

    /**
     * Success result enum.
     */
    SUCCESS("success"),

    /**
     * Time out result enum.
     */
    TIME_OUT("timeOut"),

    /**
     * Error result enum.
     */
    ERROR("error");

    private final String name;

    /**
     * all args constructor.
     *
     * @param name name
     */
    ResultEnum(final String name) {
        this.name = name;
    }

    /**
     * get name.
     *
     * @return name
     */
    public String getName() {
        return name;
    }
}
