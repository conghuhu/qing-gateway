package cn.qing.admin.pojo.vo;

import lombok.Data;

import java.io.Serializable;

@Data
public class UserInfo implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;

    private String username;
}
