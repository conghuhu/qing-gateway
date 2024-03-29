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

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class ObjectTypeUtilsTest {

    @Test
    public void testIsBasicType() {
        Object o = 1;
        assertTrue(ObjectTypeUtils.isBasicType(o));
        o = new Short("1");
        assertTrue(ObjectTypeUtils.isBasicType(o));
        o = new Long("1");
        assertTrue(ObjectTypeUtils.isBasicType(o));
        o = new Double("1");
        assertTrue(ObjectTypeUtils.isBasicType(o));
        o = new Float("1");
        assertTrue(ObjectTypeUtils.isBasicType(o));
        o = Boolean.TRUE;
        assertTrue(ObjectTypeUtils.isBasicType(o));
        CharSequence str = "hello world";
        assertTrue(ObjectTypeUtils.isBasicType(str));
    }
}
