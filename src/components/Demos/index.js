import React from 'react';

import FeaturesHome from '../Blocks/FeaturesHome';
import IntroducingDemos from '../Blocks/IntroducingDemos';
import CallToAction from '../Blocks/CallToAction';
import VideoBusiness from '../Blocks/VideoBusiness';
import Choose from '../Blocks/WhyChooseUs';
import Slider from '../Slider';
import PartnersDemos from '../Blocks/PartnersDemos';
import Footer from '../Footer';

import './style.css';

class Demos extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='demos_main-image'>
          <div className='demos_title'>WE DO THE BEST DESIGN</div>
          <div className='demos_subtitle'>
            Dream Big. Think Different. Do Great
          </div>
        </div>
        <div className='demos_features'>
          <FeaturesHome />
        </div>
        <IntroducingDemos />
        <CallToAction />
        <VideoBusiness />
        <Choose />
        <Slider />
        <PartnersDemos />
        <Footer />
      </div>
    );
  }
}

export default Demos;
