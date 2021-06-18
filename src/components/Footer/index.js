import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faVimeoV,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

import logo from './img/Logo.png';

import './style.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='footer_wrapper'>
          <div className='footer_contacts'>
            <div className='widget_wrap'>
              <div className='widget widget_text'>
                <div className='footer_logo'>
                <img src={logo} alt={'logo'} className='logo' />
                <p>THEFOX PLUS</p>
                MADE FOR BUSINESS
                </div>
              </div>
            </div>
            <div className='widget_wrap'>
              <div className='widget widget_text'>
                <h2>Postal Address</h2>
                  <address>
                    PO Box 16122 Collins Street <br />
                    West<br />
                    Victoria 8007<br />
                    Australia
                  </address>
              </div>
            </div>
            <div className='widget_wrap'>
              <div className='widget widget_text'>
                <h2>Envato Headquarters</h2>
                <address>
                    121 King Street, <br />
                    Melbourne <br />
                    Victoria 3000 <br />
                    Australia
                  </address>
              </div>
            </div>
            <div className='widget_wrap'>
              <div className='widget widget_text'>
                <h2>Tranmautritam</h2>
                <address>
                    <a href="mailto:Tranmautritam@gmail.com">Tranmautritam@gmail.com</a><br />
                    <a href="tel:+84935815989"> +84 935 815 989 </a> <br />
                    <a href="http://www.tranmautritam.com">tranmautritam.com</a><br />
                    Vietnam
                  </address>
              </div>
            </div>
          </div>
        </div>
        <div className='footer_links'>
        <div className='copyright'>
          © 2015 All Rights Reserved
          <a className='tranmautritam' href="http://www.tranmautritam.com"> Tranmautritam </a> - Envato Pty Ltd.
          Contact the Envato Market Help Team.
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
        </div>
      </footer>
    );
  }
}

export default Footer;
