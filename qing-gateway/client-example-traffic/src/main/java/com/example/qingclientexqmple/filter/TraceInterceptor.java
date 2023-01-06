package com.example.qingclientexqmple.filter;

import com.example.qingclientexqmple.utils.TraceIdUtil;
import io.micrometer.tracing.Span;
import io.micrometer.tracing.Tracer;
import io.micrometer.tracing.otel.bridge.OtelTracer;
import io.micrometer.tracing.propagation.Propagator;
import io.opentelemetry.sdk.OpenTelemetrySdk;
import io.opentelemetry.semconv.trace.attributes.SemanticAttributes;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author conghuhu
 * @create 2023/1/2 22:52
 */
@Slf4j
@Component
public class TraceInterceptor implements HandlerInterceptor {
    private final OtelTracer tracer;

    private final OpenTelemetrySdk openTelemetry;

    private final Propagator propagator;

    public TraceInterceptor(OtelTracer tracer, OpenTelemetrySdk openTelemetrySdk, Propagator propagator) {
        this.tracer = tracer;
        this.openTelemetry = openTelemetrySdk;
        this.propagator = propagator;
    }

    @Override
    public boolean preHandle(HttpServletRequest servletRequest, HttpServletResponse servletResponse, Object handler) throws Exception {
        Span span = getServerSpan(servletRequest);
        try (Tracer.SpanInScope ignored = tracer.withSpan(span)) {
            TraceIdUtil.setTraceId(span.context().traceId(), span.context().spanId());
            return true;
        } finally {
            span.end();
        }
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        log.info("destory");
        TraceIdUtil.remove();
    }


    private Span getServerSpan(HttpServletRequest httpServletRequest) {
        Span.Builder builder = propagator.extract(httpServletRequest, (carrier, key) -> httpServletRequest.getHeader(key));
        return builder.name(httpServletRequest.getRequestURI()).kind(Span.Kind.SERVER).tag(String.valueOf(SemanticAttributes.HTTP_METHOD), httpServletRequest.getMethod()).start();
    }

}
