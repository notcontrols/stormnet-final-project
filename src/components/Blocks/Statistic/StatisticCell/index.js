import React from 'react';

import './style.css';

class StatisticCell extends React.Component {
  render() {
    return (
      <div className='statistic-cell' style={{ color: this.props.color }}>
        <div className='statisticNumber'>{this.props.number}</div>
        <div className='smallGradientLine'></div>
        <div className='statisticDesc'>{this.props.desc}</div>
      </div>
    );
  }
}

export default StatisticCell;
