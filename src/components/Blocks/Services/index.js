import React from 'react';

import './style.css';

import ButtonTake from '../../Buttons/Take-a-tour';

import Web_design from './img/Web_design.png';
import Ecommerce from './img/Ecommerce.png';
import Video_advertising from './img/Video_advertising.png';
import Photography from './img/Photography.png';
import Graphic_design from './img/Graphic_design.png';
import Support_tools from './img/Support_tools.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class Services extends React.Component {
  render() {
    return (
      <div className='services'>
        <div className='leftBlock'>
          <div className='serviceHeader'>What We Do</div>
          <div className='gradientLine'></div>
          <div className='serviceSubHeader'>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            Nulla vehicula nibh vel ante commodo feugiat.
          </div>
          <div className='serviceText'>
            TheFox include design that can be used for any type of website:
            business, corporate, portfolio, blog, products, magazine, etc. Buy
            TheFox and join our awesome community, let’s make TheFox better
            together!
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
              <li>
                <FontAwesomeIcon icon={faAngleRight} /> 100% Responsive Theme
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} /> Comes with the Visual
                Composer, most awesome visual page builder
              </li>
            </ul>
          </div>
          <ButtonTake />
        </div>
        <div class='rightBlock'>
          <div class='videoAdvertising serviceCard'>
            <img src={Video_advertising} />
            <div className='serviceCardHeader'>Video Advertising</div>
            <p>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra
            </p>
            <a href='#'>
              <FontAwesomeIcon icon={faAngleRight} /> Learn More
            </a>
          </div>
          <div class='ecommerce serviceCard'>
            <img src={Ecommerce} />
            <div className='serviceCardHeader'>Ecommerce</div>
            <p>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra
            </p>
            <a href='#'>
              <FontAwesomeIcon icon={faAngleRight} /> Learn More
            </a>
          </div>
          <div class='webDesign serviceCard'>
            <img src={Web_design} />
            <div className='serviceCardHeader'>Web Design</div>
            <p>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra
            </p>
            <a href='#'>
              <FontAwesomeIcon icon={faAngleRight} /> Learn More
            </a>
          </div>
          <div class='photography serviceCard'>
            <img src={Photography} />
            <div className='serviceCardHeader'>Photography</div>
            <p>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra
            </p>
            <a href='#'>
              <FontAwesomeIcon icon={faAngleRight} /> Learn More
            </a>
          </div>
          <div class='graphicDesign serviceCard'>
            <img src={Graphic_design} />
            <div className='serviceCardHeader'>Graphic Design</div>
            <p>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra
            </p>
            <a href='#'>
              <FontAwesomeIcon icon={faAngleRight} /> Learn More
            </a>
          </div>
          <div class='supportTools serviceCard'>
            <img src={Support_tools} />

            <div className='serviceCardHeader'>Support Tools</div>
            <p>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra
            </p>
            <a href='#'>
              <FontAwesomeIcon icon={faAngleRight} /> Learn More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
