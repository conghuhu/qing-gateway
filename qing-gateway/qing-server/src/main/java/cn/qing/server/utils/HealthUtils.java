package cn.qing.server.utils;

import cn.qing.common.dto.CpuInfoDTO;
import cn.qing.common.dto.JvmInfoDTO;
import cn.qing.common.dto.MemInfoDTO;
import cn.qing.common.dto.SysInfoDTO;
import cn.qing.common.dto.ThreadInfoDTO;
import cn.qing.common.dto.ThreadInfoItemDTO;
import lombok.extern.slf4j.Slf4j;
import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.GlobalMemory;
import oshi.hardware.PhysicalMemory;
import oshi.hardware.VirtualMemory;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

/**
 * @author qing
 */
@Slf4j
public class HealthUtils {

    /**
     * CPU信息
     *
     * @return
     */
    public static CpuInfoDTO printlnCpuInfo() {
        SystemInfo systemInfo = new SystemInfo();
        log.info("CPU信息");
        CentralProcessor processor = systemInfo.getHardware().getProcessor();
        log.info("CPU型号：" + processor);
        // 这一步就获取不到了
        long[] prevTicks = processor.getSystemCpuLoadTicks();
        // 睡眠1s
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        long[] ticks = processor.getSystemCpuLoadTicks();
        long nice = ticks[CentralProcessor.TickType.NICE.getIndex()] - prevTicks[CentralProcessor.TickType.NICE.getIndex()];
        long irq = ticks[CentralProcessor.TickType.IRQ.getIndex()] - prevTicks[CentralProcessor.TickType.IRQ.getIndex()];
        long softirq = ticks[CentralProcessor.TickType.SOFTIRQ.getIndex()] - prevTicks[CentralProcessor.TickType.SOFTIRQ.getIndex()];
        long steal = ticks[CentralProcessor.TickType.STEAL.getIndex()] - prevTicks[CentralProcessor.TickType.STEAL.getIndex()];
        long cSys = ticks[CentralProcessor.TickType.SYSTEM.getIndex()] - prevTicks[CentralProcessor.TickType.SYSTEM.getIndex()];
        long user = ticks[CentralProcessor.TickType.USER.getIndex()] - prevTicks[CentralProcessor.TickType.USER.getIndex()];
        long ioWait = ticks[CentralProcessor.TickType.IOWAIT.getIndex()] - prevTicks[CentralProcessor.TickType.IOWAIT.getIndex()];
        long idle = ticks[CentralProcessor.TickType.IDLE.getIndex()] - prevTicks[CentralProcessor.TickType.IDLE.getIndex()];
        long totalCpu = user + nice + cSys + idle + ioWait + irq + softirq + steal;

        CpuInfoDTO cpuInfoDTO = new CpuInfoDTO();
        cpuInfoDTO.setCpuCoreCount(processor.getLogicalProcessorCount());
        cpuInfoDTO.setCpuSysUsage(cSys * 1.0 / totalCpu);
        cpuInfoDTO.setCpuUserUsage(user * 1.0 / totalCpu);
        cpuInfoDTO.setCpuIdleUsage(idle * 1.0 / totalCpu);
        cpuInfoDTO.setCpuWaitUsage(ioWait * 1.0 / totalCpu);
        cpuInfoDTO.setCpuCombinedUsage(1 - idle * 1.0 / totalCpu);
        cpuInfoDTO.setCollectTime(System.currentTimeMillis());
        return cpuInfoDTO;
    }

    /**
     * 内存信息
     *
     * @return
     */
    public static MemInfoDTO memInfo() {
        SystemInfo systemInfo = new SystemInfo();
        GlobalMemory memory = systemInfo.getHardware().getMemory();
        //总内存
        long totalByte = memory.getTotal();
        //剩余
        long acaliableByte = memory.getAvailable();
        List<PhysicalMemory> physicalMemory = memory.getPhysicalMemory();
        VirtualMemory virtualMemory = memory.getVirtualMemory();

        MemInfoDTO memInfoDTO = new MemInfoDTO();
        memInfoDTO.setTotalMem(totalByte);
        memInfoDTO.setUsedMem(totalByte - acaliableByte);
        memInfoDTO.setUsedRate((totalByte - acaliableByte) * 1.0 / totalByte);
        memInfoDTO.setFreeMem(acaliableByte);
        memInfoDTO.setCollectTime(System.currentTimeMillis());
        return memInfoDTO;
    }

