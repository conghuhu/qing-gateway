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

import cn.qing.admin.entity.QWebsocketInfo;
import cn.qing.admin.mapper.QWebsocketInfoMapper;
import cn.qing.admin.service.QWebsocketInfoService;
import cn.qing.common.exception.QingException;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 服务实现类
 *
 * @author conghuhu
 * @since 2022-04-08
 */
@Service
public class QWebsocketInfoServiceImpl extends ServiceImpl<QWebsocketInfoMapper, QWebsocketInfo> implements QWebsocketInfoService {

    private final QWebsocketInfoMapper websocketInfoMapper;

    public QWebsocketInfoServiceImpl(QWebsocketInfoMapper websocketInfoMapper) {
        this.websocketInfoMapper = websocketInfoMapper;
    }

    /**
     * 插入websocket信息
     *
     * @param websocketInfo
     */
    @Override
    public void insert(QWebsocketInfo websocketInfo) {
        websocketInfoMapper.insertByReplace(websocketInfo);
    }

    /**
     * 查询所有websocket信息
     *
     * @return
     */
    @Override
    public List<QWebsocketInfo> getWebsocketInfo() {
        return websocketInfoMapper.selectList(new LambdaQueryWrapper<QWebsocketInfo>()
                .orderByDesc(QWebsocketInfo::getCreatedTime)
        );
    }

    /**
     * 清空表
     */
    @Override
    public void clean() {
        websocketInfoMapper.clean();
    }

    @Override
    public String changeWebsocketStatus(String serverWebSocketUrl, Boolean status) {
        QWebsocketInfo websocketInfo = websocketInfoMapper.selectOne(new LambdaQueryWrapper<QWebsocketInfo>()
                .eq(QWebsocketInfo::getUri, serverWebSocketUrl));
        if (websocketInfo == null) {
            return null;
        }
        return websocketInfo.getBeanName();
    }

    /**
     * 根据id移除websocket信息
     *
     * @param id
     */
    @Override
    public String removeGateWayNode(Long id) {
        QWebsocketInfo websocketInfo = websocketInfoMapper.selectById(id);
        if (websocketInfo == null) {
            throw new QingException("该节点不存在");
        }
        websocketInfoMapper.deleteById(id);
        return websocketInfo.getBeanName();
    }

    @Override
    public List<QWebsocketInfo> getAll() {
        return websocketInfoMapper.selectList(new LambdaQueryWrapper<QWebsocketInfo>());
    }
}
