package cn.qing.common.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LogDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String originIP;

    private String originURI;

    private String targetService;

    private ServiceInstance serviceInstance;

    private String routeName;

    private String proxyURI;

    private LocalDateTime createdTime;

}
