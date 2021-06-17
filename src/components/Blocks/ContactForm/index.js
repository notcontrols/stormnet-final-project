import React from 'react';

import './style.css';

class ContactFrom extends React.Component {
  render() {
    return (
      <div className='contact_form'>
        <div className='contact_form-title'>
          <div className='title'>Contact Us Today. Let‘s Work Together</div>
          <div className='gradientLine'></div>
          <div className='subTitle'>
            Whether you're a local or national business, big brand or high
            profile celebrity, we’ve worked with them all – we can help you get
            where you want to be.
          </div>
        </div>
      </div>
    );
  }
}

export default ContactFrom;
