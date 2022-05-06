package cn.qing.admin.service.impl;

import cn.qing.admin.entity.QNacosInfo;
import cn.qing.admin.mapper.QNacosInfoMapper;
import cn.qing.admin.service.QNacosInfoService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.apache.ibatis.annotations.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-08
 */
@Service
public class QNacosInfoServiceImpl extends ServiceImpl<QNacosInfoMapper, QNacosInfo> implements QNacosInfoService {

    private final QNacosInfoMapper nacosInfoMapper;

    public QNacosInfoServiceImpl(QNacosInfoMapper qNacosInfoMapper) {
        this.nacosInfoMapper = qNacosInfoMapper;
    }

    /**
     * 插入nacos服务信息
     *
     * @param nacosInfo
     */
    @Override
    public void insert(QNacosInfo nacosInfo) {
        nacosInfoMapper.insertByReplace(nacosInfo);
    }

    /**
     * 清空表
     */
    @Override
    public void clean() {
        nacosInfoMapper.clean();
    }
}
