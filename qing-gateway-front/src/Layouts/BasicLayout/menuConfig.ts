import { SmileOutlined ,LineChartOutlined,SettingOutlined,FileSearchOutlined,ControlOutlined,GatewayOutlined,GroupOutlined,InteractionOutlined,WifiOutlined} from '@ant-design/icons';

const asideMenuConfig = [
  {
    name: '主页',
    path: '/',
    icon: SmileOutlined,
  },
  {
    name: '监控',
    path: '/monitor',
    icon: LineChartOutlined,
  },
  {
    name: '路由配置',
    icon: WifiOutlined,
    path: '/route',
  },
  {
    name: '网关节点',
    path: '/gatewayNode',
    icon: GatewayOutlined,
  },
  {
    name: '服务实例',
    path: '/serviceAndInstance',
    icon: GroupOutlined,
  },
  {
    name: '限流规则',
    path: '/limit',
    icon: InteractionOutlined,
  },
  {
    name: '负载均衡',
    path: '/loadBalance',
    icon: ControlOutlined,
  },
  {
    name: '调用行为日志',
    path: '/logPage',
    icon: FileSearchOutlined,
  },
  {
    name: '系统初始化',
    path: '/config',
    icon: SettingOutlined,
  }
];

export { asideMenuConfig };
