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
