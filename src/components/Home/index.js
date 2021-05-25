import React from 'react';
import Footer from '../Footer';

import './style.css';
import display_icon from './img/advantages/display_icon.png';
import setting_icon from './img/advantages/setting_icon.png';
import design_icon from './img/advantages/design_icon.png';
import support_icon from './img/advantages/support_icon.png';
import Multiple from './img/features/Multiple.png';
import Modern from './img/features/Modern.png';
import Powerful from './img/features/Powerful.png';
import Incredible from './img/features/Incredible.png';
import Optimized from './img/features/Optimized.png';
import Flexible from './img/features/Flexible.png';

class HomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='advantages'>
          <div className='card'>
            <div className='imageContainer'>
              <img src={display_icon} alt={'icon'} />
            </div>
            <h4>100% Responsive</h4>
            <p>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
              viverra. <br />
              Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis
              orci gravida volutpat.
            </p>
          </div>
          <div className='card'>
            <div className='imageContainer'>
              <img src={setting_icon} alt={'icon'} />
            </div>
            <h4>Powerfull Admin</h4>
            <p>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
              viverra. <br />
              Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis
              orci gravida volutpat.
            </p>
          </div>
          <div className='card'>
            <div className='imageContainer'>
              <img src={design_icon} alt={'icon'} />
            </div>
            <h4>Incredible Design</h4>
            <p>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
              viverra. <br />
              Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis
              orci gravida volutpat.
            </p>
          </div>
          <div className='card'>
            <div className='imageContainer'>
              <img src={support_icon} alt={'icon'} />
            </div>
            <h4>The Best Support</h4>
            <p>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
              viverra. <br />
              Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis
              orci gravida volutpat.
            </p>
          </div>
        </div>
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
              {/* <img src={button_light} /> */}
              <span>TAKE A TOUR</span>
            </a>
          </div>
          <div className='triangle'></div>
        </div>
        <div className='portfolio'>
          <div className='portfolioTitle'>
            <div className='title'>Selected Case Studies</div>
            <div className='gradientLine'></div>
            <div className='subTitle'>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
              viverra. Nulla vehicula nibh vel ante commodo feugiat.
            </div>
          </div>
          <div className='portfolioGridContainer'>
            <div className='portfolioImage1'></div>
            <div className='portfolioImage2'></div>
            <div className='portfolioImage3'></div>
            <div className='portfolioImage4'></div>
            <div className='portfolioImage5'></div>
            <div className='portfolioImage6'></div>
            <div className='portfolioImage7'></div>
          </div>
        </div>
        <div className='callToAction'>
          Become A Part Of TheFox Business Community Today
          <a className='buttonCallToAction' href='#'>
            PURCHASE NOW
          </a>
        </div>
        <div className='featuresGridContainer'>
          <div className='features1'>
            <img src={Multiple} />
            <div className='featuresTitle'>Multiple Layouts</div>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat.
          </div>
          <div className='features2'>
            <img src={Modern} />
            <div className='featuresTitle'>Modern Designs</div>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat.
          </div>
          <div className='features3'>
            <img src={Powerful} />
            <div className='featuresTitle'>Powerful Shopping</div>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat.
          </div>
          <div className='features4'>
            <img src={Incredible} />
            <div className='featuresTitle'>Incredible Support</div>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat.
          </div>
          <div className='features5'>
            <img src={Flexible} />
            <div className='featuresTitle'>Flexible Admin Options</div>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat.
          </div>
          <div className='features6'>
            <img src={Optimized} />
            <div className='featuresTitle'>Optimized for SEO</div>
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat.
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
