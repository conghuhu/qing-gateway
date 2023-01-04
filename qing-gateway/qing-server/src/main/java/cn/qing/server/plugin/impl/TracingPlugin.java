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
package cn.qing.server.plugin.impl;

import cn.qing.common.constants.CommonConstant;
import cn.qing.common.enums.QingPluginEnum;
import cn.qing.server.chain.QingPluginChain;
import cn.qing.server.plugin.base.AbstractQingPlugin;
import cn.qing.server.utils.SpringContextUtil;
import io.micrometer.tracing.Span;
import io.micrometer.tracing.Tracer;
import io.micrometer.tracing.otel.bridge.OtelTracer;
import io.micrometer.tracing.propagation.Propagator;
import io.opentelemetry.semconv.trace.attributes.SemanticAttributes;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.Objects;

/**
 * @author conghuhu
 * @create 2023/1/2 22:05
 */
@Slf4j
public class TracingPlugin extends AbstractQingPlugin {
    @Override
    protected Mono<Void> doExecute(ServerWebExchange exchange, QingPluginChain chain) {
        final ServerHttpRequest request = exchange.getRequest();
        OtelTracer tracer = SpringContextUtil.getInstance().getBean("tracer", OtelTracer.class);
        Span span = tracer.nextSpan().name(request.getURI().getPath());
        if (log.isDebugEnabled()) {
            log.debug("span observe start, traceId:{} spanId:{}", span.context().traceId(), span.context().spanId());
        }

        try (Tracer.SpanInScope ignored = tracer.withSpan(span.start())) {
            exchange.getAttributes().put(CommonConstant.TRACE_ID, span.context().traceId());
            exchange.getResponse().getHeaders().add(CommonConstant.TRACE_ID, span.context().traceId());
            inject(exchange, tracer);
            span.tag("params", request.getQueryParams().toString());
            span.tag(SemanticAttributes.HTTP_METHOD.getKey(), Objects.requireNonNull(request.getMethod()).name());

            span.event("Proxy Start");

            return chain.doChain(exchange).doFinally(e -> {
                if (log.isDebugEnabled()) {
                    log.debug("span observe end, traceId:{} spanId:{}", span.context().traceId(), span.context().spanId());
                }
                span.event("Proxy End");
                span.end();
            });
        }
    }

    private void inject(ServerWebExchange exchange, OtelTracer tracer) {
        Propagator propagator = SpringContextUtil.getInstance().getBean("propagator", Propagator.class);
        HttpHeaders httpHeaders = new HttpHeaders();
        propagator.inject(tracer.currentTraceContext().context(), httpHeaders, (carrier, key, value) -> httpHeaders.add(key, value));
        ServerHttpRequest request = exchange.getRequest().mutate()
                .headers(headers -> headers.addAll(httpHeaders))
                .build();
        exchange.mutate().request(request).build();
    }

    @Override
    public String getName() {
        return QingPluginEnum.TRACING.getName();
    }

    @Override
    public int getOrder() {
        return QingPluginEnum.TRACING.getOrder();
    }

    @Override
    public boolean skip(ServerWebExchange exchange) {
        return super.skip(exchange);
    }
}
