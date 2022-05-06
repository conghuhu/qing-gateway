package cn.qing.admin.pojo.params;

import lombok.Data;

@Data
public class PageParam {

    private Integer pageNum;

    private Integer pageSize;

    private String content;
}
