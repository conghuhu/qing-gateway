package cn.qing.server.handler;

import cn.qing.common.dto.CpuInfoDTO;
import cn.qing.common.dto.JvmInfoDTO;
import cn.qing.common.dto.MemInfoDTO;
import cn.qing.common.dto.SysInfoDTO;
import cn.qing.common.dto.ThreadInfoDTO;
import cn.qing.common.exception.QingException;
import cn.qing.common.pojo.dto.*;
import cn.qing.server.utils.HealthUtils;
import cn.qing.server.utils.RedisSyncUtil;
import com.alibaba.fastjson.JSON;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

/**
 * @author qing
 */
@Slf4j
@Component
public class HealthHandler {

    private final RedisSyncUtil redisSyncUtil;

    public static final Map<String, String> HEALTH_MAP = new HashMap<String, String>() {
        {
            put("/health/getCpuInfo", "getCpuInfo");
            put("/health/memInfo", "getMemInfo");
            put("/health/getSysInfo", "getSysInfo");
            put("/health/getJvmInfo", "getJvmInfo");
            put("/health/getThreadInfo", "getThreadInfo");
        }
    };

    public HealthHandler(RedisSyncUtil redisSyncUtil) {
        this.redisSyncUtil = redisSyncUtil;
    }

    /**
     * 核心处理，根据url分发处理
     *
     * @param exchange
     * @param urlPath
     * @return
     * @throws InterruptedException
     */
    public Mono<Void> getHealthInfo(ServerWebExchange exchange, String urlPath) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        String methodName = HEALTH_MAP.get(urlPath);
        if (methodName != null) {
            Method method = this.getClass().getMethod(methodName, ServerWebExchange.class);
            return (Mono<Void>) method.invoke(this, exchange);
        } else {
            throw new QingException("urlPath: " + urlPath + " not found");
        }
    }

    public Mono<Void> getCpuInfo(ServerWebExchange exchange) throws InterruptedException {
        CpuInfoDTO cpuInfoDTO = HealthUtils.printlnCpuInfo();
        String res = JSON.toJSONString(cpuInfoDTO);
        return formatResponse(exchange, res);
    }


    public Mono<Void> getMemInfo(ServerWebExchange exchange) {
        MemInfoDTO memInfoDTO = HealthUtils.memInfo();
        String res = JSON.toJSONString(memInfoDTO);
        return formatResponse(exchange, res);
    }

    public Mono<Void> getSysInfo(ServerWebExchange exchange) {
        SysInfoDTO sysInfoDTO = HealthUtils.sysInfo();
        String res = JSON.toJSONString(sysInfoDTO);
        return formatResponse(exchange, res);
    }

    public Mono<Void> getJvmInfo(ServerWebExchange exchange) {
        JvmInfoDTO jvmInfoDTO = HealthUtils.jvmInfo();
        String res = JSON.toJSONString(jvmInfoDTO);
        return formatResponse(exchange, res);
    }

    public Mono<Void> getThreadInfo(ServerWebExchange exchange) {
        ThreadInfoDTO threadInfoDTO = HealthUtils.threadInfo();
        String res = JSON.toJSONString(threadInfoDTO);
        return formatResponse(exchange, res);
    }


    /**
     * 处理返回结果
     *
     * @param exchange
     * @param res
     * @return
     */
    private Mono<Void> formatResponse(ServerWebExchange exchange, String res) {
        DataBuffer dataBuffer = exchange.getResponse().bufferFactory().wrap(res.getBytes(StandardCharsets.UTF_8));
        return exchange.getResponse().writeWith(Mono.just(dataBuffer));
    }

}
