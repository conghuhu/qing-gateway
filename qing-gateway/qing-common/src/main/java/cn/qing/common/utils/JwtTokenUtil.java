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

import io.jsonwebtoken.*;

import java.util.Date;

public class JwtTokenUtil {
    /**
     * 24小时
     */
    private static long tokenExpiration = 24 * 60 * 60 * 1000;
    /**
     * 秘钥
     */
    private static String tokenSignKey = "cong0917lovebiyanqichangchangjiujiumeimanruhehydjasghdhasdujsagdiuyashduasghyduiasduhasdghajkshdgj";

    private static String passwordKey = "conghuhu";

    public static String createToken(String userName, String password) {
        return Jwts.builder().setSubject(userName)
                .claim(passwordKey, password).setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + tokenExpiration))
                .signWith(SignatureAlgorithm.HS512, tokenSignKey)
                .compressWith(CompressionCodecs.GZIP)
                .compact();
    }

    public static String getUserNameFromToken(String token) throws ExpiredJwtException, MalformedJwtException {
        String userName = Jwts.parser().setSigningKey(tokenSignKey).parseClaimsJws(token).getBody().getSubject();
        return userName;
    }

    public static String getUserPasswordFromToken(String token) {
        Claims claims = Jwts.parser().setSigningKey(tokenSignKey).parseClaimsJws(token).getBody();
        return claims.get(passwordKey).toString();
    }
}
