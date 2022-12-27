/*
 * Copyright 2023 qing-gateway
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package cn.qing.admin.service.impl;

import cn.qing.admin.entity.QServiceInstance;
import cn.qing.admin.mapper.QServiceInstanceMapper;
import cn.qing.admin.service.QServiceInstanceService;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 服务实例
 *
 * @author conghuhu
 * @since 2022-04-08
 */
@Service
public class QServiceInstanceServiceImpl extends ServiceImpl<QServiceInstanceMapper, QServiceInstance> implements QServiceInstanceService {

    private final QServiceInstanceMapper qServiceInstanceMapper;

    public QServiceInstanceServiceImpl(QServiceInstanceMapper qServiceInstanceMapper) {
        this.qServiceInstanceMapper = qServiceInstanceMapper;
    }

    /**
     * 查询某个服务下的所有实例
     *
     * @param id
     * @return
     */
    @Override
    public List<QServiceInstance> getServiceInstanceListByServiceId(Long id) {
        List<QServiceInstance> serviceInstanceList = qServiceInstanceMapper.selectList(new LambdaQueryWrapper<QServiceInstance>()
                .eq(QServiceInstance::getServiceId, id));
        return serviceInstanceList;
    }

    /**
     * 插入实例数据，若存在则更新
     *
     * @param qServiceInstance
     */
    @Override
    public void insert(QServiceInstance qServiceInstance) {
        QServiceInstance instance = qServiceInstanceMapper.selectOne(new LambdaQueryWrapper<QServiceInstance>()
                .eq(QServiceInstance::getIp, qServiceInstance.getIp())
                .eq(QServiceInstance::getPort, qServiceInstance.getPort())
        );
        if (instance == null) {
            qServiceInstanceMapper.insert(qServiceInstance);
        } else {
            qServiceInstance.setId(instance.getId());
            qServiceInstanceMapper.updateById(qServiceInstance);
        }
    }

    /**
     * 清空数据
     */
    @Override
    public void clean() {
        qServiceInstanceMapper.clean();
    }
}
