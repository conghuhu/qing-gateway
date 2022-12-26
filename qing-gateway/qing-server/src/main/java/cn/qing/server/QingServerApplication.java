package cn.qing.server;

import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

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
        new SpringApplicationBuilder(QingServerApplication.class)
                .web(WebApplicationType.REACTIVE)
                .run(args);
    }

}
