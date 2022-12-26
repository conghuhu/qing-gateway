package cn.qing.admin;

import cn.qing.admin.starter.SystemInitStarter;
import cn.qing.admin.util.SpringContextUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import springfox.documentation.oas.annotations.EnableOpenApi;

import javax.annotation.PostConstruct;
import java.util.TimeZone;

@Slf4j
@SpringBootApplication
@EnableOpenApi
public class QingAdminApplication {

    @PostConstruct
    void setDefaultTimezone() {
        TimeZone.setDefault(TimeZone.getTimeZone("Asia/Shanghai"));
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(QingAdminApplication.class, args);
        log.info("QingAdminApplication start success");
    }

}