    /**
     * 操作系统信息
     *
     * @return
     */
    public static SysInfoDTO sysInfo() {
        Properties props = System.getProperties();
        //系统名称
        String osName = props.getProperty("os.name");
        //架构名称
        String osArch = props.getProperty("os.arch");

        String version = props.getProperty("os.version");

        SysInfoDTO sysInfoDTO = new SysInfoDTO();
        sysInfoDTO.setOsName(osName);
        sysInfoDTO.setOsArch(osArch);
        sysInfoDTO.setOsVersion(version);
        sysInfoDTO.setCollectTime(System.currentTimeMillis());
        return sysInfoDTO;
    }

    public static JvmInfoDTO jvmInfo() {
        Properties props = System.getProperties();
        Runtime runtime = Runtime.getRuntime();
        //jvm总内存
        long jvmTotalMemoryByte = runtime.totalMemory();
        //jvm最大可申请
        long jvmMaxMemoryByte = runtime.maxMemory();
        //空闲空间
        long freeMemoryByte = runtime.freeMemory();
        //jdk版本
        String jdkVersion = props.getProperty("java.version");

        JvmInfoDTO jvmInfoDTO = new JvmInfoDTO();
        jvmInfoDTO.setJvmTotalMemoryByte(jvmTotalMemoryByte);
        jvmInfoDTO.setJvmMaxMemoryByte(jvmMaxMemoryByte);
        jvmInfoDTO.setJvmFreeMemoryByte(freeMemoryByte);
        jvmInfoDTO.setJdkVersion(jdkVersion);
        jvmInfoDTO.setJvmMemoryUsedRate((jvmTotalMemoryByte - freeMemoryByte) * 1.0 / jvmTotalMemoryByte);
        jvmInfoDTO.setCollectTime(System.currentTimeMillis());

        return jvmInfoDTO;
    }

    public static ThreadInfoDTO threadInfo() {
        ThreadGroup currentGroup = Thread.currentThread().getThreadGroup();

        while (currentGroup.getParent() != null) {
            // 返回此线程组的父线程组
            currentGroup = currentGroup.getParent();
        }
        //此线程组中活动线程的估计数
        int noThreads = currentGroup.activeCount();

        Thread[] lstThreads = new Thread[noThreads];
        //把对此线程组中的所有活动子组的引用复制到指定数组中。
        currentGroup.enumerate(lstThreads);

        List<ThreadInfoItemDTO> resList = new ArrayList<>();

        for (Thread thread : lstThreads) {
            ThreadInfoItemDTO threadInfoItemDTO = new ThreadInfoItemDTO();
            threadInfoItemDTO.setThreadName(thread.getName());
            threadInfoItemDTO.setThreadState(thread.getState().toString());
            threadInfoItemDTO.setThreadPriority(thread.getPriority());
            threadInfoItemDTO.setThreadId(thread.getId());
            threadInfoItemDTO.setThreadGroupName(thread.getThreadGroup().getName());
            threadInfoItemDTO.setThreadGroupActiveCount(thread.getThreadGroup().activeCount());
            resList.add(threadInfoItemDTO);
        }

        return new ThreadInfoDTO(resList);
    }

    public static String formatByte(long byteNumber) {
        //换算单位
        double FORMAT = 1024.0;
        double kbNumber = byteNumber / FORMAT;
        if (kbNumber < FORMAT) {
            return new DecimalFormat("#.##KB").format(kbNumber);
        }
        double mbNumber = kbNumber / FORMAT;
        if (mbNumber < FORMAT) {
            return new DecimalFormat("#.##MB").format(mbNumber);
        }
        double gbNumber = mbNumber / FORMAT;
        if (gbNumber < FORMAT) {
            return new DecimalFormat("#.##GB").format(gbNumber);
        }
        double tbNumber = gbNumber / FORMAT;
        return new DecimalFormat("#.##TB").format(tbNumber);
    }

}
