import React from 'react';

import './style.css';

import AppTitleHome from '../../AppTitleHome';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Background from './img/background2.png';

class Introducing extends React.Component {
  render() {
    return (
      <div className='introducing_demos'>
        <img src={Background} alt='' />
        <div className='introducing_content'>
          <AppTitleHome
            title='Great Theme for Your Business'
            subTitle='Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            Nulla vehicula nibh vel ante commodo feugiat.'
          />
          <div className='introducing_text'>
            Cras gravida arcu tincidunt, suscipit velit sed, porta sapien.
            Maecenas a aliquam lectus. Vivamus consequat purus quis ligula
            vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet
            venenatis faucibus. Praesent aliquet convallis.
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
                <FontAwesomeIcon icon={faAngleRight} /> Built with HTML5 and
                CSS3
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} /> SEO Optimized, Well
                organized, commented & clean code
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} /> Cross-Browser
                Compatibility: Chrome, Firefox, Safari, IE9 ~ IE11
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Introducing;
