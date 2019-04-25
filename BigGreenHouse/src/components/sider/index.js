import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import './index.less'
const SubMenu = Menu.SubMenu

const Frame = props => {
  return (
    <div
      style={{
        height: window.innerHeight,
        width: window.innerWidth
      }}
      className='frame'
      onClick={props.onClick}
    />
  )
}
class Sider extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4']
  state = {
    openKeys: ['sub1']
  }
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    )
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }
  render () {
    return (
      <div
        style={{
          height: window.innerHeight
        }}
        className='absolute-wrap'
      >
        <Menu
          theme='dark'
          mode='inline'
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{
            width: 156,
            height: window.innerHeight
          }}
          className='absolute-wrap'
        >
          <SubMenu
            key='sub1'
            title={
              <span>
                <Icon type='idcard' />
                <span>嘉兴</span>
              </span>
            }
          >
            <Menu.Item key='1'>Option 1</Menu.Item>
            <Menu.Item key='2'>Option 2</Menu.Item>
            <Menu.Item key='3'>Option 3</Menu.Item>
            <Menu.Item key='4'>Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key='sub2'
            title={
              <span>
                <Icon type='idcard' />
                <span>宁波</span>
              </span>
            }
          >
            <Menu.Item key='5'>企业A</Menu.Item>
            <Menu.Item key='6'>企业B</Menu.Item>
            <SubMenu key='sub3' title='企业C'>
              <Menu.Item key='7'>基地A</Menu.Item>
              <Menu.Item key='8'>基地B</Menu.Item>
              <SubMenu key='sub33' title='基地C'>
                <Menu.Item key='7'>大棚A</Menu.Item>
                <Menu.Item key='8'>大棚B</Menu.Item>
              </SubMenu>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key='sub4'
            title={
              <span>
                <Icon type='idcard' />
                <span>台州</span>
              </span>
            }
          >
            <Menu.Item key='9'>Option 9</Menu.Item>
            <Menu.Item key='10'>Option 10</Menu.Item>
            <Menu.Item key='11'>Option 11</Menu.Item>
            <Menu.Item key='12'>Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

class Sider2 extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub33', 'sub2', 'sub4']
  state = {
    openKeys: ['sub33'],
    showMenu: false
  }
  onOpenChange = openKeys => {
    console.log('我改变拉')
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    )
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }
  componentWillReceiveProps(next){
    this.setState({ showMenu: next.showMenu })
  }
  render () {
    const { showMenu } = this.state
    return (
      <div
        style={{
          height: window.innerHeight,
          display: showMenu ? 'block' : 'none'
        }}
        className='absolute-wrap'
      >
        <Frame
          onClick={() => {
            this.setState({ showMenu: false })
          }}
        />
        <Menu
          theme='dark'
          mode='inline'
          openKeys={this.state.openKeys}
          defaultSelectedKeys={['71']}
          onOpenChange={this.onOpenChange}
          style={{
            width: 156,
            height: window.innerHeight
          }}
          className='absolute-wrap'
          onSelect={({item:{props}})=>{
            if(props.level === 2){
              this.props.changeTitle(props.children)
            }
          }}
        >
          <Menu.Item key='7'>基地A</Menu.Item>
          <Menu.Item key='8'>基地B</Menu.Item>
          <SubMenu key='sub33' title='基地C'>
            <Menu.Item key='71'>大棚A</Menu.Item>
            <Menu.Item key='82'>大棚B</Menu.Item>
            <Menu.Item key='821'>大棚B1</Menu.Item>
            <Menu.Item key='8222'>大棚B2</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
export default Sider2
