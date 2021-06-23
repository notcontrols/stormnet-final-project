import React from 'react';

import '../style.css';

import Laptop from './img/laptop.png';

class LaptopImage extends React.Component {
  render() {
    return (
      <>
        <img className='introImage' src={Laptop} />
      </>
    );
  }
}

export default LaptopImage;
