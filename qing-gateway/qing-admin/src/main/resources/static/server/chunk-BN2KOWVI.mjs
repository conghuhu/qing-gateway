import {
  request_default
} from "./chunk-IQAM3D37.mjs";

// src/services/GlobalService.ts
function login(value) {
  return request_default.post("/auth/login", value);
}
function getLoadBalance() {
  return request_default.get("/sys/getLoadBalance");
}
function getRuleList() {
  return request_default.get("/routeRule/getRouteRuleList");
}
function deleteRuleList(id) {
  return request_default.delete(`/routeRule/deleteRouteRule?id=${id}`);
}
function getServiceList() {
  return request_default.get("/nacosInfo/getServiceList");
}
function getServiceInstanceList(serviceId) {
  return request_default.get(`/nacosInfo/getServiceInstanceList?serviceId=${serviceId}`);
}
function addRouteList(value) {
  return request_default.post("/routeRule/addRouteRule", value);
}
function updateRouteList(value) {
  return request_default.put("/routeRule/updateRouteRule", value);
}
function getGatewayNodeList() {
  return request_default.get("/websocket-info/getWebsocketInfo");
}
function getLogs(param) {
  return request_default.post("/sys/getInvokeLogs", param);
}
function getLimitRuleList() {
  return request_default.get("/limitRule/getLimitRuleList");
}
function deleteLimitRuleList(id) {
  return request_default.delete(`/limitRule/deleteLimitRule?id=${id}`);
}
function addLimitRuleList(value) {
  return request_default.post("/limitRule/addLimitRule", value);
}
function updateLimitRuleList(value) {
  return request_default.put("/limitRule/updateLimitRule", value);
}
function getCurrentLoadBalance() {
  return request_default.get("/sys/getCurrentLoadBalance");
}
function changeLoadBalance(value) {
  return request_default.put(`/sys/changeLoadBalance?loadBalance=${value}`);
}
async function queryInitStatus() {
  return await request_default.get("/sys/queryInitStatus");
}
function init(value) {
  return request_default.post("/sys/init", value);
}
function updateInstance(value) {
  return request_default.put("/nacosInfo/updateInstance", value);
}
async function getCurrentConfig() {
  return await request_default.get("/sys/getCurrentConfig");
}
function reset(value) {
  return request_default.post("/sys/reset", value);
}

export {
  login,
  getLoadBalance,
  getRuleList,
  deleteRuleList,
  getServiceList,
  getServiceInstanceList,
  addRouteList,
  updateRouteList,
  getGatewayNodeList,
  getLogs,
  getLimitRuleList,
  deleteLimitRuleList,
  addLimitRuleList,
  updateLimitRuleList,
  getCurrentLoadBalance,
  changeLoadBalance,
  queryInitStatus,
  init,
  updateInstance,
  getCurrentConfig,
  reset
};
