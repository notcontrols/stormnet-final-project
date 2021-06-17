import React from 'react';

import './style.css';

import ButtonTake from '../../Buttons/Take-a-tour';

import Laptop from './img/laptop.png';

class Intro extends React.Component {
  render() {
    return (
      <div className='intro'>
        <img className='introImage' src={Laptop} />
        <div className='introContent'>
          <div className='title'>Great Theme for Your Business</div>
          <div className='gradientLine'></div>
          <div className='subTitle'>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            Nulla vehicula nibh vel ante commodo feugiat.
          </div>
          <div className='introducingText'>
            Cras gravida arcu tincidunt, suscipit velit sed, porta sapien.
            Maecenas a aliquam lectus. Vivamus consequat purus quis ligula
            vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet
            venenatis faucibus. Praesent aliquet convallis.
          </div>
          <ButtonTake />
        </div>
      </div>
    );
  }
}

export default Intro;