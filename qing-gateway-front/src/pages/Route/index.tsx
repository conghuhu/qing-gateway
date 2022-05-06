import { Table, Popconfirm, Space, Button, Tooltip, Input, Tag, message, Modal, Form } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import styles from './index.module.css';
import { useRequest } from 'ice';
const { Search } = Input;
import { useEffect, useState } from 'react';
import { RouteList } from '@/api/GlobalInterface';
import { getRuleList, deleteRuleList } from '@/api/GlobalService';
import AddRouterForm from '@/components/AddRouteForm';
import EditRouteForm from '@/components/EditRouteForm';

export default function Route() {
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  // 当前点击的行的值
  const [currentRecord, setCurrentRecord] = useState<RouteList>();
  const onSearch = (value) => console.log(value);
  const {
    data,
    error,
    loading,
    request: getList,
  } = useRequest(getRuleList, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
  useEffect(() => {
    (async function () {
      await getList();
    })();
  }, []);

  const { request: deleteRoute } = useRequest(deleteRuleList, {
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
      title: '服务名称',
      dataIndex: 'service',
      key: 'service',
      align: 'center',
      render: (service) => <a>{service.serviceName}</a>,
    },
    {
      title: '路由断言',
      key: 'predicates',
      align: 'center',
      dataIndex: 'predicates',
    },
    {
      title: '优先级',
      key: 'priority',
      dataIndex: 'priority',
      align: 'center',
      render: (priority) => <Tag color="green">{priority}</Tag>,
    },
    {
      title: '是否启用',
      dataIndex: 'enabled',
      key: 'enabled',
      align: 'center',
      render: (enabled) => (enabled ? <span>开</span> : <span>关</span>),
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
      render: (text, record: RouteList) => (
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
            <Button type="primary" className={styles.button} icon={<PlusCircleOutlined />} onClick={showModal}>
              新增规则
            </Button>
          </div>
          {/* 添加路由模态框 */}
          {visible && <AddRouterForm setVisible={setVisible} refresh={getList} ></AddRouterForm>}
          <Table columns={columns} dataSource={data} loading={loading} rowKey={(item) => item.id} />
          {/* 更改路由模态框 */}
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
