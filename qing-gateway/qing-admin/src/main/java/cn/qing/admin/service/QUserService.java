package cn.qing.admin.service;

import cn.qing.admin.entity.QUser;
import cn.qing.admin.pojo.params.RegisterParam;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-24
 */
public interface QUserService extends IService<QUser> {

    String register(RegisterParam registerParam);

    String login(RegisterParam registerParam);

    Boolean checkToken(String token);
}
