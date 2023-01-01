import React, { useEffect } from 'react';
import { getLogs } from '@/services/GlobalService';
import { useRequest } from 'ice';
import { Input, Table } from 'antd';
import styles from './index.module.css';

const { Column } = Table;
const { Search } = Input;

function LogPage() {
  const { data, loading, request: getLogList } = useRequest(getLogs, {

  });
  const params = {
    pageNum: 1,
    pageSize: 10,
    content: '',
  };
  useEffect(() => {
    (async function () {
      await getLogList(params);
    })();
  }, []);
  const debounce = (fn, delay: number) => {
    let timer: any = null;
    return (e) => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn.call(this, e)
      }, delay);
    }
  }
  return (
    <div>
      <div className={styles.headContainer}>
        <Search
          placeholder="请输入源IP"
          onSearch={async (value) => {
            params.content = value;
            await getLogList(params);
          }}
          onChange={debounce(async (e) => {
            console.log(e)
            params.content = e.target.value;
            await getLogList(params);
          }, 500)}
          style={{ width: 200 }}
        />
      </div>
      <Table dataSource={data?.data} loading={loading} rowKey={(record) => record.id} pagination={{
        defaultCurrent: 1,
        total: data?.total,
        pageSize: data?.pageSize,
        async onChange(page, pageSize) {
          await getLogList({
            pageNum: page,
            pageSize: pageSize,
            content: ''
          })
        },
      }}>
        <Column title="源IP" dataIndex="originIP" key="originIP" align="center" />
        <Column title="源访问路径" dataIndex="originuri" key="originuri" align="center" />
        <Column title="代理uri" dataIndex="proxyuri" key="proxyuri" align="center" />
        <Column title="路由断言" dataIndex="routeName" key="routeName" align="center" />
        <Column title="目标服务" dataIndex="targetService" key="targetService" align="center" />
        <Column title="目标服务实例" dataIndex="serviceInstance" key="serviceInstance" align="center" />
        <Column title="创建时间" dataIndex="createdTime" key="createdTime" align="center" />
      </Table>
    </div>
  );
}

export default LogPage;
