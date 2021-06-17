import React from 'react';

import './style.css';

import Multiple from './img/features/Multiple.png';
import Modern from './img/features/Modern.png';
import Powerful from './img/features/Powerful.png';
import Incredible from './img/features/Incredible.png';
import Optimized from './img/features/Optimized.png';
import Flexible from './img/features/Flexible.png';

class FeaturesHome extends React.Component {
  render() {
    return (
      <div className='featuresGridContainer'>
        <div className='features1 featuresContent'>
          <img className='featuresImg' src={Multiple} />
          <div className='featuresTitle'>Multiple Layouts</div>
          <div className='featuresText'>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci
            gravida volutpat.
          </div>
        </div>
        <div className='features2 featuresContent'>
          <img className='featuresImg' src={Modern} />
          <div className='featuresTitle'>Modern Designs</div>
          <div className='featuresText'>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci
            gravida volutpat.
          </div>
        </div>
        <div className='features3 featuresContent'>
          <img className='featuresImg' src={Powerful} />
          <div className='featuresTitle'>Powerful Shopping</div>
          <div className='featuresText'>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci
            gravida volutpat.
          </div>
        </div>
        <div className='features4 featuresContent'>
          <img className='featuresImg' src={Incredible} />
          <div className='featuresTitle'>Incredible Support</div>
          <div className='featuresText'>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci
            gravida volutpat.
          </div>
        </div>
        <div className='features5 featuresContent'>
          <img className='featuresImg' src={Optimized} />
          <div className='featuresTitle'>Optimized for SEO</div>
          <div className='featuresText'>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci
            gravida volutpat.
          </div>
        </div>
        <div className='features6 featuresContent'>
          <img className='featuresImg' src={Flexible} />
          <div className='featuresTitle'>Flexible Admin Options</div>
          <div className='featuresText'>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci
            gravida volutpat.
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturesHome;
