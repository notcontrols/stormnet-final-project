import React from 'react';

import './style.css';

class Introducing extends React.Component {
  render() {
    return (
      <div className='introducing'>
      <div className='introducingContent'>
        <div className='title'>Great Theme for Your Business</div>
        <div className='gradientLine'></div>
        <div className='subTitle'>
          Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
          viverra. Nulla vehicula nibh vel ante commodo feugiat.
        </div>
        <div className='introducingText'>
          Cras gravida arcu tincidunt, suscipit velit sed, porta sapien.
          Maecenas a aliquam lectus. Vivamus consequat purus quis ligula
          vestibulum, eget mattis ex fermentum. Donec placerat felis sit
          amet venenatis faucibus. Praesent aliquet convallis.
        </div>
        <a href='#' className='button'>
          <span>TAKE A TOUR</span>
        </a>
      </div>
      <div className='triangle'></div>
    </div>
    );
  }
}

export default Introducing;
