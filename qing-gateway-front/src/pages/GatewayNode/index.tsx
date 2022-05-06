import { GatewayNodeItem } from '@/api/GlobalInterface';
import { getGatewayNodeList, deleteGatewayNode, addNewGatewayNode } from '@/api/GlobalService';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Popconfirm, Space, Table } from 'antd';
import { useRequest } from 'ice';
import { useEffect, SetStateAction, Dispatch, useState } from 'react';
import styles from './index.module.css';

const { Search } = Input;

const AddFormModal = ({
  setVisible,
  refreshData,
}: {
  setVisible: Dispatch<SetStateAction<boolean>>;
  refreshData: () => Promise<GatewayNodeItem[]>;
}) => {
  const [form] = Form.useForm();
  const {loading, request: add } = useRequest(addNewGatewayNode);
  return (
    <Modal
      title="添加网关节点"
      visible={true}
      okText="确认添加"
      cancelText="取消"
      onCancel={() => setVisible(false)}
      onOk={async () => {
        form.validateFields().then(async (values) => {
          await add(values);
          await refreshData();
          setVisible(false);
        });
      }}
      confirmLoading={loading}
    >
      <Form layout="vertical" labelAlign="right" form={form}>
        <Form.Item label="websocket-uri" name="uri" rules={[{ required: true, message: '请输入ws地址' }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default function GatewayNode() {
  const { data, loading, request: getList } = useRequest(getGatewayNodeList);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    (async function () {
      await getList();
    })();
  }, []);
  const columns = [
    {
      title: '主机IP',
      dataIndex: 'ip',
      key: 'ip',
      align: 'center',
    },
    {
      title: 'websocket URI',
      dataIndex: 'uri',
      key: 'uri',
      align: 'center',
    },
    {
      title: '是否启用',
      dataIndex: 'enabled',
      key: 'enabled',
      align: 'center',
      render: (enabled: boolean) => (enabled ? <span>开</span> : <span>关</span>),
    },
    {
      title: '是否在线',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (status: boolean) => (status ? <span>是</span> : <span>否</span>),
    },
    {
      title: 'BeanName',
      dataIndex: 'beanName',
      key: 'beanName',
      align: 'center',
    },
    {
      title: '创建时间',
      dataIndex: 'createdTime',
      key: 'createdTime',
      align: 'center',
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render: (text: GatewayNodeItem, record: GatewayNodeItem) => (
        <Space size="middle">
          <Popconfirm
            title="你确定要删除吗？"
            okText="确定"
            cancelText="取消"
            onConfirm={async () => {
              await deleteGatewayNode(record.id);
              await getList();
            }}
          >
            <a href="#">删除</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className={styles.headContainer}>
        <Search placeholder="请输入主机IP" onSearch={() => {}} style={{ width: 200 }} />
        <Button className={styles.button} type="primary" icon={<PlusCircleOutlined />} onClick={() => {
          setVisible(true);
        }}>
          新增网关节点
        </Button>
      </div>
      {visible && <AddFormModal setVisible={setVisible} refreshData={getList} />}
      <Table columns={columns} dataSource={data} loading={loading} rowKey={(item) => item.id} />
    </div>
  );
}
