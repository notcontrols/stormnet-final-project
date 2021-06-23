import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './style.css';

import AppTitleHome from '../../AppTitleHome';

import LaptopImage from '../../Blocks/Intro/LaptopImage'

class FeaturesIntro extends React.Component {
  render() {
    return (
      <div className='intro intro_bgwhite'>
        <LaptopImage />
        <div className='introContent'>
          <AppTitleHome
            title='Web Design'
            subTitle='Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Nulla vehicula nibh vel ante commodo feugiat.'
          />
          <div className='introducingText'>
            Cras gravida arcu tincidunt, suscipit velit sed, porta sapien.
            Maecenas a aliquam lectus. Vivamus consequat purus quis ligula
            vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet
            venenatis faucibus. Praesent aliquet convallis.
          </div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faAngleRight} /> Clean, modern,
              multi-purpose design can be used for any type of website
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleRight} /> The New Ultimate
              Multi-Purpose WordPress Theme
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleRight} /> WordPress 4.1 Tested and
              Approved
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleRight} /> SEO Optimized, Well
              organized, commented & clean code
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FeaturesIntro;
