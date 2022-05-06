import { Table, Popconfirm, Space, Button, Select, Input, Tag, message, Modal, Form, InputNumber } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useRequest } from 'ice';
const { Search } = Input;
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { LimitRule } from '@/api/GlobalInterface';
import { deleteLimitRuleList, addLimitRuleList, getLimitRuleList, updateLimitRuleList } from '@/api/GlobalService';
import styles from './index.module.css'


const AddRouterForm = ({
  setVisible,
  refreshData,
}: {
  setVisible: Dispatch<SetStateAction<boolean>>;
  refreshData: () => Promise<LimitRule[]>;
}) => {
  const [select, setSelect] = useState("ip")
  const [timetype, setTimeType] = useState("秒")
  const [form] = Form.useForm();
  const { loading, request: add } = useRequest(addLimitRuleList);
  const data = [{
    id: 1,
    type: "ip"
  }, {
    id: 2,
    type: "interface"
  }]
  const time = [{
    id: 1,
    timeunit: "second"
  }, {
    id: 2,
    timeunit: "minute"
  }]
  return (
    <Modal
      title="添加限流规则"
      visible={true}
      okText="确认添加"
      cancelText="取消"
      onCancel={() => setVisible(false)}
      onOk={async () => {
        form.validateFields().then(async (values) => {
          console.log(values)
          await add(values);
          await refreshData();
          setVisible(false);
        });
      }}
      confirmLoading={loading}
    >
      <Form layout="vertical" labelAlign="right" form={form}>
        <Form.Item
          label="类型选择"
          name="type"
          rules={[{ required: true, message: '请选择类型' }]}
          initialValue={select}>
          <Select
            onSelect={(select) => {
              setSelect(select)
            }}>
            {
              data.map(item => (
                <Select.Option key={item.id} value={item.type}></Select.Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item label={select === "ip" ? "限制ip" : "限制接口"} name="limitKey" rules={[{ required: true, message: '请输入key' }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="限流时间级" name="timeunit" rules={[{ required: true, message: '请选择单位' }]}>
          <Select
            onSelect={(select) => {
              console.log(select)
              setTimeType(select)
            }}>
            {
              time.map(item => (
                <Select.Option key={item.id} value={item.timeunit}>{item.timeunit === "second" ? "秒" : "分"}</Select.Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item label={timetype === "second" ? "qps" : "qpm"} name={timetype === "second" ? "qps" : "qpm"} rules={[{ required: true, message: '请输入限制量！' }]}>
          <InputNumber
            style={{ width: '100%' }}
          ></InputNumber>
        </Form.Item>
      </Form>
    </Modal>
  )
}
const EditRouteForm = ({
  currentRecord,
  setEditVisible,
  refresh,
}: {
  currentRecord: LimitRule;
  setEditVisible: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<LimitRule[]>;
}) => {
  const data = [{
    id: 1,
    type: "ip"
  }, {
    id: 2,
    type: "interface"
  }]
  const time = [{
    id: 1,
    timeunit: "second"
  }, {
    id: 2,
    timeunit: "minute"
  }]
  const [select, setSelect] = useState("")
  const { loading, request: update } = useRequest(updateLimitRuleList);
  // 函数式组件from推荐如下定义，而不用useRef<FormInstance>(null)
  // 尽量将各个表单都放在子组件处理，不应该把提交逻辑放在父组件中，有空把AddRouteForm按照这个组件改造一下
  const [form] = Form.useForm<LimitRule>();
  useEffect(() => {
    // 将form赋值
    form.setFieldsValue({
      ...currentRecord,
    });
  }, []);
  return (
    <Modal
      title="更改限流规则"
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
        <Form.Item label="选择限流类型" name="type" rules={[{ required: true, message: '请选择限流类型' }]}>
          <Select>
            {data.map((item) => (
              <Select.Option key={item.id} value={item.type}>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="key" name="limitKey" rules={[{ required: true, message: '请输入key' }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="限流时间级" name="timeunit" rules={[{ required: true, message: '请选择限流时间级' }]}>
          <Select onSelect={(e) => { setSelect(e) }}>
            {time.map((item) => (
              <Select.Option key={item.id} value={item.timeunit}>
                {item.timeunit === "second" ? "秒" : "分"}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label={select === "second" ? "qps" : "qpm"} name={select === "second" ? "qps" : "qpm"} rules={[{ required: true, message: '请选择限流时间级' }]}>
          <InputNumber></InputNumber>
        </Form.Item>
      </Form>
    </Modal>
  );
}
export default function Limit() {
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  // 当前点击的行的值
  const [currentRecord, setCurrentRecord] = useState<LimitRule>();
  const onSearch = (value) => console.log(value);
  const {
    data,
    error,
    loading,
    request: getList,
  } = useRequest(getLimitRuleList, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
  useEffect(() => {
    (async function () {
      await getList();
    })();
  }, []);

  const { request: deleteRoute } = useRequest(deleteLimitRuleList, {
    manual: true,
    onSuccess: (data) => {
      message.success('删除成功');
    },
  });
  const confirm = async (item) => {
    await deleteRoute(item.id);
    await getList();
  };
  const columns = [
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      align: 'center',
      render: (type) => <a>{type}</a>
    },
    {
      title: 'key',
      key: 'limitKey',
      align: 'center',
      dataIndex: 'limitKey',
      render: (key) => <Tag>{key}</Tag>
    },
    {
      title: '限流时间级',
      key: 'time',
      dataIndex: "timeunit",
      align: 'center',
      render: (timeunit) => (timeunit === 'second' ? <Tag color="blue">秒</Tag> : <Tag color="green">分</Tag>),
    },
    {
      title: '最大请求数量',
      dataIndex: 'qpm',
      key: 'enabled',
      align: 'center',
      render: (qpm, all, index) => (qpm === (0 || null) ? all.qps : qpm),
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render: (text, record: LimitRule) => (
        <Space size="middle">
          <a
            onClick={() => {
              setCurrentRecord(record);
              setEditVisible(true);
            }}
          >
            编辑
          </a>
          <Popconfirm title="你确定要删除吗？" okText="确定" cancelText="取消" onConfirm={() => confirm(text)}>
            <Button type="link" danger>删除</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const showModal = () => {
    setVisible(true);
  };
  return (
    <div>
      {error ? (
        <div>request error: {error.message}</div>
      ) : (
        <div>
          <div className={styles.headContainer}>
            <Search placeholder="请输入服务名或路由断言" onSearch={onSearch} style={{ width: 200 }} />
            <Button type="primary" icon={<PlusCircleOutlined />} onClick={showModal} className={styles.button}>
              新增规则
            </Button>
          </div>
          {/* 添加规则模态框 */}
          {visible && <AddRouterForm setVisible={setVisible} refreshData={getList} ></AddRouterForm>}
          <Table columns={columns} dataSource={data} loading={loading} rowKey={(item) => item.id} />
          {/* 修改规则模态框 */}
          {editVisible && currentRecord && (
            <EditRouteForm
              currentRecord={currentRecord}
              setEditVisible={setEditVisible}
              refresh={getList}
            ></EditRouteForm>
          )}
        </div>
      )}
    </div>
  );
}
