import { defineAppConfig, history } from 'ice';
import { defineRequestConfig } from '@ice/plugin-request/esm/types';
import { message } from 'antd';

// App config, see https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig(() => ({
  // Set your configs here.
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'hash',
  },
}));

export const requestConfig = defineRequestConfig({
  baseURL: 'http://localhost:8081',
  interceptors: {
    request: {
      onConfig: (config) => {
        // 发送请求前：可以对 RequestConfig 做一些统一处理
        const token = localStorage.getItem('token') || '';
        if (token) {
          config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
        }
        return config;
      },
      onError: (error) => {
        return Promise.reject(error);
      },
    },
    response: {
      onConfig: (response) => {
        if (!response.data.success) {
          message.warning(response.data.message);
          return Promise.reject(response.data.message);
        }
        return { ...response, data: response.data.result };
      },
      onError: (error) => {
        if (error.response?.data.message) {
          console.error(error.response);
          message.error(error.response.data.message);
        }
        if (error.response?.status === 401) {
          history?.push('/login');
        }
        // 请求出错：服务端返回错误状态码
        return Promise.reject(error);
      },
    },
  },
});