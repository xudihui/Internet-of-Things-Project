import React, { Component } from 'react'
import { connect } from 'dva'
import { Flex, Drawer, Menu, Toast, List } from 'antd-mobile'
import router from 'umi/router'
import styles from './index.less'

const EXT = () => {
  return (
    <Flex>
      <Flex.Item>
        <div>
          <i className='iconfont icon-zhtn' />
        </div>
        <p>全开</p>
      </Flex.Item>
      <Flex.Item>
        <div>
          <i className='iconfont icon-shielding_fill' />
        </div>
        <p>全关</p>
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
        <i className='iconfont icon-other' onClick={this.onOpenChange} />
        <div className='deviceTop'>
          <Flex>
            <Flex.Item>
              <div>
                <i className='iconfont icon-refresh' />
              </div>
              <p>刷新</p>
            </Flex.Item>
            <Flex.Item>
              <div>
                <i className='iconfont icon-shielding_fill' />
              </div>
              <p>全关</p>
            </Flex.Item>
            <Flex.Item>
              <div>
                <i className='iconfont icon-zhtn' />
              </div>
              <p>全开</p>
            </Flex.Item>
          </Flex>
        </div>
        <div className='deviceContent'>
          <List renderHeader={() => '开关列表'}>
            <List.Item extra={<EXT />} multipleLine>
              大棚加湿器
            </List.Item>
            <List.Item extra={<EXT />} multipleLine>
              人工光源
            </List.Item>
            <List.Item extra={<EXT />} multipleLine>
              人工二氧化碳
            </List.Item>
            <List.Item extra={<EXT />} multipleLine>
              加热棒
            </List.Item>
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
                    <div className='name'><i className='iconfont icon-addressbook_fill'>罗老板</i></div>
                    <div className='note'><i className='iconfont icon-int'>断电带记忆</i></div>
                  </div>
                </Flex>
              </div>
              <div className='item'>
                <Flex justify='start'>
                  <i className='iconfont icon-chuanganqi-f' />
                  <div>
                    <div className='name'><i className='iconfont icon-addressbook_fill'>松老板</i></div>
                    <div className='note'><i className='iconfont icon-int'>断电带记忆</i></div>
                  </div>
                </Flex>
              </div>
              <div className='item'>
                <Flex justify='start'>
                  <i className='iconfont icon-chuanganqi-f' />
                  <div>
                    <div className='name'><i className='iconfont icon-addressbook_fill'>何老板</i></div>
                    <div className='note'><i className='iconfont icon-int'>断电带记忆</i></div>
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
