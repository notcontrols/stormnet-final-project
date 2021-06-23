import React from 'react';

import './style.css';

class AppTitleHome extends React.Component {
  render() {
    return (
      <>
        <div className='title'>{this.props.title}</div>
        <div className='gradientLine'></div>
        <div className='subTitle'>{this.props.subTitle}</div>
      </>
    );
  }
}

export default AppTitleHome;
