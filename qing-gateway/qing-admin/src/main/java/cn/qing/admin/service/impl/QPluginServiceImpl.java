package cn.qing.admin.service.impl;

import cn.qing.admin.entity.QPlugin;
import cn.qing.admin.mapper.QPluginMapper;
import cn.qing.admin.service.QPluginService;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-08
 */
@Service
public class QPluginServiceImpl extends ServiceImpl<QPluginMapper, QPlugin> implements QPluginService {

    private final QPluginMapper pluginMapper;

    public QPluginServiceImpl(QPluginMapper pluginMapper) {
        this.pluginMapper = pluginMapper;
    }

    /**
     * 查询所有插件
     *
     * @return
     */
    @Override
    public List<QPlugin> getPluginList() {
        List<QPlugin> pluginList = pluginMapper.selectList(new LambdaQueryWrapper<>());
        return pluginList;
    }
}
