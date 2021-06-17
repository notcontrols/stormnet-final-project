import React from 'react';

import './style.css';

class Statistic extends React.Component {
  render() {
    return (
      <div className='statistics'>
      <div className='support'>
        <div className='statisticNumber'>966</div>
        <div className='smallGradientLine'></div>
        <div className='statisticDesc'>Support Ticket Solved</div>
      </div>
      <div className='curchases'>
        <div className='statisticNumber'>20K</div>
        <div className='smallGradientLine'></div>
        <div className='statisticDesc'>Purchases</div>
      </div>
      <div className='cups'>
        <div className='statisticNumber'>1832</div>
        <div className='smallGradientLine'></div>
        <div className='statisticDesc'>Cafe Cups</div>
      </div>
      <div className='likes'>
        <div className='statisticNumber'>1.2M</div>
        <div className='smallGradientLine'></div>
        <div className='statisticDesc'>Facebook Likes</div>
      </div>
      <div className='tweets'>
        <div className='statisticNumber'>10K</div>
        <div className='smallGradientLine'></div>
        <div className='statisticDesc'>Tweets</div>
      </div>
      <div className='comments'>
        <div className='statisticNumber'>+18K</div>
        <div className='smallGradientLine'></div>
        <div className='statisticDesc'>Comments</div>
      </div>
    </div>
    );
  }
}

export default Statistic;
