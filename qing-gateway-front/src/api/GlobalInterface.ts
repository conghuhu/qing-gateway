export interface WebsocketInfoItem {
  beanName: string;
  createdTime: string;
  enabled: boolean;
  id: number;
  ip: string;
  uri: string;
}
export interface RouteList {
  createdTime: string;
  enabled: boolean;
  id: number;
  predicates: string;
  priority: number;
  service: serviceList;
}
export interface RouteRuleItem {
  createdTime: string;
  enabled: boolean;
  id: number;
  predicates: string;
  priority: number;
  serviceName: string;
}

interface serviceList {
  contextPath?: string;
  createdTime: string;
  description?: string;
  enabled?: boolean;
  id?: number;
  serviceName: string;
}
export interface ServiceItem {
  contextPath: string;
  createdTime: string;
  description: string;
  enabled: boolean;
  id: number;
  serviceInstanceList: ServiceInstanceItem[];
  serviceName: string;
}
export interface ServiceInstanceItem {
  clustername: string;
  createdTime: string;
  id: number;
  ip: string;
  port: string;
  protocol: string;
  serviceId: number;
  version: string;
  weight: number;
}
export interface AddRouteList {
  predicates: string;
  priority: number;
  serviceName: string;
}

export interface GatewayNodeItem {
  beanName: string;
  createdTime: string;
  enabled: boolean;
  id: number;
  ip: string;
  uri: string;
  status: boolean;
}
/**
 * 分页参数，统一使用
 */
export interface PageParam {
  pageNum: number;
  pageSize: number;
  content: string;
}

export interface LogItem {
  createdTime: string;
  id: number;
  originIP: string;
  originuri: string;
  proxyuri: string;
  routeName: string;
  serviceInstance: string;
  targetService: string;
}

export interface LimitRule {
  id: number;
  limitKey: string;
  qpm: number;
  qps: number;
  timeunit: string;
  type: string;
}
export interface updateIn {
  clusterName: string;
  ip: string;
  port: number;
  protocol: string;
  serviceName: string;
  version: string;
  weight: number
}
export interface Instance {
  clustername: string;
  createdTime: string;
  id: number;
  ip: string;
  port: string;
  protocol: string;
  serviceId: number;
  version: string;
  weight: number
}
export interface MonitorInfo {
  gatewayId: string;
  qpsDTOList: cpu[];
  memInfoList: mem[];
  jvmInfoList: jvmInfo[];
}
export interface cpu {
  collectTime: number;
  qps: number;
}
export interface mem {
  totalMem: number;
  usedMem: number;
  freeMem: number;
  usedRate: number;
  collectTime: number;
}
export interface jvmInfo {
  jvmTotalMemoryByte: number;
  jvmFreeMemoryByte: number;
  jvmMaxMemoryByte: number;
  jdkVersion: number;
  jvmMemoryUsedRate: number;
  collectTime: number;
}
export interface Infoconfig {
  nacosInfo: nacosInfo;
  websocketInfoList: ws[];
  timestamp: number;
}
export interface nacosInfo {
  id: number;
  address: string;
  description: null | string;
  enabled: boolean;
  createdTime: string;
}
export interface ws {
  id: number;
  uri: string;
  beanName: string;
  enabled: boolean;
  createdTime: string;
  ip: string;
  status: null | string;
}
export interface setData {
  nacosServerAddr:string;
  websocketUriList:any
}