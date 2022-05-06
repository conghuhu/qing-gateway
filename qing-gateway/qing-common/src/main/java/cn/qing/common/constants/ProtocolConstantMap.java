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
