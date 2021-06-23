import React from 'react';

import './style.css';

class BigTitle extends React.Component {
  render() {
    return (
      <>
        <div className='main_title'>{this.props.title}</div>
        <div className='main_subtitle'>{this.props.subtitle}</div>
      </>
    );
  }
}

export default BigTitle;
