package cn.qing.admin.service;

import cn.qing.admin.entity.QPlugin;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-08
 */
public interface QPluginService extends IService<QPlugin> {

    /**
     * 查询所有插件
     * @return
     */
    List<QPlugin> getPluginList();
}
