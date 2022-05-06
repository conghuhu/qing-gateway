package cn.qing.admin.mapper;

import cn.qing.admin.entity.QPlugin;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-08
 */
@Mapper
@Repository
public interface QPluginMapper extends BaseMapper<QPlugin> {

}
