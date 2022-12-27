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
package cn.qing.admin.spring;

import cn.qing.admin.starter.SystemInitStarter;
import cn.qing.admin.util.SpringContextUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * @author conghuhu
 * @create 2022/12/26 16:34
 */
@Slf4j
@Component
public class QingApplicationContextAware implements ApplicationContextAware {

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        SpringContextUtil.getInstance().setApplicationContext(applicationContext);
        SystemInitStarter systemInitStarter = SpringContextUtil.getInstance().getBean(SystemInitStarter.class);
        try {
            systemInitStarter.run();
        } catch (Exception e) {
            e.printStackTrace();
            log.error("系统初始化失败，请检查");
        }
    }
}
