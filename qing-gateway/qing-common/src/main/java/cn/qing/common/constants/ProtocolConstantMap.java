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
package cn.qing.common.constants;

import java.util.HashSet;
import java.util.Set;

/**
 * @author conghuhu
 * @create 2022-04-12 18:49
 */
public class ProtocolConstantMap {
    public static final Set<String> PROTOCOL_SET = new HashSet<String>(16) {
        {
            add("http");
            add("https");
            add("ftp");
            add("ftps");
            add("file");
            add("ws");
            add("wss");
            add("rpc");
        }
    };
}
