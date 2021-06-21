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
import Services from '../Blocks/Services';
import Partners from '../Blocks/Partners';
import Pricing from '../Blocks/Pricing';
import VideoBusiness from '../Blocks/VideoBusiness';
import Choose from '../Blocks/WhyChooseUs';
import OurBlog from '../Blocks/Blog';
import ContactFrom from '../Blocks/ContactForm';
import Slider from '../Slider';
import BigSlider from '../BigSlider';
import AppHeaderHome from '../AppHeaderHome';

class HomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <BigSlider />
        <Advantages />
        <Introducing />
        <PortfolioHome />
        <CallToAction />
        <FeaturesHome />
        <Intro />
        <Statistic />
        <Slider />
        <Services />
        <Partners />
        <Pricing />
        <VideoBusiness />
        <CallToAction />
        <Choose />
        <Slider />
        <OurBlog />
        <ContactFrom />
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
