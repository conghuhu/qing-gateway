package cn.qing.admin.service.impl;

import cn.qing.admin.entity.QService;
import cn.qing.admin.entity.QServiceInstance;
import cn.qing.admin.mapper.QServiceMapper;
import cn.qing.admin.pojo.vo.ServiceInfoVo;
import cn.qing.admin.service.QServiceInstanceService;
import cn.qing.admin.service.QServiceService;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 服务实现类
 *
 * @author conghuhu
 * @since 2022-04-08
 */
@Service
public class QServiceServiceImpl extends ServiceImpl<QServiceMapper, QService> implements QServiceService {

    private final QServiceMapper qServiceMapper;

    private final QServiceInstanceService qServiceInstanceService;

    public QServiceServiceImpl(QServiceMapper qServiceMapper, QServiceInstanceService qServiceInstanceService) {
        this.qServiceMapper = qServiceMapper;
        this.qServiceInstanceService = qServiceInstanceService;
    }

    /**
     * 获取服务及其实例信息
     *
     * @return
     */
    @Override
    public List<ServiceInfoVo> getServiceList() {
        List<ServiceInfoVo> serviceInfoVoList = new ArrayList<>();
        List<QService> qServiceList = qServiceMapper.selectList(new LambdaQueryWrapper<>(new QService()));
        qServiceList.parallelStream().forEach(qService -> {
            ServiceInfoVo serviceInfoVo = new ServiceInfoVo();
            BeanUtils.copyProperties(qService, serviceInfoVo);
            List<QServiceInstance> serviceInstanceList = qServiceInstanceService
                    .getServiceInstanceListByServiceId(qService.getId());
            serviceInfoVo.setServiceInstanceList(serviceInstanceList);
            serviceInfoVoList.add(serviceInfoVo);
        });
        return serviceInfoVoList;
    }

    /**
     * 插入service数据，若service已存在则更新
     *
     * @param qService
     */
    @Override
    public void insert(QService qService) {
        qServiceMapper.insertByReplace(qService);
    }

    /**
     * 清空表
     */
    @Override
    public void clean() {
        qServiceMapper.clean();
    }
}
