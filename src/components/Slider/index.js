import React from 'react';

import Analysis from './slides/agenda-analysis-business.jpg';
import Hands_watch from './slides/hands_watch.jpg';
import Volkswagen_car from './slides/volkswagen_car.jpg';

import './gallery.css';

class Slider extends React.Component {
  render() {
    return (
      <div class="gallery items-3">
        <div id="item-1" class="control-operator"></div>
        <div id="item-2" class="control-operator"></div>
        <div id="item-3" class="control-operator"></div>
        
        <img src={Analysis} class="item" />
     
        <img src={Hands_watch} class="item" />
  
        <img src={Volkswagen_car} class="item" />
  
        <div class="controls">
          <a href="#item-1" class="control-button">•</a>
          <a href="#item-2" class="control-button">•</a>
          <a href="#item-3" class="control-button">•</a>
        </div>
      </div>
    );
  }
}

export default Slider;
