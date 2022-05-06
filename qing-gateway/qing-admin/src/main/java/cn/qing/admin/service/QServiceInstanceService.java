package cn.qing.admin.service;

import cn.qing.admin.entity.QServiceInstance;
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
public interface QServiceInstanceService extends IService<QServiceInstance> {

    /**
     * 查询某个服务下的所有实例
     *
     * @param id
     * @return
     */
    List<QServiceInstance> getServiceInstanceListByServiceId(Long id);

    /**
     * 插入实例数据，若存在则更新
     *
     * @param qServiceInstance
     */
    void insert(QServiceInstance qServiceInstance);

    /**
     * 清空数据
     */
    void clean();
}
