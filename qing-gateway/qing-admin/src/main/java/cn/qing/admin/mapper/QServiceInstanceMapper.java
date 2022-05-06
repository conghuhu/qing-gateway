package cn.qing.admin.mapper;

import cn.qing.admin.entity.QServiceInstance;
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
public interface QServiceInstanceMapper extends BaseMapper<QServiceInstance> {

    void insertByReplace(@Param("serviceInstance") QServiceInstance serviceInstance);

    /**
     * 清空表
     */
    @Update("truncate table q_service_instance")
    void clean();
}
