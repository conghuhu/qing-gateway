package cn.qing.common.pojo.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class ThreadInfoDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer count;

    private List<ThreadInfoItemDTO> threadInfoItemDTOList;

    private Long collectTime;

    public ThreadInfoDTO(List<ThreadInfoItemDTO> threadInfoItemDTOList) {
        this.threadInfoItemDTOList = threadInfoItemDTOList;
        this.count = threadInfoItemDTOList.size();
        this.collectTime = System.currentTimeMillis();
    }
}
