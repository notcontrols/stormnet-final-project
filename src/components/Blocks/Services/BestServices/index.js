import React from 'react';

import '../style.css';

import Web_design from '../img/Web_design.png';
import Ecommerce from '../img/Ecommerce.png';
import Video_advertising from '../img/Video_advertising.png';
import Photography from '../img/Photography.png';
import Graphic_design from '../img/Graphic_design.png';
import Support_tools from '../img/Support_tools.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class Services extends React.Component {
  render() {
    return (
      <div class='services_grid'>
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
    );
  }
}

export default Services;
