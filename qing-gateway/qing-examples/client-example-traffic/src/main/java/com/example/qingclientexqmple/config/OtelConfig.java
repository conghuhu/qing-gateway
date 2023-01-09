package com.example.qingclientexqmple.config;

import io.micrometer.observation.ObservationRegistry;
import io.micrometer.tracing.otel.bridge.OtelBaggageManager;
import io.micrometer.tracing.otel.bridge.OtelCurrentTraceContext;
import io.micrometer.tracing.otel.bridge.OtelPropagator;
import io.micrometer.tracing.otel.bridge.OtelTracer;
import io.micrometer.tracing.otel.bridge.Slf4JBaggageEventListener;
import io.micrometer.tracing.otel.bridge.Slf4JEventListener;
import io.micrometer.tracing.propagation.Propagator;
import io.opentelemetry.api.common.Attributes;
import io.opentelemetry.context.propagation.ContextPropagators;
import io.opentelemetry.exporter.zipkin.ZipkinSpanExporterBuilder;
import io.opentelemetry.extension.trace.propagation.B3Propagator;
import io.opentelemetry.sdk.OpenTelemetrySdk;
import io.opentelemetry.sdk.resources.Resource;
import io.opentelemetry.sdk.trace.SdkTracerProvider;
import io.opentelemetry.sdk.trace.export.BatchSpanProcessor;
import io.opentelemetry.sdk.trace.export.SpanExporter;
import io.opentelemetry.semconv.resource.attributes.ResourceAttributes;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import zipkin2.reporter.urlconnection.URLConnectionSender;

import java.util.Collections;

import static io.opentelemetry.sdk.trace.samplers.Sampler.alwaysOn;

/**
 * @author conghuhu
 * @create 2023/1/2 22:49
 */
@Configuration
public class OtelConfig {
    @Value("${spring.application.name}")
    private String applicationName;

    @Value("${qing.tracing.endpoint_url}")
    private String endpointUrl;

    private static final String ENDPOINT_V2_SPANS = "/api/v2/spans";

    @Bean
    ObservationRegistry observationRegistry() {
        return ObservationRegistry.create();
    }

    @Bean
    public OpenTelemetrySdk openTelemetrySdk() {
        SpanExporter spanExporter = new ZipkinSpanExporterBuilder()
                .setSender(URLConnectionSender.create(endpointUrl + ENDPOINT_V2_SPANS)).build();
        Resource serviceNameResource = Resource.create(Attributes.of(ResourceAttributes.SERVICE_NAME, applicationName));

        SdkTracerProvider sdkTracerProvider = SdkTracerProvider.builder()
                .setSampler(alwaysOn())
                .setResource(Resource.getDefault().merge(serviceNameResource))
                .addSpanProcessor(BatchSpanProcessor.builder(spanExporter).build()).build();

        return OpenTelemetrySdk.builder().setTracerProvider(sdkTracerProvider)
                .setPropagators(ContextPropagators.create(B3Propagator.injectingSingleHeader())).build();
    }

    @Bean
    public io.opentelemetry.api.trace.Tracer otelTracer(OpenTelemetrySdk openTelemetrySdk) {
        return openTelemetrySdk.getTracerProvider()
                .get("io.micrometer.micrometer-tracing");
    }

    @Bean("tracer")
    public OtelTracer tracer(io.opentelemetry.api.trace.Tracer otelTracer) {
        OtelCurrentTraceContext otelCurrentTraceContext = new OtelCurrentTraceContext();

        Slf4JEventListener slf4JEventListener = new Slf4JEventListener();

        Slf4JBaggageEventListener slf4JBaggageEventListener = new Slf4JBaggageEventListener(Collections.emptyList());

        return new OtelTracer(otelTracer, otelCurrentTraceContext, event -> {
            slf4JEventListener.onEvent(event);
            slf4JBaggageEventListener.onEvent(event);
        }, new OtelBaggageManager(otelCurrentTraceContext, Collections.emptyList(), Collections.emptyList()));
    }

    @Bean
    ContextPropagators contextPropagators() {
        return ContextPropagators.create(B3Propagator.injectingSingleHeader());
    }

    @Bean
    Propagator propagator(io.opentelemetry.api.trace.Tracer otelTracer) {
        return new OtelPropagator(contextPropagators(), otelTracer);
    }
}
