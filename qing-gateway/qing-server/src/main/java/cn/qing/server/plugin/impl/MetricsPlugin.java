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
import cn.qing.common.utils.DateUtils;
import cn.qing.server.chain.QingPluginChain;
import cn.qing.server.plugin.base.AbstractQingPlugin;
import cn.qing.server.plugin.base.QingContext;
import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;
import java.util.concurrent.TimeUnit;

/**
 * @author conghuhu
 * @create 2023/1/1 14:44
 */
@Slf4j
public class MetricsPlugin extends AbstractQingPlugin {

    private final Counter requestTotalCounter;

    private final Counter requestTypeTotalCounter;

    private final Counter requestThrowTotalCounter;

    private final Timer executeLatencyTimer;

    public MetricsPlugin(MeterRegistry meterRegistry) {
        this.requestTotalCounter = meterRegistry.counter(LabelNames.REQUEST_TOTAL, "desc", "qing gateway total request");
        this.requestTypeTotalCounter = meterRegistry.counter(LabelNames.REQUEST_TYPE_TOTAL, "desc", "qing gateway total request type");
        this.requestThrowTotalCounter = meterRegistry.counter(LabelNames.REQUEST_THROW_TOTAL, "desc", "qing gateway total request throw");
        this.executeLatencyTimer = meterRegistry.timer(LabelNames.EXECUTE_LATENCY_NAME, "desc", "qing gateway execute latency time");
    }

    @Override
    public Mono<Void> execute(ServerWebExchange exchange, QingPluginChain chain) {
        requestTotalCounter.increment();
        QingContext ctx = exchange.getAttribute(CommonConstant.CONTEXT);
        assert ctx != null;
        LocalDateTime startDateTime = ctx.getStartDateTime();
        return chain.doChain(exchange).doOnSuccess(e -> responseCommitted(exchange, startDateTime))
                .doOnError(throwable -> {
                    requestThrowTotalCounter.increment();
                    responseCommitted(exchange, startDateTime);
                });
    }

    @Override
    public String getName() {
        return QingPluginEnum.METRICS.getName();
    }

    @Override
    public int getOrder() {
        return QingPluginEnum.METRICS.getOrder();
    }

    @Override
    public boolean skip(ServerWebExchange exchange) {
        return super.skip(exchange);
    }

    private void responseCommitted(final ServerWebExchange exchange, final LocalDateTime startDateTime) {
        ServerHttpResponse response = exchange.getResponse();
        if (response.isCommitted()) {
            recordTime(startDateTime);
        } else {
            response.beforeCommit(() -> {
                recordTime(startDateTime);
                return Mono.empty();
            });
        }
    }

    private void recordTime(final LocalDateTime startDateTime) {
        long millisBetween = DateUtils.acquireMillisBetween(startDateTime, LocalDateTime.now());
        executeLatencyTimer.record(millisBetween, TimeUnit.MILLISECONDS);
    }

    static class LabelNames {
        /**
         * The constant REQUEST_TOTAL.
         */
        public static final String REQUEST_TOTAL = "qing_request_total";

        /**
         * The constant REQUEST_TYPE_TOTAL.
         */
        public static final String REQUEST_TYPE_TOTAL = "qing_request_type_total";

        /**
         * The constant REQUEST_THROW_TOTAL.
         */
        public static final String REQUEST_THROW_TOTAL = "qing_request_throw_total";

        /**
         * The constant EXECUTE_LATENCY_NAME.
         */
        public static final String EXECUTE_LATENCY_NAME = "qing_execute_latency_millis";
    }
}
