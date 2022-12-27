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

import java.util.concurrent.TimeUnit;

/**
 * @author conghuhu
 * @create 2022/12/26 17:56
 */
public class ThreadUtils {

    /**
     * sleep current thread.
     *
     * @param timeUnit the time unit
     * @param time     the time
     */
    public static void sleep(final TimeUnit timeUnit, final int time) {
        try {
            timeUnit.sleep(time);
        } catch (InterruptedException ex) {
            Thread.currentThread().interrupt();
        }
    }

}
