import React from 'react';

import display_icon from './img/display_icon.png';
import setting_icon from './img/setting_icon.png';
import design_icon from './img/design_icon.png';
import support_icon from './img/support_icon.png';

import './style.css';

class Advantages extends React.Component {
  render() {
    return (
      <div className='advantages'>
        <div className='card'>
          <div className='imageContainer'>
            <img src={display_icon} alt={'icon'} />
          </div>
          <h4>100% Responsive</h4>
          <p>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.{' '}
            <br />
            Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci
            gravida volutpat.
          </p>
        </div>
        <div className='card'>
          <div className='imageContainer'>
            <img src={setting_icon} alt={'icon'} />
          </div>
          <h4>Powerfull Admin</h4>
          <p>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.{' '}
            <br />
            Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci
            gravida volutpat.
          </p>
        </div>
        <div className='card'>
          <div className='imageContainer'>
            <img src={design_icon} alt={'icon'} />
          </div>
          <h4>Incredible Design</h4>
          <p>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.{' '}
            <br />
            Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci
            gravida volutpat.
          </p>
        </div>
        <div className='card'>
          <div className='imageContainer'>
            <img src={support_icon} alt={'icon'} />
          </div>
          <h4>The Best Support</h4>
          <p>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.{' '}
            <br />
            Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci
            gravida volutpat.
          </p>
        </div>
      </div>
    );
  }
}

export default Advantages;
