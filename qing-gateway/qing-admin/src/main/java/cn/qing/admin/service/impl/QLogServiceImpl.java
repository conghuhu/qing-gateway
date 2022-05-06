package cn.qing.admin.service.impl;

import cn.qing.admin.entity.QLog;
import cn.qing.admin.mapper.QLogMapper;
import cn.qing.admin.pojo.params.PageParam;
import cn.qing.admin.pojo.vo.PageResult;
import cn.qing.admin.service.QLogService;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;

/**
 * 服务实现类
 *
 * @author conghuhu
 * @since 2022-04-18
 */
@Service
public class QLogServiceImpl extends ServiceImpl<QLogMapper, QLog> implements QLogService {

    private final QLogMapper logMapper;

    public QLogServiceImpl(QLogMapper logMapper) {
        this.logMapper = logMapper;
    }

    @Override
    public PageResult<List<QLog>> getInvokeLogs(PageParam pageParam) {
        Page<QLog> page = new Page<>(pageParam.getPageNum(), pageParam.getPageSize());
        Page<QLog> selectPage = StringUtils.hasLength(pageParam.getContent()) ?
                logMapper.selectPage(page, new LambdaQueryWrapper<QLog>()
                        .like(QLog::getOriginuri, pageParam.getContent())
                        .or()
                        .like(QLog::getOriginIP, pageParam.getContent())
                        .orderByDesc(QLog::getCreatedTime)
                )
                :
                logMapper.selectPage(page, new LambdaQueryWrapper<QLog>()
                        .orderByDesc(QLog::getCreatedTime));
        List<QLog> records = selectPage.getRecords();
        long current = selectPage.getCurrent();
        long total = selectPage.getTotal();
        long pageSize = selectPage.getSize();
        return PageResult.<List<QLog>>builder()
                .current(current).pageSize(pageSize).total(total)
                .data(records)
                .build();
    }
}
