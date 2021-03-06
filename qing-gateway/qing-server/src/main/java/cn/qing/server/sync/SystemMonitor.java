package cn.qing.server.sync;

import cn.qing.common.pojo.dto.CpuInfoDTO;
import cn.qing.common.pojo.dto.JvmInfoDTO;
import cn.qing.common.pojo.dto.MemInfoDTO;
import cn.qing.common.pojo.dto.ThreadInfoDTO;
import cn.qing.server.cache.IdentificationCache;
import cn.qing.server.utils.HealthUtils;
import cn.qing.server.utils.RedisSyncUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

@Slf4j
@Component
public class SystemMonitor {

    private final RedisSyncUtil redisSyncUtil;

    public SystemMonitor(RedisSyncUtil redisSyncUtil, ScheduledThreadPoolExecutor scheduledThreadPoolExecutor) {
        this.redisSyncUtil = redisSyncUtil;
        scheduledThreadPoolExecutor.scheduleAtFixedRate(new SystemMonitorTask(), 1000, 2000, TimeUnit.MILLISECONDS);
    }

    class SystemMonitorTask implements Runnable {
        @Override
        public void run() {
            String gatewayId = IdentificationCache.getGatewayId();
            try {
                if (gatewayId != null) {
                    getMemoryInfo(gatewayId);
                    getJvmInfo(gatewayId);
//                    getThreadInfo(gatewayId);
//                    getCpuInfo(gatewayId);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        public void getCpuInfo(String gatewayId) {
            CpuInfoDTO cpuInfoDTO = HealthUtils.printlnCpuInfo();
            long cpuNow = System.currentTimeMillis();
            // 往前五分钟
            String oldest = String.valueOf(cpuNow - 3 * 60_000);
            redisSyncUtil.removeRangeByScore(gatewayId + "_cpu", 0, Double.parseDouble(oldest));
            redisSyncUtil.zAddToSet(gatewayId + "_cpu", cpuInfoDTO, Double.parseDouble(String.valueOf(cpuNow)));
        }

        public void getMemoryInfo(String gatewayId) {
            MemInfoDTO memInfoDTO = HealthUtils.memInfo();
            long memNow = System.currentTimeMillis();
            // 往前五分钟
            String oldest = String.valueOf(memNow - 3 * 60_000);
            redisSyncUtil.removeRangeByScore(gatewayId + "_mem", 0, Double.parseDouble(oldest));
            redisSyncUtil.zAddToSet(gatewayId + "_mem", memInfoDTO, Double.parseDouble(String.valueOf(memNow)));
        }

        public void getJvmInfo(String gatewayId) {
            JvmInfoDTO jvmInfoDTO = HealthUtils.jvmInfo();
            long jvmNow = System.currentTimeMillis();
            // 往前五分钟
            String oldest = String.valueOf(jvmNow - 3 * 60_000);
            redisSyncUtil.removeRangeByScore(gatewayId + "_jvm", 0, Double.parseDouble(oldest));
            redisSyncUtil.zAddToSet(gatewayId + "_jvm", jvmInfoDTO, Double.parseDouble(String.valueOf(jvmNow)));
        }

        public void getThreadInfo(String gatewayId) {
            ThreadInfoDTO threadInfoDTO = HealthUtils.threadInfo();
            long threadNow = System.currentTimeMillis();
            // 往前两分钟
            String oldest = String.valueOf(threadNow - 2 * 60_000);
            redisSyncUtil.removeRangeByScore(gatewayId + "_thread", 0, Double.parseDouble(oldest));
            redisSyncUtil.zAddToSet(gatewayId + "_thread", threadInfoDTO, Double.parseDouble(String.valueOf(threadNow)));
        }
    }
}
