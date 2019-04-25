import React, { Component, ReactElement } from 'react'
import { connect } from 'dva'
import Device from '../../components/device/index'
import Info from '../../components/info/index'
import Sider from '../../components/sider/index'
import Movie from '../../components/movie/index'
import './index.less'


//格式声明
interface state {
  current:string;
  visible:boolean;
}

@connect(({ home }) => ({ home }))
class Home extends Component<{},state> {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      current: '大棚A'
    }
  }
  render() {
    const { current } = this.state
    return (
      <div className='homePage'>
        <Movie />
        <Device
          onClick={() => {
            this.setState({ visible: true })
          }}
          title={current}
        />
        <Info />
        <Sider
          showMenu={this.state.visible}
          changeTitle={current => {
            this.setState({ current })
          }}
        />
      </div>
    )
  }
}

export default Home
