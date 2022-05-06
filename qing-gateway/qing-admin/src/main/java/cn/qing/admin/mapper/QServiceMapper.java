package cn.qing.admin.mapper;

import cn.qing.admin.entity.QService;
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
public interface QServiceMapper extends BaseMapper<QService> {

    /**
     * 插入数据
     *
     * @param service
     */
    void insertByReplace(@Param("service") QService service);

    /**
     * 清空表
     */
    @Update("truncate table q_service")
    void clean();
}
