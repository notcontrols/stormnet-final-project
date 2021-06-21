import React from 'react';

import './style.css';

import AppHeaderHome from '../../AppHeaderHome';

import Table from './img/table.jpg';
import Laptop from './img/laptop.jpg';
import Office from './img/office.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

class OurBlog extends React.Component {
  render() {
    return (
      <div className='ourBlog'>
        <div className='ourBlog_title'>
          <AppHeaderHome
            title='Lastest From Our Blog'
            subTitle='Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            Nulla vehicula nibh vel ante commodo feugiat.'
          />
        </div>
        <div className='articles_container'>
          <div className='article1 article'>
            <a href='#'>
              <img className='acticle_image' src={Table} alt='' />
            </a>
            <div className='acticle_content'>
              <div className='article_title'>
                <a href='#' title='CEO'>
                  This CEO is taking on the biggest banks on Wall Street — and
                  winning
                </a>
              </div>
              <div className='article_info'>
                by Robinson Greig / 25th June 2020
              </div>
            </div>
          </div>
          <div className='article2 article'>
            <a href='#'>
              <img className='acticle_image' src={Laptop} alt='' />
            </a>
            <div className='acticle_content'>
              <div className='article_title'>
                <a href='#' title='CEO'>
                  Google employee dies in an accident at the Cannes Lions
                  advertising festival
                </a>
              </div>
              <div className='article_info'>
                by Robinson Greig / 25th June 2020
              </div>
            </div>
          </div>
          <div className='article3 article'>
            <a href='#'>
              <img className='acticle_image' src={Office} alt='' />
            </a>
            <div className='acticle_content'>
              <div className='article_title'>
                <a href='#' title='CEO'>
                  How a tweet turned Uber's first hire into a billionaire
                </a>
              </div>
              <div className='article_info'>
                by Robinson Greig / 25th June 2020
              </div>
            </div>
          </div>
        </div>
        <div class='article_more'>
          <a href='#' title='more'>
            <FontAwesomeIcon icon={faBell} /> Check All Latest Articles
          </a>
        </div>
      </div>
    );
  }
}

export default OurBlog;
