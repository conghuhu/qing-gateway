package com.example.qingclientexqmple.filter;

import io.micrometer.tracing.Span;
import io.micrometer.tracing.Tracer;
import io.micrometer.tracing.otel.bridge.OtelTracer;
import io.micrometer.tracing.propagation.Propagator;
import io.opentelemetry.sdk.OpenTelemetrySdk;
import io.opentelemetry.semconv.trace.attributes.SemanticAttributes;
import org.springframework.stereotype.Component;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * @author conghuhu
 * @create 2023/1/2 22:52
 */
@Component
public class TraceFilter implements Filter {
    private final OtelTracer tracer;

    private final OpenTelemetrySdk openTelemetry;

    private final Propagator propagator;

    public TraceFilter(OtelTracer tracer, OpenTelemetrySdk openTelemetrySdk, Propagator propagator) {
        this.tracer = tracer;
        this.openTelemetry = openTelemetrySdk;
        this.propagator = propagator;
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        Span span = getServerSpan((HttpServletRequest) servletRequest);
        try (Tracer.SpanInScope ignored = tracer.withSpan(span)) {
            filterChain.doFilter(servletRequest, servletResponse);
        } finally {
            span.end();
        }
    }

    private Span getServerSpan(HttpServletRequest httpServletRequest) {
        Span.Builder builder = propagator.extract(httpServletRequest, (carrier, key) -> httpServletRequest.getHeader(key));
        return builder.name(httpServletRequest.getRequestURI()).kind(Span.Kind.SERVER).tag(String.valueOf(SemanticAttributes.HTTP_METHOD), httpServletRequest.getMethod()).start();
    }
}
