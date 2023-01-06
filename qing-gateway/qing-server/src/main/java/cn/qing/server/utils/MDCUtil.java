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
