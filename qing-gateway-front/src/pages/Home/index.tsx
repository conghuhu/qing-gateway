import { useEffect, useRef, useState } from 'react';
import { useRequest } from 'ice';
import { Card, Col, Row, Space, Tag } from 'antd';
import styles from './index.module.css';
import { getWebsocketInfo, } from '@/api/GlobalService';
import store from '@/store';
import * as echarts from 'echarts';
import { json } from './map'
import ReactEcharts from 'echarts-for-react';
echarts.registerMap("china", json)
export default function Home() {
  // 注意使用hooks定义变量，改变变量用函数
  const [currentTitle, setCurrentTitle] = useState('websocketInfo');
  // 使用状态
  const [userState, userDispatchers] = store.useModel('user');
  // 使用useRequest库，调取网络请求
  const {
    data,
    error,
    loading,
    request: fetchRepos,
  } = useRequest(getWebsocketInfo, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  useEffect(() => {
    // 手动获取请求，注意初始化的请求一定要在useEffect中执行
    // 所有请求统一用async和awaiter来处理
    (async function () {
      await fetchRepos();
    })();
  }, []);
  const option = {
    backgroundColor: 'transparent',
    title: {
      text: '访问者IP显示',
      subtext: 'data from PM25.in',
      // sublink: 'http://www.pm25.in',
      left: 'center',
      textStyle: {
        color: 'black'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    geo: {
      map: "china",
      show: true,
      width: "49%",
      // left:"1vw"
    },
    series: [{
      type: 'effectScatter',
      coordinateSystem: 'geo',//使用地理坐标系geo
      color: "red",
      data: [
        [117.348611, 40.581141],
        [118.87, 42.28],
        [120.33, 36.07],
        [
          114.408117, 39.652106
        ],
        [
          104.333813,
          33.315502
        ],
        [
          104.428668,
          25.576126
        ],
        [
          100.895024,
          34.375183
        ],
        [
          106.237681,
          33.564201
        ],
        [
          117.901664,
          35.094698
        ],
        [
          107.08275,
          35.024156
        ],
        [
          107.350068,
          34.93393
        ],
        [
          80.23026,
          35.147565
        ],
        [
          80.432904,
          35.449418
        ],
        [
          96.026053,
          39.31133
        ],
        [
          80.026053,
          40.31133
        ],
        [
          100.026053,
          40.31133
        ],
        [
          130.026053,
          45.31133
        ],
      ]
    }]
  }
  const option1 = {
    legend: {
      orient: 'horizontal',
      right: 'center',
      top: 0
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    xAxis: {
      type: 'category',
      data: ["22:42:30", "22:42:32", "22:42:34", "22:42:36", "22:42:38", "22:42:40", "22:42:43", "22:42:45", "22:42:56"],
    },
    yAxis: [
      {
        type: 'value',
        name: 'QPS',
        min: 0,
        max: 1000,
        position: 'left',
        axisLabel: {
          formatter: '{value} 次'
        }
      },
    ],
    series: [
      {
        name: "总内存",
        data: [100, 289, 981, 367, 299, 580, 192],
        type: 'line',
        smooth: true,
      },
    ]
  }
  const option3 = {
    legend: {
      orient: 'horizontal',
      right: 'center',
      top: 0
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    xAxis: {
      type: 'category',
      data: ["22:42:30", "22:42:32", "22:42:34", "22:42:36", "22:42:38", "22:42:40", "22:42:43", "22:42:45", "22:42:56"],
    },
    yAxis: [
      {
        type: 'value',
        name: '内存占用量',
        min: 0,
        // max: 400,
        position: 'left',
        axisLabel: {
          formatter: '{value} MB'
        }
      },
      {
        type: 'value',
        name: '内存占用比',
        min: 0,
        max: 100,
        position: 'right',
        right: "-20px",
        axisLabel: {
          formatter: '{value}%'
        }
      },
    ],
    series: [
      {
        name: "jvm总内存",
        smooth: true,
        data: [450,410,450,450,440,430,444],
        type: 'line'
      },
      {
        name: "jvm空闲内存",
        smooth: true,
        data: [301,320,330,298,350,190,270],
        type: 'line'
      },
      {
        name: "jvm最大内存",
        smooth: true,
        data: [800,812,823,830,821,800,798],
        type: 'line'
      },
      {
        name: "jvm内存使用用率",
        smooth: true,
        data: [60,70,64,82,54,77,40],
        type: 'line',
        yAxisIndex: 1,
      },
    ]
  }
  return (
    <div className={styles.container}>
      {/* state变量使用时，套一层{} */}
      {/* <h2>{currentTitle}</h2>
      <h3
        onClick={() => {
          // 更改store状态，必须这么写
          userDispatchers.getUserInfo();
        }}
      >
        {userState.username}
      </h3>
      <Button
        type="primary"
        onClick={() => {
          // 尽量都用jsx语法，函数嵌套进去，更加简洁
          setCurrentTitle('改变后的websocketInfo');
          fetchRepos();
        }}
      >
        改变state的值
      </Button> */}
      <div className="site-card-wrapper" style={{ "marginBottom": "3vh" }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="网关平均QPS" bordered={false} style={{ "height": "100%" }}>
              <ReactEcharts option={option1} lazyUpdate={true} style={{ width: "26.5vw", height: "40vh", }}></ReactEcharts>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="DDOS攻击IP地址" bordered={false} className={styles.Tag} style={{ "height": "100%" }}>
              <Tag color="red" style={{ "marginBottom": "1vw" }}>124.232.224.255</Tag>
              <Tag color="red" style={{ "marginBottom": "1vw" }}>139.222.224.221</Tag>
              <Tag color="red">110.102.224.165</Tag>
              <Tag color="red">195.150.224.092</Tag>
              <Tag color="red" style={{ "marginBottom": "1vw" }}>125.150.224.092</Tag>
              <Tag color="red">175.150.224.092</Tag>
              <Tag color="red">105.150.224.092</Tag>
              <Tag color="red">075.150.224.092</Tag>
              <Tag color="red" style={{ "marginBottom": "1vw" }}>139.150.224.092</Tag>
              <Tag color="red">010.150.224.092</Tag>
              <Tag color="red">091.150.224.092</Tag>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="总内存占用情况" bordered={false} style={{ "height": "100%" }}>
              <ReactEcharts option={option3} lazyUpdate={true} style={{ width: "26.5vw", height: "40vh" }}></ReactEcharts>
            </Card>
          </Col>
        </Row>
      </div>
      {error ? (
        <div>request error: {error.message}</div>
      ) : (
        <ReactEcharts option={option} lazyUpdate={true} style={{ width: "100%", height: "100vh" }}></ReactEcharts>
      )}
    </div>
  );
}
