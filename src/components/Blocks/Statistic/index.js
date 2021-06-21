import React from 'react';

import './style.css';

import StatisticCell from './StatisticCell';

class Statistic extends React.Component {
  render() {
    return (
      <div className='statistics'>
        <div className='support'>
          <StatisticCell
            color='#9ce08d'
            number='966'
            desc='Support Ticket Solved'
          />
        </div>
        <div className='purchases'>
          <StatisticCell color='#81b0ff' number='20K' desc='Purchases' />
        </div>
        <div className='cups'>
          <StatisticCell color='#f47272' number='1832' desc='Cafe Cups' />
        </div>
        <div className='likes'>
          <StatisticCell color='#aae980' number='1.2M' desc='Facebook Likes' />
        </div>
        <div className='tweets'>
          <StatisticCell color='#9f7bfb' number='10K' desc='Tweets' />
        </div>
        <div className='comments'>
          <StatisticCell color='#fbb439' number='+18K' desc='Comments' />
        </div>
      </div>
    );
  }
}

export default Statistic;
