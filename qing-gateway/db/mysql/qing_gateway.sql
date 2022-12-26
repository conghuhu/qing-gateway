-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: 150.158.97.5    Database: qing_gateway
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `q_limit_rule`
--

DROP TABLE IF EXISTS `q_limit_rule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `q_limit_rule` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `limitKey` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '限流key，ip或接口名',
  `type` varchar(64) NOT NULL COMMENT '限流规则类型，ip还是接口',
  `timeUnit` varchar(64) NOT NULL COMMENT '限流单位，秒或分钟',
  `QPS` int DEFAULT NULL,
  `QPM` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `q_log`
--

DROP TABLE IF EXISTS `q_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `q_log` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `originURI` varchar(100) NOT NULL,
  `target_service` varchar(100) DEFAULT NULL,
  `service_instance` varchar(100) DEFAULT NULL,
  `route_name` varchar(100) DEFAULT NULL,
  `proxyURI` varchar(100) DEFAULT NULL,
  `created_time` datetime NOT NULL,
  `originIP` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `q_nacos_info`
--

DROP TABLE IF EXISTS `q_nacos_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `q_nacos_info` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(64) NOT NULL DEFAULT '' COMMENT 'nacos地址',
  `description` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '' COMMENT '描述',
  `enabled` bit(1) NOT NULL COMMENT '是否开启，1开启0未开启',
  `created_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_address` (`address`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `q_plugin`
--

DROP TABLE IF EXISTS `q_plugin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `q_plugin` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '插件名称 eg:DynamicRoute,类的名称',
  `description` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '描述，如鉴权',
  `order` int NOT NULL DEFAULT '999999' COMMENT '顺序',
  `skip` bit(1) NOT NULL DEFAULT b'0' COMMENT '0为false，1为true',
  `created_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `q_route_rule`
--

DROP TABLE IF EXISTS `q_route_rule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `q_route_rule` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `service_id` bigint NOT NULL COMMENT '转发到的应用Id',
  `predicates` varchar(50) NOT NULL DEFAULT '' COMMENT '匹配key,路由断言',
  `priority` int NOT NULL DEFAULT '0' COMMENT '优先级，值越大优先级越高',
  `enabled` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否启用，1=开启0=禁用',
  `created_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `q_service`
--

DROP TABLE IF EXISTS `q_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `q_service` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `service_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '应用名称',
  `description` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '' COMMENT '描述',
  `context_path` varchar(32) NOT NULL DEFAULT '' COMMENT '路径上下文',
  `enabled` bit(1) NOT NULL COMMENT '是否开启，1开启0未开启',
  `created_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_servicename` (`service_name`) USING BTREE COMMENT '服务名应该是唯一的'
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `q_service_instance`
--

DROP TABLE IF EXISTS `q_service_instance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `q_service_instance` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `service_id` bigint NOT NULL COMMENT '应用id',
  `version` varchar(32) NOT NULL DEFAULT '' COMMENT '实例的版本号',
  `ip` varchar(64) NOT NULL DEFAULT '' COMMENT '实例ip',
  `port` varchar(16) NOT NULL DEFAULT '8080' COMMENT '实例port',
  `weight` int NOT NULL DEFAULT '0' COMMENT '权重',
  `clusterName` varchar(64) NOT NULL DEFAULT '' COMMENT '集群',
  `protocol` varchar(64) NOT NULL DEFAULT '' COMMENT '服务实例的协议',
  `created_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_ip_port` (`ip`,`port`) USING BTREE COMMENT 'ip+port唯一'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `q_user`
--

DROP TABLE IF EXISTS `q_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `q_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(256) NOT NULL,
  `created_time` datetime NOT NULL,
  `last_login_time` datetime NOT NULL,
  `salt` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `q_websocket_info`
--

DROP TABLE IF EXISTS `q_websocket_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `q_websocket_info` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `uri` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '网关所在websocket地址',
  `bean_name` varchar(200) NOT NULL DEFAULT '' COMMENT '在IOC中的bean名称',
  `enabled` bit(1) NOT NULL COMMENT '是否开启，1开启0未开启',
  `created_time` datetime NOT NULL COMMENT '创建时间',
  `ip` varchar(128) DEFAULT NULL COMMENT 'ip地址',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_uri` (`uri`) USING BTREE COMMENT 'uri是唯一的'
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping routines for database 'qing_gateway'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-26 14:15:50
