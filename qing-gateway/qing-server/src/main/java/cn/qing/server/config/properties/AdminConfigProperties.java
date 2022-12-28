package cn.qing.server.config.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.Map;

/**
 * @author conghuhu
 * @create 2022/12/27 22:23
 */
@Data
@ConfigurationProperties(prefix = "qing.admin")
@Configuration
public class AdminConfigProperties {

    /**
     * 控制面的连接信息
     */
    private List<AdminInfo> infos;

    public static class AdminInfo {
        String url;

        public AdminInfo() {
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }
    }
}
