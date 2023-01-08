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
package cn.qing.server.utils;

import org.slf4j.MDC;

import java.util.UUID;

/**
 * @author conghuhu
 * @create 2023/1/6 16:08
 */
public class MDCUtil {
    public static final String TRACE_ID = "trace_id";
    public static final String SPAN_ID = "span_id";

    public static String getTraceId() {
        String traceId = (String) MDC.get(TRACE_ID);
        return traceId == null ? "" : traceId;
    }

    public static void setTraceId(String traceId, String spanId) {
        MDC.put(TRACE_ID, traceId);
        MDC.put(SPAN_ID, spanId);
    }

    public static void remove() {
        MDC.remove(TRACE_ID);
        MDC.remove(SPAN_ID);
    }

    public static void clear() {
        MDC.clear();
    }

    public static String generateTraceId() {
        return UUID.randomUUID().toString().replace("-", "");
    }

}
