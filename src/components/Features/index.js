import React from 'react';

import './style.css';

import BigTitle from '../BigTitle';
import Advantages from '../Blocks/Advantages';
import FeaturesIntro from '../Blocks/FeaturesIntro';
import Slider from '../Slider';
import AppTitleHome from '../AppTitleHome';
import BestServices from '../Blocks/Services/BestServices';
import ContactFrom from '../Blocks/ContactForm';
import CallToAction from '../Blocks/CallToAction';
import Footer from '../Footer';

import ButtonTake from '../Buttons/Take-a-tour';

import Tablet from './images/tablet.png';

class Features extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='features_main-image'>
          <BigTitle
            title='OUR SERVICES'
            subtitle='Dream Big. Think Different. Do Great'
          />
        </div>
        <Advantages />
        <div className='features_wordpress'>
          <div className='features_wordpress-content'>
            <AppTitleHome
              title='WordPress Development'
              subTitle='Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Nulla vehicula nibh vel ante commodo feugiat.'
            />
            <div className='features_wordpress-text'>
              Cras gravida arcu tincidunt, suscipit velit sed, porta sapien.
              Maecenas a aliquam lectus. Vivamus consequat purus quis ligula
              vestibulum, eget mattis ex fermentumDonec placerat felis sit amet
              venenatis faucibus. Praesent aliquet
            </div>
            <ButtonTake />
          </div>
          <img src={Tablet} className='features_wordpress-image' />
        </div>
        <FeaturesIntro />
        <Slider />
        <div className='features_services'>
          <AppTitleHome
            title='The Best Services'
            subTitle='Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Nulla vehicula nibh vel ante commodo feugiat.'
          />
          <span className='features_padding'></span>
          <BestServices />
        </div>
        <ContactFrom />
        <CallToAction bgcolor='#35c2ea' />
        <Footer />
      </div>
    );
  }
}

export default Features;
