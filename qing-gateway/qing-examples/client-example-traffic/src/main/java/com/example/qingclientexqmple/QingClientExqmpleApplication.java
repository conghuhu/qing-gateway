package com.example.qingclientexqmple;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class QingClientExqmpleApplication {

    public static void main(String[] args) {
        SpringApplication.run(QingClientExqmpleApplication.class, args);
    }

}
