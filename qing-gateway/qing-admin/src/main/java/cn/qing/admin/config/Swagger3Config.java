package cn.qing.admin.config;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.builders.RequestParameterBuilder;
import springfox.documentation.oas.annotations.EnableOpenApi;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * @author conghuhu
 * @create 2022-04-06 9:20
 */
@Configuration
public class Swagger3Config {
    @Bean
    public Docket docket() {
        return new Docket(DocumentationType.OAS_30)
                .apiInfo(
                        new ApiInfoBuilder()
                                .contact(new Contact("Kern", "", "15841721425@163.com"))
                                .title("qing-网关后台管理系统")
                                .version("1.0")
                                .description("开发中")
                                .build()
                )
                .securitySchemes(Collections.singletonList(HttpAuthenticationScheme.JWT_BEARER_BUILDER
                        .name("Authorization")
                        .description("token")
                        .build()
                ))
                .securityContexts(Collections.singletonList(SecurityContext.builder()
                        .securityReferences(Collections.singletonList(SecurityReference.builder()
                                .scopes(new AuthorizationScope[0])
                                .reference("Authorization")
                                .build()
                        ))
                        .build()
                ))
                .select()
                .apis(RequestHandlerSelectors.withMethodAnnotation(ApiOperation.class))
                .paths(PathSelectors.any())
                .build();
    }
}
