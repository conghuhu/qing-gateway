package cn.qing.admin.transfer;

import cn.qing.admin.entity.QLog;
import cn.qing.common.dto.LogDTO;

/**
 * @author conghuhu
 * @create 2023/1/4 9:27
 */
public class LogTransfer {

    public static QLog transferToLog(LogDTO logDTO) {
        QLog log = new QLog();
        log.setOriginIP(logDTO.getOriginIP());
        log.setOriginuri(logDTO.getOriginURI());
        log.setProxyuri(logDTO.getProxyURI());
        log.setRouteName(logDTO.getRouteName());
        log.setServiceInstance(logDTO.getServiceInstance().getIp() + ":" + logDTO.getServiceInstance().getPort());
        log.setTargetService(logDTO.getTargetService());
        log.setCreatedTime(logDTO.getCreatedTime());
        log.setTraceId(logDTO.getTraceId());
        return log;
    }
}
