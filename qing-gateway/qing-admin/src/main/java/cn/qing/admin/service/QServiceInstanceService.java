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
