package cn.qing.common.constants;


public final class PublicConstant {

    private static final String AK = "bYm9BydW7zrgrdhKD4uMTZLHX2IaujHx";

    /**
     * 获取百度IP查询url
     *
     * @param ip
     * @return
     */
    public static String getBaiDuIpUrl(String ip) {
        return "https://api.map.baidu.com/location/ip?ak=" + AK + "&ip=" + ip + "&coor=bd09ll";
    }
}
