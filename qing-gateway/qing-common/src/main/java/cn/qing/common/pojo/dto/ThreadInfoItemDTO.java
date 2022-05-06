package cn.qing.common.pojo.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * @author qing
 */
@Data
public class ThreadInfoItemDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 线程Id
     */
    private Long threadId;

    /**
     * 线程名称
     */
    private String threadName;

    /**
     * 线程状态
     */
    private String threadState;

    /**
     * 线程优先级
     */
    private Integer threadPriority;

    /**
     * 线程组名称
     */
    private String threadGroupName;

    /**
     * 线程组活跃线程数
     */
    private Integer threadGroupActiveCount;

}
