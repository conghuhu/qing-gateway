/*
 * Copyright 2023 qing-gateway
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package cn.qing.admin.service.impl;

import cn.qing.admin.entity.QUser;
import cn.qing.admin.mapper.QUserMapper;
import cn.qing.admin.pojo.params.RegisterParam;
import cn.qing.admin.pojo.vo.UserInfo;
import cn.qing.admin.service.QUserService;
import cn.qing.admin.util.MD5UUIDSaltUtil;
import cn.qing.admin.util.RedisUtil;
import cn.qing.common.utils.JwtTokenUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;

/**
 * 服务实现类
 *
 * @author conghuhu
 * @since 2022-04-24
 */
@Service
public class QUserServiceImpl extends ServiceImpl<QUserMapper, QUser> implements QUserService {

    private final RedisUtil redisUtil;
    private final QUserMapper userMapper;

    public QUserServiceImpl(RedisUtil redisUtil, QUserMapper userMapper) {
        this.redisUtil = redisUtil;
        this.userMapper = userMapper;
    }

    @Override
    public String register(RegisterParam registerParam) {
        String username = registerParam.getUsername();
        String password = registerParam.getPassword();
        QUser user = new QUser();
        try {
            Long selectCount = userMapper.selectCount(new LambdaQueryWrapper<QUser>().eq(QUser::getUsername, username));
            if (selectCount > 0) {
                return null;
            }
            String salt = MD5UUIDSaltUtil.getSalt();
            String newPassword = MD5UUIDSaltUtil.createMd5Code(password + salt);
            user.setUsername(username);
            user.setPassword(newPassword);
            user.setSalt(salt);
            user.setCreatedTime(LocalDateTime.now());
            user.setLastLoginTime(LocalDateTime.now());
            userMapper.insert(user);
            return getToken(user);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public String login(RegisterParam registerParam) {
        String username = registerParam.getUsername();
        String password = registerParam.getPassword();
        try {
            QUser user = queryUser(username, password);
            if (user == null) {
                return null;
            }
            return getToken(user);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public QUser queryUser(String username, String password) {
        QUser user = userMapper.selectOne(new LambdaQueryWrapper<QUser>().eq(QUser::getUsername, username));
        if (user == null) {
            return null;
        }
        String md5Code = MD5UUIDSaltUtil.createMd5Code(password + user.getSalt());
        if (user.getPassword().equals(md5Code)) {
            return user;
        }
        return null;
    }

    private String getToken(QUser user) {
        String username = user.getUsername();
        String password = user.getPassword();
        String token = JwtTokenUtil.createToken(username, password);
        UserInfo userInfo = new UserInfo();
        BeanUtils.copyProperties(user, userInfo);
        redisUtil.set("Token_" + token, userInfo, 60 * 60 * 24);
        return token;
    }

    /**
     * 检查登录是否有效
     *
     * @param token
     * @return
     */
    @Override
    public Boolean checkToken(String token) {
        UserInfo userInfo = (UserInfo) redisUtil.get("Token_" + token);
        if (userInfo == null) {
            return false;
        }
        return true;
    }
}
