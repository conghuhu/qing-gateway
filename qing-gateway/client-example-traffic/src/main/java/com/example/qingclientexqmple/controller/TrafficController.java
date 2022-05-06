package com.example.qingclientexqmple.controller;

import com.example.qingclientexqmple.params.QueryParam;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author conghuhu
 * @create 2022-04-07 13:52
 */
@RestController
@RequestMapping("/traffic")
public class TrafficController {

    @GetMapping("/getTraffic")
    public ResponseEntity<?> getTraffic() {
        return ResponseEntity.ok("getTraffic success");
    }

    @PostMapping("/setTraffic")
    public ResponseEntity<?> setTraffic() {
        return ResponseEntity.ok("setTraffic success");
    }

    @PostMapping("/getTrafficByPage")
    public ResponseEntity<?> getTrafficByPage(@RequestBody QueryParam queryParam) {
        return ResponseEntity.ok("getTraffic success,current page is" + queryParam.getPageNum()
                + ",page size is" + queryParam.getPageSize()
                + ",content is" + queryParam.getContent()
        );
    }

}
