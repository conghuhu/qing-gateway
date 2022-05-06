package cn.qing.admin.mapper;

import cn.qing.admin.entity.QNacosInfo;
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
public interface QNacosInfoMapper extends BaseMapper<QNacosInfo> {

    void insertByReplace(@Param("nacosInfo") QNacosInfo nacosInfo);

    @Update("truncate table q_nacos_info")
    void clean();
}
