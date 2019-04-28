import React, { Component, ReactElement } from 'react'
import { Flex, List, Toast } from 'antd-mobile'

const EXT = arr => {
  return (
    <Flex>
      {arr.map(item => {
        return (
          <Flex.Item onClick={()=>{
            Toast.info(`${item}按钮努力建设中！`, 2);
          }}>
            <p>{item}</p>
          </Flex.Item>
        )
      })}
    </Flex>
  )
}

interface props{
  title:string;
  onClick:any
}
interface state {
  open:boolean;
}


const renderHeader = ():any => {
  return '按钮开关';
}

class ClassPage extends Component<props,state> {
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
          <List
            className='my-list'
          >
            <List.Item
              extra={this.props.title}
              arrow='horizontal'
              onClick={this.props.onClick}
            >
              您当前控制区域
            </List.Item>
          </List>

          <List renderHeader={renderHeader}>
            <List.Item extra={EXT(['全开', '半开', '微开'])} multipleLine>
              开度
            </List.Item>

            <List.Item extra={EXT(['智能温控', '智能点控'])} multipleLine>
              智能系统
            </List.Item>
            <List.Item extra={EXT(['全开', '半开', '微开'])} multipleLine>
              卷膜时间设置
            </List.Item>
            <List.Item extra={EXT(['总开膜', '总关膜'])} multipleLine>
              园区卷膜
            </List.Item>
            <List.Item extra={EXT(['总开膜', '总关膜'])} multipleLine>
              顶膜
            </List.Item>
            <List.Item extra={EXT(['总开膜', '总关膜'])} multipleLine>
              顶膜1
            </List.Item>
            <List.Item extra={EXT(['总开膜', '总关膜'])} multipleLine>
              顶膜2
            </List.Item>
            <List.Item extra={EXT(['总开膜', '总关膜'])} multipleLine>
              顶膜3
            </List.Item>
            <List.Item extra={EXT(['总开膜', '总关膜'])} multipleLine>
              顶膜4
            </List.Item>
          </List>
        </div>
      </div>
    )
  }
}

export default ClassPage
