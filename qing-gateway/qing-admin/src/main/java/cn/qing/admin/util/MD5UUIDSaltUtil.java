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
