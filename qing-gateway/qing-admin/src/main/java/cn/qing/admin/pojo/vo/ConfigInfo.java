package cn.qing.admin.pojo.vo;

import cn.qing.admin.entity.QNacosInfo;
import cn.qing.admin.entity.QWebsocketInfo;
import lombok.Data;

import java.util.List;

@Data
public class ConfigInfo {

    private QNacosInfo nacosInfo;

    private List<QWebsocketInfo> websocketInfoList;

}
