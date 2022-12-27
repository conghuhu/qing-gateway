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
package cn.qing.common.constants;


public final class PublicConstant {

    private static final String AK = "bYm9BydW7zrgrdhKD4uMTZLHX2IaujHx";

    /**
     * 获取百度IP查询url
     *
     * @param ip
     * @return
     */
    public static String getBaiDuIpUrl(String ip) {
        return "https://api.map.baidu.com/location/ip?ak=" + AK + "&ip=" + ip + "&coor=bd09ll";
    }
}
