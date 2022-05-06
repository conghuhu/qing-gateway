package cn.qing.admin.service;

import cn.qing.admin.entity.QLimitRule;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-15
 */
public interface QLimitRuleService extends IService<QLimitRule> {

    /**
     * 查询所有限制规则
     * @return
     */
    List<QLimitRule> getLimitRuleList();

    /**
     * 添加限制规则
     * @param limitRule
     * @return
     */
    QLimitRule addLimitRule(QLimitRule limitRule);

    /**
     * 修改限制规则
     * @param limitRule
     */
    void updateLimitRule(QLimitRule limitRule);

    /**
     * 删除限制规则
     * @param id
     */
    void deleteLimitRule(Long id);
}
