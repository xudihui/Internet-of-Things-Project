import React, { Component, ReactElement } from 'react'
import { Flex, Drawer, Menu, Toast, List } from 'antd-mobile'
import './index.less'
const { Item } = List

interface data {
  name:string;
  value:number|string;
}
interface state{
  open:boolean;
}

const data:data[] = [
  {
    name: '温湿度1',
    value: '30℃/35%'
  },
  {
    name: '土壤温湿度1',
    value: `30℃/${Math.floor(Math.random() * 100)}%`
  },
  {
    name: '土壤温湿度2',
    value: `30℃/${Math.floor(Math.random() * 100)}%`
  },
  {
    name: '二氧化碳1',
    value: Math.floor(Math.random() * 100)
  },
  {
    name: '二氧化碳2',
    value: Math.floor(Math.random() * 100)
  }
];
const data2:data[] = [
  {
    name: '温湿度',
    value: `30℃/${Math.floor(Math.random() * 100)}%`
  },
  {
    name: '光照度',
    value: Math.floor(Math.random() * 100)
  },
  {
    name: '风向',
    value: '南北风'
  },
  {
    name: '风速',
    value: Math.floor(Math.random() * 100)
  }
]
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

class ClassPage extends Component<{},state> {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }
  onOpenChange = (...args) => {
    console.log(args)
    this.setState({ open: !this.state.open })
  }
  componentDidMount () {}
  render () {
    return (
      <div style={{ position: 'relative' }}>
        <div className='deviceContent'>
          <List renderHeader={():any => '数据显示区内容'} className='my-list'>
            {data.map(({ name, value }) => {
              return (
                <Item key={name} extra={value} align='top' multipleLine>
                  {name}
                </Item>
              )
            })}
          </List>
        </div>
        <div className='deviceContent'>
          <List renderHeader={():any => '气象站数据'} className='my-list'>
            {data2.map(({ name, value }) => {
              return (
                <Item key={name} extra={value} align='top' multipleLine>
                  {name}
                </Item>
              )
            })}
          </List>
        </div>

        
      </div>
    )
  }
}

export default ClassPage
