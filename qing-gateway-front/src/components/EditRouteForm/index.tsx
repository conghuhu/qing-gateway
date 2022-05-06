import { Form, Input, InputNumber, message, Modal, Select, Switch } from 'antd';
import { useRequest } from 'ice';
import { getServiceList, updateRouteList } from '@/api/GlobalService';
import { SetStateAction, useEffect, Dispatch } from 'react';
import { RouteList, RouteRuleItem } from '@/api/GlobalInterface';

// 将更改父组件的state函数引入，以及修改后刷新父组件数据的函数refresh
const EditRouteForm = ({
  currentRecord,
  setEditVisible,
  refresh,
}: {
  currentRecord: RouteList;
  setEditVisible: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<RouteList[]>;
}) => {
  const { data: serviceList, request: getList } = useRequest(getServiceList);
  const { loading, request: update } = useRequest(updateRouteList);
  // 函数式组件from推荐如下定义，而不用useRef<FormInstance>(null)
  // 尽量将各个表单都放在子组件处理，不应该把提交逻辑放在父组件中，有空把AddRouteForm按照这个组件改造一下
  const [form] = Form.useForm<RouteRuleItem>();
  useEffect(() => {
    // 将form赋值
    form.setFieldsValue({
      ...currentRecord,
      serviceName: currentRecord.service.serviceName,
    });
    (async function () {
      await getList();
    })();
  }, []);
  return (
    <Modal
      title="更改路由"
      visible={true}
      okText="更改"
      cancelText="取消"
      onCancel={() => setEditVisible(false)}
      confirmLoading={loading}
      onOk={async () => {
        await update({
          ...form.getFieldsValue(),
          id: currentRecord.id,
        });
        message.success('更新路由规则成功');
        await refresh();
        setEditVisible(false);
      }}
      mask={true}
    >
      <Form layout="vertical" labelAlign="right" form={form}>
        <Form.Item label="选择服务名称" name="serviceName" rules={[{ required: true, message: '请选择服务名称' }]}>
          <Select>
            {serviceList?.map((item) => (
              <Select.Option key={item.id} value={item.serviceName}>
                {item.serviceName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="输入服务优先级大小" name="priority" rules={[{ required: true, message: '请输入数字' }]}>
          <InputNumber
            placeholder="请输入0-100中的一个数字"
            min={0}
            max={100}
            style={{ width: '100%' }}
          ></InputNumber>
        </Form.Item>
        <Form.Item label="输入路由断言" name="predicates" rules={[{ required: true, message: '请输入路由断言' }]}>
          <Input placeholder=""></Input>
        </Form.Item>
        <Form.Item label="是否启用" name="enabled" valuePropName="checked">
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default EditRouteForm;
