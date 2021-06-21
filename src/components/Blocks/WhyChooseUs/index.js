import React from 'react';

import './style.css';

import AppHeaderHome from '../../AppHeaderHome';

import Work from './img/us-work.jpg';
import Office from './img/office-workers.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

class  Choose extends React.Component {
  render() {
    return (
      <div className='chooseSkill'>
        <div className='choose_container'>
          <div className='choose_title'>
            <AppHeaderHome title='Why Choose TheFox Business' subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.' />
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
            <a href='#' title='Thefox'>
              <FontAwesomeIcon icon={faStar} /> Learn more about us
            </a>
          </div>
        </div>
        <div className='skills_container'>
          <div className='title skills_title'>Incredible Skills</div>
          <div className='gradientLine'></div>
          <div className='subTitle  skills_subTitle'>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            Nulla vehicula nibh vel ante commodo feugiat.
          </div>
          <div className='skills_text'>
            Cras gravida arcu tincidunt, suscipit velit sed, porta sapien.
            Maecenas a aliquam lectus. Vivamus consequat purus quis ligula
            vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet
            venenatis faucibus. Praesent aliquet convallis.
          </div>
          <div class='progress'>
            <div class='progress_title'>Web Design</div>
            <div class='progress_value' style={{ left: '80%' }}>
              85%
            </div>
            <div class='progress_bg'>
              <div class='progress_bar'></div>
            </div>
          </div>
          <div class='progress'>
            <div class='progress_title'>WordPress Development</div>
            <div class='progress_value' style={{ left: '90%' }}>
              95%
            </div>
            <div class='progress_bg'>
              <div class='progress_bar' style={{ width: '90%' }}></div>
            </div>
          </div>
          <div class='progress'>
            <div class='progress_title'>SEO & Online Marketing</div>
            <div class='progress_value' style={{ left: '70%' }}>
              75%
            </div>
            <div class='progress_bg'>
              <div class='progress_bar' style={{ width: '70%' }}></div>
            </div>
          </div>
          <div class='progress'>
            <div class='progress_title'>Mobile Apps</div>
            <div class='progress_value' style={{ left: '75%' }}>
              80%
            </div>
            <div class='progress_bg'>
              <div class='progress_bar' style={{ width: '75%' }}></div>
            </div>
          </div>
          <a href='#' className='button_skills'>
            <span>MEET OUR TEAM</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Choose;
