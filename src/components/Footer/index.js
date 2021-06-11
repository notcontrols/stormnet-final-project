import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faVimeoV, faPinterestP } from '@fortawesome/free-brands-svg-icons'


import './style.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='copyright'>
          © 2015 All Rights Reserved <span className='tranmautritam'>Tranmautritam</span> - Envato Pty Ltd. Contact the
          Envato Market Help Team.
        </div>
        <div className='social'>
          <a href=''>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href=''>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href=''>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href=''>
            <FontAwesomeIcon icon={faVimeoV} />
          </a>
          <a href=''>
            <FontAwesomeIcon icon={faPinterestP} />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
