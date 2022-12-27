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
package cn.qing.common.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.CompressionCodecs;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.SneakyThrows;

import java.util.Date;

public class JwtTokenUtil {
    /**
     * 24小时
     */
    private static final long TOKEN_EXPIRATION = 24 * 60 * 60 * 1000;
    /**
     * 秘钥
     */
    private static final String TOKEN_SIGN_KEY = "cong0917lovebiyanqichangchangjiujiumeimanruhehydjasghdhasdujsagdiuyashduasghyduiasduhasdghajkshdgj";

    private static final String PASSWORD_KEY = "password";

    /**
     * 生成token
     *
     * @param userName username
     * @param password password
     * @return token
     */
    @SneakyThrows
    public static String createToken(String userName, String password) {
        return Jwts.builder()
                .setSubject(userName)
                .claim(PASSWORD_KEY, password)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + TOKEN_EXPIRATION))
                .signWith(SignatureAlgorithm.HS512, TOKEN_SIGN_KEY)
                .compressWith(CompressionCodecs.GZIP)
                .compact();
    }

    @SneakyThrows
    public static String getUserNameFromToken(String token) throws ExpiredJwtException, MalformedJwtException {
        return getClaimsFromToken(token).getSubject();
    }

    /**
     * 判断token是否失效
     *
     * @param token string
     * @return boolean
     */
    public static boolean isTokenExpired(String token) {
        Date expiredDate = getExpiredDateFromToken(token);
        return expiredDate.after(new Date());
    }

    private static Date getExpiredDateFromToken(String token) {
        return getClaimsFromToken(token).getExpiration();
    }

    @SneakyThrows
    private static Claims getClaimsFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(TOKEN_SIGN_KEY)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}
