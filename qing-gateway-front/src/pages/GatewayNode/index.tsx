import { getGatewayNodeList } from '@/services/GlobalService';
import { Input, Table } from 'antd';
import { useRequest } from 'ice';
import { useEffect } from 'react';
import styles from './index.module.css';

const { Search } = Input;

export default function GatewayNode() {
  const { data, loading, request: getList } = useRequest(getGatewayNodeList);
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
    // {
    //   title: '操作',
    //   key: 'action',
    //   align: 'center',
    //   render: (text: GatewayNodeItem, record: GatewayNodeItem) => (
    //     <Space size="middle">
    //       <Popconfirm
    //         title="你确定要删除吗？"
    //         okText="确定"
    //         cancelText="取消"
    //         onConfirm={async () => {
    //           await deleteGatewayNode(record.id);
    //           await getList();
    //         }}
    //       >
    //         <a href="#">删除</a>
    //       </Popconfirm>
    //     </Space>
    //   ),
    // },
  ];
  return (
    <div>
      <div className={styles.headContainer}>
        <Search placeholder="请输入主机IP" onSearch={() => { }} style={{ width: 200 }} />
      </div>
      <Table columns={columns} dataSource={data} loading={loading} rowKey={(item) => item.id} />
    </div>
  );
}
