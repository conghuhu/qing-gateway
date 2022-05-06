import { IRouterConfig, lazy } from 'ice';
import Layout from '@/Layouts/BasicLayout';


const Home = lazy(() => import('@/pages/Home'));
const Route = lazy(() => import('@/pages/Route'));
const GatewayNode = lazy(() => import('@/pages/GatewayNode'));
const LoadBalance = lazy(() => import('@/pages/LoadBalance'));
const ServiceAndInstance = lazy(() => import('@/pages/ServiceAndInstance'));
const Limit = lazy(() => import('@/pages/Limit'));
const LogPage = lazy(() => import('@/pages/LogPage'));
const NotFound = lazy(() => import('@/components/NotFound'));
const Login = lazy(() => import('@/pages/Login'))
const Monitor = lazy(() => import('@/pages/Monitor'))
const Config = lazy(() => import('@/pages/Config'))

const routerConfig: IRouterConfig[] = [
  {
    path:'/Login',
    component:Login,
    exact:true
  },
  {
    path: '/',
    component: Layout,
    // exact: true,
    children: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/monitor',
        exact: true,
        component: Monitor,
      },
      {
        path: '/gatewayNode',
        exact: true,
        component: GatewayNode,
      },
      {
        path: '/loadBalance',
        exact: true,
        component: LoadBalance,
      },
      {
        path: '/serviceAndInstance',
        exact: true,
        component: ServiceAndInstance,
      },
      {
        path: '/route',
        component: Route,
        exact: true,
      },
      {
        path: '/limit',
        exact: true,
        component: Limit,
      },
      {
        path: '/logPage',
        exact: true,
        component: LogPage,
      },
      {
        path:'/config',
        exact:true,
        component:Config,
      },
      {
        component: NotFound,
      },
    ],
  },

];

export default routerConfig;
