import React, { Component, ReactElement } from 'react'
import './index.less'
import router from 'umi/router';
import imgURL from '../../assets/default-pic.png';

interface props {
  notLogin:number;
  avatar:ReactElement;
  name:string;
}

class NameCard extends Component<props> {
  link() {
    router.push('/login');
  }
  render() {
    const avatar = this.props.avatar || imgURL;
    if (this.props.notLogin === 1) {
      return (
       <div className="name_content">
         <div className="content_card">
           <img className="avatar" src={avatar} alt="" />
           <div className="content_name">{this.props.name}</div>
         </div>
       </div>
     )
   } else {
     return (
      <div className="name_content"
        onClick={() => this.link()}>
        <div className="content_card">
          <img className="avatar" src={avatar} alt="" />
          <div className="content_name">{this.props.name}</div>
        </div>
      </div>
    )
   }
  }
}

export default NameCard;
