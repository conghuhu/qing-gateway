import { createElement, Dispatch, SetStateAction, useEffect, useState } from 'react';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import { useRequest } from 'ice';
import { Link } from 'ice';
import { asideMenuConfig } from './menuConfig';
import { queryInitStatus, init } from '@/api/GlobalService'
import { Modal, Button, Form, Input, Select, InputNumber } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const loopMenuItem = (menus) =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: createElement(icon),
    children: children && loopMenuItem(children),
  }));
const InitForm = ({
  setIsModalVisible
}:
  {
    setIsModalVisible: Dispatch<SetStateAction<boolean>>
  }) => {
  const [form] = Form.useForm()
  const { loading, request: initSend } = useRequest(init)
  return (
    <Modal title="系统初始化"
      visible={true}
      onOk={async () => {
        form.validateFields().then(async (values) => {
          const data = {
            nacosServerAddr: values.IP + ":" + values.PORT,
            websocketUriList: values.websocketUriList.map(item => "ws://" + item)
          }
          await initSend(data)
          setIsModalVisible(false)
        });
      }}
      onCancel={() => setIsModalVisible(false)}
      closable={false}
      keyboard={false}
      maskClosable={false}
    >
      <Form layout="vertical" labelAlign="right" form={form}>
        <Form.Item label="输入nacos地址" name="IP"
          rules={[{ required: true, message: '请输入有效IP!', pattern: /^(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|[0-9])\.((1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.){2}(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)$/ }]}>
          <Input addonBefore="IP:"></Input>
        </Form.Item>
        <Form.Item name="PORT" rules={[{ required: true, message: '请输入PORT!' }]}>
          <InputNumber addonBefore="PORT:" min={0} max={65535} style={{ width: "100%" }}></InputNumber>
        </Form.Item>
        <Form.List
          name="websocketUriList"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 1) {
                  return Promise.reject(new Error('至少 1 个 ws'));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  label={index === 0 ? '输入ws地址' : ''}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "输入ws地址",
                      },
                    ]}
                    noStyle
                  >
                    <Input placeholder="地址" style={{ width: '95%' }} addonBefore="ws://" />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      style={{ "marginLeft": "0.5rem" }}
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: '100%' }}
                  icon={<PlusOutlined />}
                >
                  添加ws地址，至少一项
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </Modal>
  )
}

export default function BasicLayout({ children, location }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { request: getStatus } = useRequest(queryInitStatus, {
    onSuccess: (data) => {
      console.log(data);
      setIsModalVisible(!data.status)
    },
  })
  const token = localStorage.getItem("token")
  useEffect(() => {
    (async () => {
      await getStatus()
    })()
  }, [])
  return token && (
    <ProLayout
      title="Qing 网关"
      style={{
        minHeight: '100vh',
      }}
      location={{
        pathname: location.pathname,
      }}
      menuDataRender={() => loopMenuItem(asideMenuConfig)}
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
              key: 'icejs',
              title: 'icejs',
              href: 'https://github.com/ice-lab/icejs',
            },
            {
              key: 'antd',
              title: 'antd',
              href: 'https://github.com/ant-design/ant-design',
            },
          ]}
          copyright="by icejs & antd"
        />
      )}
    >
      {isModalVisible && <InitForm setIsModalVisible={setIsModalVisible}></InitForm>}
      <div style={{ minHeight: '60vh' }}>{children}</div>
    </ProLayout>
  );
}
