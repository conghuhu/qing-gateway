package cn.qing.admin.service;

import cn.qing.admin.entity.QNacosInfo;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-08
 */
public interface QNacosInfoService extends IService<QNacosInfo> {

    /**
     * 插入nacos服务信息
     *
     * @param nacosInfo
     */
    void insert(QNacosInfo nacosInfo);

    /**
     * 清空表
     */
    void clean();
}
