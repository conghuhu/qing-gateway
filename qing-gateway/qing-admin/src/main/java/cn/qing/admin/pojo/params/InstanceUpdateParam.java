package cn.qing.admin.pojo.params;

import lombok.Data;

@Data
public class InstanceUpdateParam {

    private String serviceName;

    private String ip;

    private String port;

    private String version;

    private Integer weight;

    private String clusterName;

    private String protocol;

}
