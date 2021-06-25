import React from 'react';

import './style.css';

import AppTitleHome from '../../../AppTitleHome';

import Work from '../img/us-work.jpg';
import Office from '../img/office-workers.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

class ChooseContent extends React.Component {
  render() {
    return (
      <div className='choose_content'>
        <div className='choose_title'>
          <AppTitleHome
            title='Why Choose TheFox Business'
            subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.'
          />
        </div>
        <div className='choose_row'>
          <div className='wc_wrapper'>
            <div className='wc_image_wrapper'>
              <img src={Work} className='wc_img ' alt='' />
            </div>
            <h3 className='wc_heading'>
              We Think Different. We Do The Best Ever
            </h3>
            <div className='wc_text'>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
              viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
              lobortis orci gravida volutpat.
            </div>
          </div>
          <div className='wc_wrapper'>
            <div className='wc_image_wrapper'>
              <img src={Office} className='wc_img ' alt='' />
            </div>
            <h3 className='wc_heading'>We Do What The Customers Desires</h3>
            <div className='wc_text'>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
              viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
              lobortis orci gravida volutpat.
            </div>
          </div>
        </div>
        <div class='wc_more'>
          <a href='/features' title='Thefox'>
            <FontAwesomeIcon icon={faStar} /> Learn more about us
          </a>
        </div>
      </div>
    );
  }
}

export default ChooseContent;
