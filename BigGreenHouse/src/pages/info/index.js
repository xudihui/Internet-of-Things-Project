import React, { Component } from 'react'
import { connect } from 'dva'
import { Flex, Drawer, Menu, Toast, List } from 'antd-mobile'
import router from 'umi/router'
import styles from './index.less'
import { random } from 'node-forge'
const { Item } = List

const data = [
  {
    name: '湿度',
    value: Math.floor(Math.random() * 100)
  },
  {
    name: '温度',
    value: Math.floor(Math.random() * 100)
  },
  {
    name: '声音分贝值',
    value: Math.floor(Math.random() * 100)
  },
  {
    name: '土壤EC值',
    value: Math.floor(Math.random() * 100)
  },
  {
    name: '二氧化碳浓度',
    value: Math.floor(Math.random() * 100)
  },
  {
    name: 'PM2.5浓度',
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

class ClassPage extends Component {
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
          <List renderHeader={() => '设备消息'} className='my-list'>
            <Item extra='棚A' arrow='horizontal' onClick={() => {}}>
              当前查看大棚：
            </Item>
            {data.map(({ name, value }) => {
              return (
                <Item extra={value} align='top' multipleLine>
                  {name}
                </Item>
              )
            })}
          </List>
        </div>

        <Drawer
          className='my-drawer'
          style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          position='right'
          contentStyle={{
            color: '#A6A6A6',
            textAlign: 'center',
            paddingTop: 42
          }}
          sidebar={
            <div className='rightPanel' style={{ width: '3.75rem' }}>
              <p>
                <i className='iconfont icon-hulianwangyingxiao-' />
              </p>
              <p>
                <span>设备中心</span>
              </p>
              <div className='item'>
                <Flex justify='start'>
                  <i className='iconfont icon-chuanganqi-f' />
                  <div>
                    <div className='name'>
                      <i className='iconfont icon-addressbook_fill'>罗老板</i>
                    </div>
                    <div className='note'>
                      <i className='iconfont icon-int'>断电带记忆</i>
                    </div>
                  </div>
                </Flex>
              </div>
              <div className='item'>
                <Flex justify='start'>
                  <i className='iconfont icon-chuanganqi-f' />
                  <div>
                    <div className='name'>
                      <i className='iconfont icon-addressbook_fill'>松老板</i>
                    </div>
                    <div className='note'>
                      <i className='iconfont icon-int'>断电带记忆</i>
                    </div>
                  </div>
                </Flex>
              </div>
              <div className='item'>
                <Flex justify='start'>
                  <i className='iconfont icon-chuanganqi-f' />
                  <div>
                    <div className='name'>
                      <i className='iconfont icon-addressbook_fill'>何老板</i>
                    </div>
                    <div className='note'>
                      <i className='iconfont icon-int'>断电带记忆</i>
                    </div>
                  </div>
                </Flex>
              </div>
            </div>
          }
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        />
      </div>
    )
  }
}

export default ClassPage
