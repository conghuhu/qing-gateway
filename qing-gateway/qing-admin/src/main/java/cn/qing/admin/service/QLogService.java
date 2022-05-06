package cn.qing.admin.service;

import cn.qing.admin.entity.QLog;
import cn.qing.admin.pojo.params.PageParam;
import cn.qing.admin.pojo.vo.PageResult;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-18
 */
public interface QLogService extends IService<QLog> {

    /**
     * 查询所有日志
     * @return
     */
    PageResult<List<QLog>> getInvokeLogs(PageParam pageParam);
}
