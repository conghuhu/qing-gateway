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
