import React, { Component, ReactElement } from 'react'
import { TabBar } from 'antd-mobile';
import router from 'umi/router';
import 'antd-mobile/dist/antd-mobile.css';
import './index.less'


interface location {
  pathname: string
}

interface props {
  location: location;
}

interface tabBar {
  id: string;
  name: string;
  icon: ReactElement;
  selectedicon: ReactElement;
  url: string;
}

const TabBarData: Array<tabBar> = [
  {
    id: 'home',
    name: '主页',
    icon: require('../../assets/recycleH5_07.png'),
    selectedicon: require('../../assets/recycleH5_02.png'),
    url: '/home',
  },
  {
    id: 'info',
    name: '历史消息',
    icon: require('../../assets/recycleH5_03.png'),
    selectedicon: require('../../assets/recycleH5_06.png'),
    url: '/info',
  },
  {
    id: 'my',
    name: '我的',
    icon: require('../../assets/recycleH5_04.png'),
    selectedicon: require('../../assets/recycleH5_05.png'),
    url: '/my',
  }
];


class BaseLayout extends Component<props> {

  isTabBarSelect = (url) => {
    const { location: { pathname } } = this.props;
    if (pathname == '/' && url == '/home') {
      return true;
    } else {
      return pathname === url;
    }
  }
  render() {
    return (
      <div className='baseLayout'>
        <TabBar
          unselectedTintColor="#333"
          tintColor="#ef5f55"
          barTintColor="white"
          tabBarPosition='bottom'
        >
          {
            TabBarData.map(t => {
              const isSelect = this.isTabBarSelect(t.url);
              return (<TabBar.Item
                title={t.name}
                key={t.id}
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${t.icon}) center center /  21px 21px no-repeat`
                }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${t.selectedicon}) center center /  21px 21px no-repeat`
                }}
                />
                }
                // badge={1}
                onPress={() => {
                  router.push(t.url);
                }}
                selected={isSelect}
                data-seed="logId"
              >
                {isSelect && this.props.children}
              </TabBar.Item>
              )
            })
          }
        </TabBar>
      </div>
    );
  }
}

export default BaseLayout;
