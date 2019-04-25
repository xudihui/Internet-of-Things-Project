import React, { Component } from 'react'
import BaseLayout from './baseLayout';

const ULR_NO_LAYOUT = ['/', '/home', '/info', '/my','/control'];

interface location {
  pathname: string
}

interface props {
  location: location;
}

class Index extends Component<props>{
  renderBody = () => {
    const {location: {pathname}, children } = this.props;
    if (ULR_NO_LAYOUT.includes(pathname)) {
      return  (<BaseLayout {...this.props} />);
    }
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderBody()}
      </React.Fragment>
    )
  }
}

export default Index;
