import React from 'react';

import '../style.css';

import ButtonTake from '../../../Buttons/Take-a-tour';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class WhatWeDo extends React.Component {
  render() {
    return (
      <div className='services_what-we-do'>
        <div className='service_header'>What We Do</div>
        <div className='gradientLine'></div>
        <div className='service_subheader'>
          Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
          Nulla vehicula nibh vel ante commodo feugiat.
        </div>
        <div className='service_text'>
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
              <FontAwesomeIcon icon={faAngleRight} /> Built with HTML5 and CSS3
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
    );
  }
}

export default WhatWeDo;
