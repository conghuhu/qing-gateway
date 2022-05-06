package cn.qing.admin.mapper;

import cn.qing.admin.entity.QUser;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * <p>
 * Mapper 接口
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-24
 */
@Repository
@Mapper
public interface QUserMapper extends BaseMapper<QUser> {

}
