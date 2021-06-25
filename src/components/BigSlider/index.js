import React from 'react';

import GetStartedButton from '../Buttons/GetStarted';
import PurchaseNowButton from '../Buttons/PurchaseNow';

import arrow_left from './images/arrow_left.png';
import arrow_right from './images/arrow_right.png';

import './gallery.css';
import './style.css';

class BigSlider extends React.Component {
  render() {
    return (
      <div class='gallery autoplay items-3'>
        <div id='slide-1' class='control-operator'></div>
        <div id='slide-2' class='control-operator'></div>
        <div id='slide-3' class='control-operator'></div>

        <figure class='item'>
          <h1 className='big_slider-header'>DREAM BIG. THINK DIFFERENT</h1>
          <h2 className='big_slider-subheader'>
            Creating A Website Has Never Been This Easy
          </h2>
          <div class='arrows-controls'>
            <a className='arrows' href='#slide-3'>
              <img src={arrow_left} alt='Left pointing arrow' />
            </a>
            <a className='arrows' href='#slide-2'>
              <img src={arrow_right} alt='Right pointing arrow' />
            </a>
          </div>
          <div className='big_slider-buttons'>
            <GetStartedButton />
            <PurchaseNowButton />
          </div>
        </figure>

        <figure class='item'>
          <h1 className='big_slider-header'>DREAM BIG.</h1>
          <h2 className='big_slider-subheader'>
            Creating A Website Has Never Been This Easy
          </h2>
          <div class='arrows-controls'>
            <a className='arrows' href='#slide-1'>
              <img src={arrow_left} alt='Left pointing arrow' />
            </a>
            <a className='arrows' href='#slide-3'>
              <img src={arrow_right} alt='Right pointing arrow' />
            </a>
          </div>
          <div className='big_slider-buttons'>
            <GetStartedButton />
            <PurchaseNowButton />
          </div>
        </figure>

        <figure class='item'>
          <h1 className='big_slider-header'>THINK DIFFERENT.</h1>
          <h2 className='big_slider-subheader'>
            Creating A Website Has Never Been This Easy
          </h2>
          <div class='arrows-controls'>
            <a className='arrows' href='#slide-2'>
              <img src={arrow_left} alt='Left pointing arrow' />
            </a>
            <a className='arrows' href='#slide-1'>
              <img src={arrow_right} alt='Right pointing arrow' />
            </a>
          </div>
          <div className='big_slider-buttons'>
            <GetStartedButton />
            <PurchaseNowButton />
          </div>
        </figure>

        <div class='controls'>
          <a href='#slide-1' class='control-button'>
            •
          </a>
          <a href='#slide-2' class='control-button'>
            •
          </a>
          <a href='#slide-3' class='control-button'>
            •
          </a>
        </div>
      </div>
    );
  }
}

export default BigSlider;
