import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getServiceList, getServiceInstanceList, updateInstance } from '@/services/GlobalService';
import { useRequest } from 'ice';
import { Button, Input, Modal, Space, Table, Typography, Popconfirm, Form, InputNumber } from 'antd';
import styles from './index.module.css';
import { ServiceInstanceItem, ServiceItem, updateIn } from '@/api/GlobalInterface';

const { Column } = Table;
const { Search } = Input;

const EditableCell = ({ editing, dataIndex, title, inputType, record, index, children, ...restProps }) => {
  const inputNode = inputType === 'number' ? <InputNumber min={0} max={100} /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const ServiceInstanceModal = ({
  serviceId,
  serviceName,
  setVisible,
}: {
  serviceId: number;
  serviceName: string;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data, loading, request: getServiceInstanceListRequest } = useRequest(getServiceInstanceList);
  const { request: update } = useRequest(updateInstance);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  useEffect(() => {
    (async function () {
      await getServiceInstanceListRequest(serviceId);
    })();
  }, []);
  const columns = [
    {
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip',
      align: 'center',
    },
    {
      title: '端口',
      dataIndex: 'port',
      key: 'port',
      align: 'center',
    },
    {
      title: '协议',
      dataIndex: 'protocol',
      key: 'protocal',
      align: 'center',
      editable: true,
    },
    {
      title: '版本号',
      dataIndex: 'version',
      key: 'version',
      align: 'center',
      editable: true,
    },
    {
      title: '集群名称',
      dataIndex: 'clustername',
      key: 'clustername',
      align: 'center',
      editable: true,
    },
    {
      title: '权重',
      dataIndex: 'weight',
      key: 'weight',
      align: 'center',
      editable: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createdTime',
      key: 'createdTime',
      align: 'center',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Typography.Link
              onClick={() => save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              保存
            </Typography.Link>
            <Popconfirm title="确定要取消编辑吗?" onConfirm={cancel}>
              <Button danger size="small" type="link">
                取消
              </Button>
            </Popconfirm>
          </div>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            <Button danger size="small" type="link">
              编辑
            </Button>
          </Typography.Link>
        );
      },
    },
  ];
  const cancel = () => {
    setEditingKey('');
  };
  const isEditing = (record) => {
    return record.id === editingKey;
  };
  const edit = (record) => {
    // console.log(record)
    form.setFieldsValue({
      ...record,
    });
    setEditingKey(record.id);
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.id);
      if (index > -1) {
        const item = newData[index];
        delete item.createdTime;
        delete item.id;
        delete item.serviceId;
        await update({ ...item, ...row, serviceName, clusterName: item.clustername });
        await getServiceInstanceListRequest(serviceId);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'weight' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Modal
      width={1000}
      title={`${serviceName}服务实例列表`}
      open
      onCancel={() => setVisible(false)}
      footer={null}
    >
      <Form form={form}>
        <Table
          dataSource={data}
          loading={loading}
          rowKey={(record) => record.id}
          columns={mergedColumns}
          bordered
          rowClassName={styles['editable-row']}
          components={{
            body: {
              cell: EditableCell,
            },
          }}
        />
      </Form>
    </Modal>
  );
};

export default function ServiceAndInstance() {
  const { data, loading, request: getList } = useRequest(getServiceList);
  const [visible, setVisible] = useState(false);
  const [serviceName, setServiceName] = useState('');
  const [serviceId, setServiceId] = useState(-1);
  useEffect(() => {
    (async function () {
      await getList();
    })();
  }, []);
  const columns = [
    {
      title: '服务名称',
      dataIndex: 'serviceName',
      key: 'serviceName',
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
      title: '描述',
      dataIndex: 'description',
      key: 'description',
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
      render: (text, record: ServiceItem) => (
        <Space size="middle">
          <Button
            className={styles.button}
            type="primary"
            onClick={() => {
              setServiceName(record.serviceName);
              setServiceId(record.id);
              setVisible(true);
            }}
          >
            服务实例
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className={styles.headContainer}>
        <Search placeholder="请输入服务名" onSearch={() => { }} style={{ width: 200 }} />
      </div>
      {visible && <ServiceInstanceModal serviceId={serviceId} serviceName={serviceName} setVisible={setVisible} />}

      <Table columns={columns} dataSource={data} loading={loading} rowKey={(item) => item.id} />
    </div>
  );
}

