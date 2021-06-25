import React from 'react';

import './style.css';

class ButtonTake extends React.Component {
  render() {
    return (
      <a href='/features' className='button'>
        <span>TAKE A TOUR</span>
      </a>
    );
  }
}

export default ButtonTake;
