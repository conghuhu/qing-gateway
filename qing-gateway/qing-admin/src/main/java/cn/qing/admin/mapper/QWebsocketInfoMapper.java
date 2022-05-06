package cn.qing.admin.mapper;

import cn.qing.admin.entity.QWebsocketInfo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

/**
 * <p>
 * Mapper 接口
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-08
 */
@Mapper
@Repository
public interface QWebsocketInfoMapper extends BaseMapper<QWebsocketInfo> {

    /**
     * replace into插入数据
     *
     * @param websocketInfo
     */
    void insertByReplace(@Param("websocketInfo") QWebsocketInfo websocketInfo);

    /**
     * 清空表
     */
    @Update("truncate table q_websocket_info")
    void clean();
}
