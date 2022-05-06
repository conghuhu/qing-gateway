package cn.qing.admin.sync;

import lombok.extern.slf4j.Slf4j;

/**
 * @author qing
 */
@Slf4j
public class RedisReceiver {

    public void receiveMessage(String message) {
        log.info("Received <" + message + ">");
    }

}
