import React from 'react';

import './style.css';

class Introducing extends React.Component {
  render() {
    return (
      <div className='callToAction' style={{backgroundColor: this.props.bgcolor}}>
        Become A Part Of TheFox Business Community Today
        <a className='buttonCallToAction' href='#'>
          PURCHASE NOW
        </a>
      </div>
    );
  }
}

export default Introducing;
