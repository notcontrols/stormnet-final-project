import React from 'react';

import BigTitle from '../BigTitle';
import FeaturesHome from '../Blocks/FeaturesHome';
import IntroducingDemos from '../Blocks/IntroducingDemos';
import CallToAction from '../Blocks/CallToAction';
import VideoBusiness from '../Blocks/VideoBusiness';
import ChooseContent from '../Blocks/WhyChooseUs/ChooseContent';
import SkillsContent from '../Blocks/WhyChooseUs/SkillsContent';
import Slider from '../Slider';
import PartnersDemos from '../Blocks/PartnersDemos';
import Footer from '../Footer';

import './style.css';

class Demos extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='demos_main-image'>
          <BigTitle
            title='WE DO THE BEST DESIGN'
            subtitle='Dream Big. Think Different. Do Great'
          />
        </div>
        <div className='demos_features'>
          <FeaturesHome />
        </div>
        <IntroducingDemos />
        <CallToAction bgcolor='#35c2ea' />
        <VideoBusiness />
        <div className='demos_choose-skills'>
          <SkillsContent theme='white' />
          <ChooseContent />
        </div>
        <Slider />
        <PartnersDemos />
        <Footer />
      </div>
    );
  }
}

export default Demos;
