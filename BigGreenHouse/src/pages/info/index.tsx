import React, { Component } from 'react'

import echarts from 'echarts'
import { Flex, Drawer, Menu, Toast, List } from 'antd-mobile'


interface state {
  open: boolean;
}

var dottedBase = +new Date()
const oneDay = (24 * 3600) / 4
const date = []

const data = [Math.random() * 5]

for (var i = 1; i < 20000; i++) {
  var now = new Date((dottedBase += oneDay))
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
  data.push(Math.round((Math.random() - 0.5) * 2 + data[i - 1]))
}

const option = {
  tooltip: {
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%']
    }
  },
  title: {
    left: 'center',
    text: '近7天二氧化碳浓度'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: date
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%']
  },
  series: [
    {
      name: '模拟数据',
      type: 'line',
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: 'rgb(255, 70, 131)'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 158, 68)'
          },
          {
            offset: 1,
            color: 'rgb(255, 70, 131)'
          }
        ])
      },
      data: data
    }
  ]
}

var category = []
var lineData = []
var barData = []

for (var i = 0; i < 20; i++) {
  var date1 = new Date((dottedBase += 3600 * 24 * 1000))
  category.push(
    [date1.getFullYear(), date1.getMonth() + 1, date1.getDate()].join('-')
  )
  var b = Math.random() * 200
  var d = Math.random() * 200
  barData.push(b)
  lineData.push(d + b)
}

// option
const option2 = {
  backgroundColor: '#fff',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },

  title: {
    left: 'center',
    text: '近15天温湿度'
  },
  xAxis: {
    data: category,
    axisLine: {
      lineStyle: {
        color: '#333'
      }
    }
  },
  yAxis: {
    splitLine: { show: false },
    axisLine: {
      lineStyle: {
        color: '#333'
      }
    }
  },
  series: [
    {
      name: 'line',
      type: 'line',
      smooth: true,
      showAllSymbol: true,
      symbol: 'emptyCircle',
      symbolSize: 15,
      data: lineData
    },
    {
      name: 'bar',
      type: 'bar',
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#14c8d4' },
            { offset: 1, color: '#43eec6' }
          ])
        }
      },
      data: barData
    },
    {
      name: 'line',
      type: 'bar',
      barGap: '-100%',
      barWidth: 10,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(20,200,212,0.5)' },
            { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
            { offset: 1, color: 'rgba(20,200,212,0)' }
          ])
        }
      },
      z: -12,
      data: lineData
    },
    {
      name: 'dotted',
      type: 'pictorialBar',
      symbol: 'rect',
      itemStyle: {
        normal: {
          color: '#0f375f'
        }
      },
      symbolRepeat: true,
      symbolSize: [12, 4],
      symbolMargin: 1,
      z: -10,
      data: lineData
    }
  ]
}

const EXT = () => {
  return (
    <Flex>
      <Flex.Item>
        <div>
          <i className='iconfont icon-zhtn' />
        </div>
        <p>开</p>
      </Flex.Item>
      <Flex.Item>
        <div>
          <i className='iconfont icon-fenxiang' />
        </div>
        <p>点动</p>
      </Flex.Item>
      <Flex.Item>
        <div>
          <i className='iconfont icon-shielding_fill' />
        </div>
        <p>关</p>
      </Flex.Item>
    </Flex>
  )
}

class ClassPage extends Component<{}, state> {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  onOpenChange = (...args) => {
    console.log(args)
    this.setState({ open: !this.state.open })
  }
  componentDidMount() {
    const myChart = echarts.init(document.getElementById('chart'))
    myChart.setOption(option)

    const myChart2 = echarts.init(document.getElementById('chart2'))
    myChart2.setOption(option2)
  }
  render() {
    return (
      <div>
        <div
          id='chart'
          style={{ position: 'relative', width: '100%', height: 400 }}
        />
        <div
          id='chart2'
          style={{ position: 'relative', width: '100%', height: 400 }}
        />
      </div>
    )
  }
}

export default ClassPage
