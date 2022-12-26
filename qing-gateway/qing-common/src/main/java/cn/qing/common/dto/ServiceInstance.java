package cn.qing.common.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * 服务实例
 *
 * @author conghuhu
 * @create 2022-04-03 20:47
 */
@Data
public class ServiceInstance implements Serializable, Comparable<ServiceInstance> {

    private static final long serialVersionUID = -81233954060390109L;

    private String instanceId;

    /**
     * 服务实例对应所在的nacos服务
     */
    private String serviceName;

    private String ip;

    private Integer port;

    private String url;

    /**
     * 服务实例的版本号，用来灰度发布
     */
    private String version;

    private String status;

    /**
     * 权重
     */
    private Integer weight;

    /**
     * 服务实例所在的集群
     */
    private String clusterName;

    /**
     * 服务实例的协议
     */
    private String protocol;

    /**
     * 按版本号降序排列
     *
     * @param instance
     * @return
     */
    @Override
    public int compareTo(ServiceInstance instance) {
        String[] split1 = this.version.split("\\.");
        String[] split2 = instance.getVersion().split("\\.");
        for (int i = 0; i < split1.length || i < split2.length; i++) {
            int value1 = 0, value2 = 0;
            if (i < split1.length) {
                value1 = Integer.parseInt(split1[i]);
            }
            if (i < split2.length) {
                value2 = Integer.parseInt(split2[i]);
            }

            if (value1 > value2) {
                return -1;
            } else if (value1 < value2) {
                return 1;
            }
        }
        return 0;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (obj instanceof ServiceInstance) {
            ServiceInstance instance = (ServiceInstance) obj;
            return this.getServiceName().equals(instance.getServiceName())
                    && this.getIp().equals(instance.getIp())
                    && this.getPort().equals(instance.getPort())
                    && this.getVersion().equals(instance.getVersion())
                    && this.getClusterName().equals(instance.getClusterName())
                    && this.getProtocol().equals(instance.getProtocol())
                    && this.getWeight().equals(instance.getWeight());
        }
        return false;
    }

    @Override
    public int hashCode() {
        return this.getServiceName().length() + this.getIp().length() + this.getPort() + this.getVersion().length();
    }
}
