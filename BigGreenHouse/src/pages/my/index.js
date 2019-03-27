import React, { Component } from 'react'
import { connect } from 'dva';
import { Modal, Toast } from 'antd-mobile';
import NameCard from '../../components/name-card';
import OrderStatus from '../../components/order-status';
import router from 'umi/router';
import styles from './index.less';

@connect(({ my }) => ({ my }))
class MyIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowdata: 0,
      name: '登录/注册',
      avatar:'',
      not_login: false
    }
  }
  componentDidMount() {
    const { dispatch } = this.props;

  }
  linkurl(v){
    if (v === 'address') {
      console.log('去地址管理咯')
    } else {
      console.log('去支付账户管理咯')
    }
  }
  render() {
    const { my } = this.props;
    const { not_login } = this.state;
    return (
      <div className={styles.content_me}>
        <NameCard
          name={not_login ? JSON.parse(localStorage.getItem('USER_INFO')).name : '罗大佑'}
          avatar={this.state.avatar}
          notLogin={not_login ? 1 : 0}
        />
        <div className={styles.service_info + ' ' + 'box_shadow'}>
          <div className={styles.service_content}>
          <div className={styles.service_item} onClick={() => {
              Toast.info('努力建设中！', 1);
            }}>
              <img
                className={styles.service_img}
                src={require('../../assets/recycleH5_14.png')}
                alt=""
              />
              <div className={styles.service_text}>退出登录</div>
            </div>
            <div className={styles.service_item} onClick={() => {
              Toast.info('努力建设中！', 1);
            }}>
              <img
                className={styles.service_img}
                src={require('../../assets/recycleH5_19.png')}
                alt=""
              />
              <div className={styles.service_text}>帮助中心</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MyIndex;
