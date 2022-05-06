import { useRequest } from "ice"
import { getMonitorInfo } from "@/api/GlobalService"
import { useEffect } from "react"
import ReactEcharts from 'echarts-for-react';
import { MonitorInfo } from "@/api/GlobalInterface";
import { cpu, mem, jvmInfo } from '@/api/GlobalInterface'
import dayjs from 'dayjs'
import { Card, Col, Row } from 'antd';


const Charts = ({ data, title }: { data: MonitorInfo, title: string }) => {
  const cpu: cpu[] = data.qpsDTOList;
  const [time, qps] = [cpu.map(item => item.collectTime), cpu.map(item => item.qps)]
  const mem: mem[] = data.memInfoList;
  const [memTotal, memUsedMen, memFree, memUsedRate, memCollect] = [mem.map(item => item.totalMem), mem.map(item => item.usedMem), mem.map(item => item.freeMem), mem.map(item => item.usedRate), mem.map(item => item.collectTime)]
  const jvm: jvmInfo[] = data.jvmInfoList;
  const [jvmTotal, jvmFree, jvmMax, jvmMe, jvmCollect] = [jvm.map(item => item.jvmTotalMemoryByte), jvm.map(item => item.jvmFreeMemoryByte), jvm.map(item => item.jvmMaxMemoryByte), jvm.map(item => item.jvmMemoryUsedRate), jvm.map(item => item.collectTime)]

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
      data: time.map(item => dayjs(item).format("HH:mm:ss")),
    },
    yAxis: [
      {
        type: 'value',
        name: 'QPS',
        min: 0,
        // max: 1000,
        position: 'left',
        axisLabel: {
          formatter: '{value} 次'
        }
      },
    ],
    series: [
      {
        name: "qps",
        data: qps,
        type: 'line',
        smooth: true,
      },
    ]
  }
  const option2 = {
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
      data: memCollect.map(item => dayjs(item).format("HH:mm:ss")),
    },
    yAxis: [
      {
        type: 'value',
        name: '内存占用量',
        min: 0,
        // max: 16.5,
        position: 'left',
        axisLabel: {
          formatter: '{value} G'
        }
      },
      {
        type: 'value',
        name: '内存占用比',
        min: 0,
        max: 100,
        position: 'right',
        axisLabel: {
          formatter: '{value}%'
        }
      },
    ],
    series: [
      {
        name: "总内存",
        data: memTotal.map(item => (item / 1024 / 1024 / 1024).toFixed(2)),
        type: 'line',
        smooth: true,
      },
      {
        name: "使用内存",
        data: memUsedMen.map(item => (item / 1024 / 1024 / 1024).toFixed(2)),
        type: 'line',
        smooth: true,
      },
      {
        name: "空闲内存",
        data: memFree.map(item => (item / 1024 / 1024 / 1024).toFixed(2)),
        type: 'line',
        smooth: true,
      },
      {
        name: "使用内存占比",
        data: memUsedRate.map(item => (item * 100).toFixed(2)),
        yAxisIndex: 1,
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
      data: jvmCollect.map(item => dayjs(item).format("HH:mm:ss")),
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
        data: jvmTotal.map(item => (item / 1024 / 1024).toFixed(2)),
        type: 'line'
      },
      {
        name: "jvm空闲内存",
        smooth: true,
        data: jvmFree.map(item => (item / 1024 / 1024).toFixed(2)),
        type: 'line'
      },
      {
        name: "jvm最大内存",
        smooth: true,
        data: jvmMax.map(item => (item / 1024 / 1024).toFixed(2)),
        type: 'line'
      },
      // {
      //   name:"jdk版本",
      //   smooth: true,
      //   data: jdkVer.map(item => item/1024/1024),
      //   type: 'line'
      // },
      {
        name: "jvm内存使用用率",
        smooth: true,
        data: jvmMe.map(item => (item * 100).toFixed(2)),
        type: 'line',
        yAxisIndex: 1,
      },
    ]
  }
  const gridStyle = {
    width: '33%',
    textAlign: 'center',
  };
  return (
    <div>
      <Card title={title} style={{ "fontSize": "2vw" }}>
        <Card.Grid style={{ gridStyle }} title="QPS">
          <div style={{ "fontSize": "0.5vw", "marginBottom": "1rem" }}>QPS</div>
          <ReactEcharts option={option1} lazyUpdate={true} style={{ width: "26.5vw", height: "40vh", }}></ReactEcharts>
        </Card.Grid>
        <Card.Grid style={{ gridStyle }}>
          <div style={{ "fontSize": "0.5vw", "marginBottom": "1rem" }}>网关节点使用情况</div>
          <ReactEcharts option={option2} lazyUpdate={true} style={{ width: "26.5vw", height: "40vh", }}></ReactEcharts>
        </Card.Grid>
        <Card.Grid style={{ gridStyle }}>
          <div style={{ "fontSize": "0.5vw", "marginBottom": "1rem" }}>JVM使用情况</div>
          <ReactEcharts option={option3} lazyUpdate={true} style={{ width: "26.5vw", height: "40vh" }}></ReactEcharts>
        </Card.Grid>
      </Card>
    </div>
  )
}

export default function Monitor() {
  const { data, loading, request: getMonitor } = useRequest(getMonitorInfo, {
    onSuccess: (data) => {
      console.log(data)

    }
  })
  useEffect(() => {
    (async () => {
      await getMonitor()
    })()
    const timer = setInterval(async () => {
      await getMonitor()
    }, 2000)
    return () => clearInterval(timer)
  }, [])


  return (
    <div>
      {
        data?.map((item, index) => (
          <Charts key={item.gatewayId} data={data[index]} title={item.gatewayId}></Charts>
        ))
      }
    </div>
  )
}
