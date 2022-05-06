package cn.qing.server.cache;

public class IdentificationCache {

    private static String gatewayId;

    public static String getGatewayId() {
        return gatewayId;
    }

    public static void setGatewayId(String gatewayId) {
        IdentificationCache.gatewayId = gatewayId;
    }
}
