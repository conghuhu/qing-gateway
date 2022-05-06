# qing-gateway

- 基于Webflux的网关服务，非阻塞IO

- 微服务注册中心选用nacos

- 基于责任链模式+插件化思想，网关处理逻辑抽象成插件链

- 支持http、https协议

- 支持自定义路由规则

- 支持跨域

  ![整体架构](D:\MainProject\Qing_Gateway\asset\整体架构.jpg)


## 后台模块介绍

- qing-server： 网关节点server
- qing-admin：网关admin管理台，可配置路由、限流、负载均衡规则、实时监控网关节点等
- qing-common：项目的公共包
- client-example-medical：微服务案例1
- client-example-traffic：微服务案例2



## 压测资源分配

| ip              |               |        |
| --------------- | ------------- | :----- |
| 124.222.60.243  | 网关1、nacos配置中心 | 少煜服务器  |
| 101.201.143.127 | admin、redis   | 阿里云服务器 |
| 124.222.224.173 | 网关2           | 栋的服务器  |
| 150.158.97.5    | mysql8        | 青训营服务器 |
| localhost       | nginx         |        |
| 101.42.243.67   | 网关3           | 帅的服务器  |



| 服务名     | 实例        | url                  |
| ------- | --------- | -------------------- |
| traffic | example1  | 124.222.224.173:8900 |
| traffic | example12 | 124.222.224.173:8901 |
| medical | example2  | 124.222.224.173:8500 |
| traffic | example13 | 101.42.243.67:8900   |
|         |           |                      |



| 网关节点                 |      |      |
| -------------------- | ---- | ---- |
| 124.222.60.243:8080  |      |      |
| 124.222.224.173:8080 |      |      |
| 101.42.243.67:8080   |      |      |

netstat -n | awk '/^tcp/ {++state[$NF]} END {for(key in state) print key,"\t",state[key]}'