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

import cn.qing.admin.entity.QWebsocketInfo;
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
public interface QWebsocketInfoService extends IService<QWebsocketInfo> {

    /**
     * 插入websocket信息
     * @param websocketInfo
     */
    void insert(QWebsocketInfo websocketInfo);

    /**
     * 查询所有websocket信息
     * @return
     */
    List<QWebsocketInfo> getWebsocketInfo();

    /**
     * 清空表
     */
    void clean();

    String changeWebsocketStatus(String serverWebSocketUrl, Boolean status);

    /**
     * 根据id移除websocket信息
     * @param id
     */
    String removeGateWayNode(Long id);

    List<QWebsocketInfo> getAll();
}
