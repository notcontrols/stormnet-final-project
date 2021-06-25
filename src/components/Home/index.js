import React from 'react';

import './style.css';

import Footer from '../Footer';
import Introducing from '../Blocks/Introducing';
import Advantages from '../Blocks/Advantages';
import PortfolioHome from '../Blocks/PortfolioHome';
import CallToAction from '../Blocks/CallToAction';
import FeaturesHome from '../Blocks/FeaturesHome';
import Intro from '../Blocks/Intro';
import Statistic from '../Blocks/Statistic';
import WhatWeDo from '../Blocks/Services/WhatWeDo';
import BestServices from '../Blocks/Services/BestServices';
import Partners from '../Blocks/Partners';
import Pricing from '../Blocks/Pricing';
import VideoBusiness from '../Blocks/VideoBusiness';
import ChooseContent from '../Blocks/WhyChooseUs/ChooseContent';
import SkillsContent from '../Blocks/WhyChooseUs/SkillsContent';
import OurBlog from '../Blocks/Blog';
import ContactFrom from '../Blocks/ContactForm';
import Slider from '../Slider';
import BigSlider from '../BigSlider';

class HomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <BigSlider />
        <Advantages />
        <Introducing />
        <PortfolioHome />
        <CallToAction bgcolor='#82b440'/>
        <FeaturesHome />
        <Intro />
        <Statistic />
        <Slider />
        <div className='services'>
          <WhatWeDo />
          <BestServices />
        </div>
        <Partners />
        <Pricing />
        <VideoBusiness />
        <CallToAction bgcolor='#82b440' />
        <div className='chooseSkill'>
          <ChooseContent />
          <SkillsContent theme='dark'/>
        </div>
        <Slider />
        <OurBlog />
        <ContactFrom theme='dark' />
        <CallToAction bgcolor='#82b440' />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
