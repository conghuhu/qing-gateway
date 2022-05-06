package cn.qing.admin.service;

import cn.qing.admin.entity.QService;
import cn.qing.admin.pojo.vo.ServiceInfoVo;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-08
 */
public interface QServiceService extends IService<QService> {

    /**
     * 获取服务及其实例信息
     *
     * @return
     */
    List<ServiceInfoVo> getServiceList();

    /**
     * 插入service数据，若service已存在则更新
     *
     * @param qService
     */
    void insert(QService qService);

    /**
     * 清空表
     */
    void clean();
}
