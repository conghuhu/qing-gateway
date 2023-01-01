import { Form, Input, InputNumber, Select, Modal, message } from 'antd';
import { useRequest } from 'ice';
import { getServiceList, addRouteList } from '@/services/GlobalService';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { RouteList } from '@/api/GlobalInterface';
const AddRouteForm = ({
  setVisible,
  refresh
}: {
  setVisible: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<RouteList[]>;
}) => {
  const { data, request: getList } = useRequest(getServiceList, {
    onSuccess: (data) => {
      console.log(data[0]);
    },
  });
  const { request: addRoute, loading } = useRequest(addRouteList, {
    manual: true,
    onSuccess: (data) => {
      message.success('添加成功');
    },
  });
  const [form] = Form.useForm();
  useEffect(() => {
    (async function () {
      await getList();
    })();
  }, []);
  function onChange(value) {
    console.log('changed', value);
  }
  const handleOk = () => {
    form
      .validateFields()
      .then(async (values) => {
        let message = await addRoute(values);
        await refresh();
        setVisible(false);
        form.resetFields();
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  }
  return (
    <Modal
      title="添加路由"
      open
      okText="确认添加"
      cancelText="取消"
      onCancel={() => setVisible(false)}
      onOk={() => handleOk()}
      confirmLoading={loading}
    >
      <Form layout="vertical" labelAlign="right" form={form}>
        <Form.Item label="选择服务名称" name="serviceName" rules={[{ required: true, message: '请选择服务名称' }]}>
          <Select>
            {data?.map((item) => (
              <Select.Option key={item.id} value={item.serviceName}>
                {item.serviceName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="输入服务优先级大小" name="priority" rules={[{ required: true, message: '请输入数字!' }]}>
          <InputNumber
            placeholder="请输入0-100中的一个数字"
            min={0}
            max={100}
            onChange={onChange}
            style={{ width: '100%' }}
          ></InputNumber>
        </Form.Item>
        <Form.Item label="输入路由断言" name="predicates" rules={[{ required: true, message: '请输入路由断言！' }]}>
          <Input placeholder=""></Input>
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default AddRouteForm
