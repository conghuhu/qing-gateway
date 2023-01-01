import { useRequest } from 'ice';
import { useEffect } from 'react';
import { getCurrentConfig, reset } from '@/services/GlobalService';
import { Button, Form, Input, InputNumber, Popconfirm } from 'antd';
import { Infoconfig } from '@/api/GlobalInterface';


export default function Config() {
  const { loading, request: getConfig } = useRequest(getCurrentConfig, {
    onSuccess: (data: Infoconfig) => {
      const IP = data.nacosInfo.address.split(':')[0];
      const PORT = data.nacosInfo.address.split(':')[1];
      form.setFieldsValue({
        IP,
        PORT,
      });
    },
  });
  const { request: resetInfo } = useRequest(reset);
  const [form] = Form.useForm();
  useEffect(() => {
    getConfig();
  }, []);
  const confirm = async () => {
    form.validateFields().then(async (values) => {
      const data = {
        nacosServerAddr: `${values.IP}:${values.PORT}`,
        websocketUriList: values.websocketUriList.map((item) => `ws://${item}`),
      };
      await resetInfo(data);
      await getConfig();
    });
  };
  return (
    <div>
      <Form layout="vertical" labelAlign="right" form={form}>
        <Form.Item
          label="更改nacos地址"
          name="IP"
          rules={[{
            required: true,
            message: '请输入有效IP!',
            pattern: /^(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|[0-9])\.((1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.){2}(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)$/
          }]}
        >
          <Input addonBefore="IP:" style={{ width: '30%' }} />
        </Form.Item>
        <Form.Item name="PORT" rules={[{ required: true, message: '请输入PORT!' }]}>
          <InputNumber addonBefore="PORT:" min={0} max={65535} style={{ width: '30%' }} />
        </Form.Item>
      </Form>
      <Popconfirm
        title="你确定要更改吗"
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <a href="#">确认更改</a>
      </Popconfirm>
    </div>
  );
}
