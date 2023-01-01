import { Outlet, useLocation } from 'ice';
import { createElement, Dispatch, SetStateAction, useEffect, useState } from 'react';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import { useRequest, Link } from 'ice';
import logo from '@/assets/logo.png';

import { asideMenuConfig } from './menuConfig';
import { queryInitStatus, init } from '@/services/GlobalService';
import { Modal, Button, Form, Input, Select, InputNumber } from 'antd';

const InitForm = ({ setIsModalVisible }: { setIsModalVisible: Dispatch<SetStateAction<boolean>> }) => {
  const [form] = Form.useForm();
  const { loading, request: initSend } = useRequest(init);
  return (
    <Modal
      title="系统初始化"
      open
      onOk={async () => {
        form.validateFields().then(async (values) => {
          const data = {
            nacosServerAddr: `${values.IP}:${values.PORT}`,
          };
          await initSend(data);
          setIsModalVisible(false);
        });
      }}
      onCancel={() => setIsModalVisible(false)}
      closable={false}
      keyboard={false}
      maskClosable={false}
    >
      <Form layout="vertical" labelAlign="right" form={form}>
        <Form.Item
          label="输入nacos地址"
          name="IP"
          rules={[{
            required: true,
            message: '请输入有效IP!',
            pattern: /^(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|[0-9])\.((1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.){2}(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)$/
          }]}
        >
          <Input addonBefore="IP:" />
        </Form.Item>
        <Form.Item name="PORT" rules={[{ required: true, message: '请输入PORT!' }]}>
          <InputNumber addonBefore="PORT:" min={0} max={65535} style={{ width: '100%' }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

function Layout() {
  const location = useLocation();
  if (['/login'].includes(location.pathname)) {
    return (
      <Outlet />
    )
  }
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { request: getStatus } = useRequest(queryInitStatus, {
    onSuccess: (data) => {
      setIsModalVisible(!data.status);
    },
  });
  const token = localStorage.getItem('token');
  useEffect(() => {
    getStatus();
  }, []);
  return token && (
    <ProLayout
      title="Qing 网关"
      style={{
        minHeight: '100vh',
      }}
      location={{
        pathname: location.pathname,
      }}
      logo={<img src={logo} alt="logo" />}
      menuDataRender={() => asideMenuConfig}
      menuItemRender={(item, defaultDom) => {
        if (!item.path) {
          return defaultDom;
        }
        return <Link to={item.path}>{defaultDom}</Link>;
      }}
      footerRender={() => (
        <DefaultFooter
          links={[
            {
              key: 'qing-gateway',
              title: 'qing-gateway',
              href: 'https://github.com/conghuhu/qing-gateway',
            },
          ]}
          copyright="by conghuhu@sdu"
        />
      )}
    >
      {isModalVisible && <InitForm setIsModalVisible={setIsModalVisible} />}
      <div style={{ minHeight: '60vh' }}>
        <Outlet />
      </div>
    </ProLayout>
  );
}

export default Layout;
