import React from 'react';

import './style.css';

import BigTitle from '../BigTitle';
import ContactFormShortcodes from '../Blocks/ContactFormShortcodes';
import CallToAction from '../Blocks/CallToAction';
import Footer from '../Footer';

class Shortcodes extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='shortcodes_main-image'>
          <BigTitle title='CONTACT US' subtitle='Dream Big. Think Different' />
        </div>
        <ContactFormShortcodes />
        <CallToAction bgcolor='#37ceff' />
        <Footer />
      </div>
    );
  }
}

export default Shortcodes;
