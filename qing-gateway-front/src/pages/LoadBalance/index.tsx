import { Card, Col, Row, Badge, Popconfirm } from 'antd';
import { useEffect } from 'react'
import { useRequest } from 'ice'
import { getLoadBalance, getCurrentLoadBalance, changeLoadBalance } from "@/services/GlobalService"
function LoadBalance() {
  const { data, loading, request: getBalance } = useRequest(getLoadBalance)
  const { data: select, request: selectBalance } = useRequest(getCurrentLoadBalance)
  const { request: changeBalance } = useRequest(changeLoadBalance,
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  )

  const handle = async (item) => {
    await changeBalance(item)
    // await getBalance()
    await selectBalance()
  }
  useEffect(() => {
    (async () => {
      await Promise.all([getBalance(), selectBalance()])
    })()
  }, [])
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {
          data?.map((item, index) =>
            <Col span={8} key={index}>
              {
                item === select ?

                  <Badge.Ribbon text={"当前选择的策略"} color="blue">
                    <Card
                      title={item}
                      bordered
                      hoverable
                      style={{ overflow: "hidden" }}
                      loading={loading}>
                      random
                    </Card>
                  </Badge.Ribbon>
                  :
                  <Popconfirm
                    title="你确定要更改策略吗"
                    onConfirm={() => handle(item)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Card
                      title={item}
                      bordered
                      hoverable
                      style={{ overflow: "hidden" }}
                      loading={loading}
                    >
                      random
                    </Card>
                  </Popconfirm>
              }

            </Col>
          )
        }
      </Row>

    </div>
  );
}

export default LoadBalance;
