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
package cn.qing.admin.util;

import org.apache.commons.codec.digest.DigestUtils;

import java.util.UUID;

public class MD5UUIDSaltUtil {

    private static String uuid = UUID.randomUUID().toString().replace("-", "");

    public static String createMd5Code(String code) {
        return DigestUtils.md5Hex(code);
    }

    public static boolean checkPassword(String userCode, String dbCode) {
        if (dbCode.equals(createMd5Code(userCode))) {
            return true;
        } else {
            return false;
        }
    }

    public static String getUuid() {
        return uuid;
    }

    public static String getSalt() {
        String salt = uuid.substring(0, 5);
        return salt;
    }

}
