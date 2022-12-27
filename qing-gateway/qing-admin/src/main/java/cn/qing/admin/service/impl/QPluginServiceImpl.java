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
