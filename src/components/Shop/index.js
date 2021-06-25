import React from 'react';

import './style.css'

import BigTitle from '../BigTitle';
import Advantages from '../Blocks/Advantages';

class Shop extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='shop_main-image'>
          <BigTitle
            title='CREATIVE MESS'
            subtitle='We make the best design around'
          />
        </div>
        <Advantages />
        
      </div>
    );
  }
}

export default Shop;
