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

import cn.qing.common.exception.QingException;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;


/**
 * Test cases for ParamCheckUtils.
 */
public final class ParamCheckUtilsTest {

    @Test
    public void testBodyIsEmpty() {
        assertTrue(ParamCheckUtils.bodyIsEmpty(null));
        assertTrue(ParamCheckUtils.bodyIsEmpty(""));
        assertTrue(ParamCheckUtils.bodyIsEmpty("null"));
        assertFalse(ParamCheckUtils.bodyIsEmpty("123"));
    }

    @Test
    public void testcheckParamsLength() {
        assertDoesNotThrow(() -> {
            ParamCheckUtils.checkParamsLength(2, 2);
        });
    }

    @Test
    public void testcheckParamsLengthException() {
        Throwable exception = assertThrows(QingException.class, () -> {
            ParamCheckUtils.checkParamsLength(1, 2);
        });
        assertEquals("args.length < types.length", exception.getMessage());
    }
}
