package cn.qing.server;

import cn.qing.server.utils.SpringContextUtil;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ApplicationContext;

import javax.annotation.PostConstruct;
import java.util.TimeZone;

/**
 * @author cgq
 */
@SpringBootApplication
public class QingServerApplication {

    @PostConstruct
    void setDefaultTimezone() {
        TimeZone.setDefault(TimeZone.getTimeZone("Asia/Shanghai"));
    }

    public static void main(String[] args) {
        ApplicationContext applicationContext = new SpringApplicationBuilder(
                QingServerApplication.class)
                .web(WebApplicationType.REACTIVE).run(args);
        SpringContextUtil.setApplicationContext(applicationContext);
    }

}
