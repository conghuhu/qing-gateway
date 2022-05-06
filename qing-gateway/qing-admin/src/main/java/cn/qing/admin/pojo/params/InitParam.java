package cn.qing.admin.pojo.params;

import lombok.Data;

import java.util.List;

/**
 * @author conghuhu
 * @create 2022-04-07 20:48
 */
@Data
public class InitParam {

    /**
     * nacos配置中心地址
     */
    private String nacosServerAddr;

    /**
     * 网关websocket地址
     */
    private List<String> websocketUriList;

}
