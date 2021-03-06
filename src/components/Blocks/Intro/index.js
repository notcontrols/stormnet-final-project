import React from 'react';

import './style.css';

import LaptopImage from './LaptopImage'
import ButtonTake from '../../Buttons/Take-a-tour';
import AppTitleHome from '../../AppTitleHome';

class Intro extends React.Component {
  render() {
    return (
      <div className='intro'>
        <LaptopImage />
        <div className='introContent'>
          <AppTitleHome
            title='Great Theme for Your Business'
            subTitle='Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            Nulla vehicula nibh vel ante commodo feugiat.'
          />
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
