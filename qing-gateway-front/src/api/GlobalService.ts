import { request } from 'ice';
import {
  WebsocketInfoItem,
  RouteList,
  ServiceItem,
  AddRouteList,
  RouteRuleItem,
  GatewayNodeItem,
  PageParam,
  LogItem,
  LimitRule,
  updateIn,
  MonitorInfo,
  Infoconfig,
  setData
} from '@/api/GlobalInterface';

export function login(value): Promise<string> {
  return request.post('/auth/login', value);
}

/**
 * 获取负载均衡策略
 * @returns
 */
export function getLoadBalance(): Promise<Array<String>> {
  return request.get('/sys/getLoadBalance');
}

/**
 * 获取websocket信息
 * @returns
 */
export function getWebsocketInfo(): Promise<WebsocketInfoItem[]> {
  return request.get('/websocket-info/getWebsocketInfo');
}
/**
 * 获取路由规则
 * @returns
 */
export function getRuleList(): Promise<RouteList[]> {
  return request.get('/routeRule/getRouteRuleList');
}
/**
 * 删除路由规则
 * @returns
 */
export function deleteRuleList(id) {
  return request.delete(`/routeRule/deleteRouteRule?id=${id}`);
}
/**
 * 获取服务列表
 * @returns
 */
export function getServiceList(): Promise<ServiceItem[]> {
  return request.get(`/nacosInfo/getServiceList`);
}

/**
 * 获取某个服务下的所有实例
 * @param serviceId
 * @returns
 */
export function getServiceInstanceList(serviceId: number): Promise<any> {
  return request.get(`/nacosInfo/getServiceInstanceList?serviceId=${serviceId}`);
}
/**
 * 添加路由
 * @returns
 */
export function addRouteList(value: AddRouteList) {
  return request.post(`/routeRule/addRouteRule`, value);
}

/**
 * 更新路由
 * @param value
 * @returns
 */
export function updateRouteList(value: RouteRuleItem) {
  return request.put(`/routeRule/updateRouteRule`, value);
}

/**
 * 获取网关websocketList
 * @returns
 */
export function getGatewayNodeList(): Promise<GatewayNodeItem[]> {
  return request.get('/websocket-info/getWebsocketInfo');
}

/**
 * 移除网关节点（慎用）
 * @param id
 * @returns
 */
export function deleteGatewayNode(id) {
  return request.delete(`/websocket-info/removeGateWayNode/${id}`);
}

/**
 * 新增网关节点
 * @param value
 * @returns
 */
export function addNewGatewayNode(value: any) {
  return request.post(`/websocket-info/addGateWayNode`, value);
}

/**
 * 获取调用行为日志
 * @param param
 * @returns
 */
export function getLogs(param: PageParam): Promise<{
  current: number;
  pageSize: number;
  total: number;
  data: LogItem[];
}> {
  return request.post('/sys/getInvokeLogs', param);
}
/**
 * 获取限流规则列表
 * @param param
 * @returns
 */
export function getLimitRuleList(): Promise<LimitRule[]> {
  return request.get('/limitRule/getLimitRuleList')
}
/**
 * 删除限流规则
 * @param param
 * @returns
 */
export function deleteLimitRuleList(id: number) {
  return request.delete(`/limitRule/deleteLimitRule?id=${id}`)
}
/**
 * 添加限流规则
 * @param param
 * @returns
 */
export function addLimitRuleList(value: any) {
  return request.post(`/limitRule/addLimitRule`, value)
}
/**
 * 更改限流规则
 * @param param
 * @returns
 */
export function updateLimitRuleList(value: any) {
  return request.put(`/limitRule/updateLimitRule`, value)
}
/**
 * 获取当前选择策略
 * @param param
 * @returns
 */
export function getCurrentLoadBalance() {
  return request.get(`/sys/getCurrentLoadBalance`)
}
/**
 * 改变当前选择策略
 * @param param
 * @returns
 */
export function changeLoadBalance(value: string) {
  return request.put(`/sys/changeLoadBalance?loadBalance=${value}`)
}
/**
 * 查询系统是否初始化过
 * @param param
 * @returns
 */
export function queryInitStatus() {
  return request.get(`/sys/queryInitStatus`)
}
/**
 * 系统初始化过
 * @param param
 * @returns
 */
export function init(value) {
  return request.post(`/sys/init`, value)
}
/**
 * 编辑实例
 * @param param
 * @returns
 */
export function updateInstance(value: updateIn) {
  return request.put(`/nacosInfo/updateInstance`, value)
}
/**
 * 监控信息
 * @param param
 * @returns
 */
export function getMonitorInfo(): Promise<MonitorInfo[]> {
  return request.get(`/monitor/getMonitorInfo`)
}

/**
 * 获取系统初始化信息
 * @param param
 * @returns
 */
export function getCurrentConfig(): Promise<Infoconfig[]> {
  return request.get(`/sys/getCurrentConfig`)
}
/**
 * 重置系统初始化信息
 * @param param
 * @returns
 */
export function reset(value: setData) {
  return request.post(`/sys/reset`, value)
}


