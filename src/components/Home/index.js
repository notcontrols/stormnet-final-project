import React from 'react';
import Footer from '../Footer';
import Introducing from '../Blocks/Introducing';
import Advantages from '../Blocks/Advantages';
import CallToAction from '../Blocks/CallToAction';
import Services from '../Blocks/Services';
import Partners from '../Blocks/Partners';
import Slider from '../Slider';
import ButtonTake from '../Buttons/Take-a-tour';

import './style.css';

import Multiple from './img/features/Multiple.png';
import Modern from './img/features/Modern.png';
import Powerful from './img/features/Powerful.png';
import Incredible from './img/features/Incredible.png';
import Optimized from './img/features/Optimized.png';
import Flexible from './img/features/Flexible.png';

import Laptop from './img/laptop.png';

class HomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <Advantages />
        <Introducing />
        <div className='portfolio'>
          <div className='homeTitle'>
            <div className='title'>Selected Case Studies</div>
            <div className='gradientLine'></div>
            <div className='subTitle'>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
              viverra. Nulla vehicula nibh vel ante commodo feugiat.
            </div>
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
        <CallToAction />
        <div className='featuresGridContainer'>
          <div className='features1 featuresContent'>
            <img className='featuresImg' src={Multiple} />
            <div className='featuresTitle'>Multiple Layouts</div>
            <div className='featuresText'>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
              viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
              lobortis orci gravida volutpat.
            </div>
          </div>
          <div className='features2 featuresContent'>
            <img className='featuresImg' src={Modern} />
            <div className='featuresTitle'>Modern Designs</div>
            <div className='featuresText'>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
              viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
              lobortis orci gravida volutpat.
            </div>
          </div>
          <div className='features3 featuresContent'>
            <img className='featuresImg' src={Powerful} />
            <div className='featuresTitle'>Powerful Shopping</div>
            <div className='featuresText'>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
              viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
              lobortis orci gravida volutpat.
            </div>
          </div>
          <div className='features4 featuresContent'>
            <img className='featuresImg' src={Incredible} />
            <div className='featuresTitle'>Incredible Support</div>
            <div className='featuresText'>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
              viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
              lobortis orci gravida volutpat.
            </div>
          </div>
          <div className='features5 featuresContent'>
            <img className='featuresImg' src={Optimized} />
            <div className='featuresTitle'>Optimized for SEO</div>
            <div className='featuresText'>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
              viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
              lobortis orci gravida volutpat.
            </div>
          </div>
          <div className='features6 featuresContent'>
            <img className='featuresImg' src={Flexible} />
            <div className='featuresTitle'>Flexible Admin Options</div>
            <div className='featuresText'>
              Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
              viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim
              lobortis orci gravida volutpat.
            </div>
          </div>
        </div>
        <div className='intro'>
          <img className='introImage' src={Laptop} />
          <div className='introContent'>
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
            <ButtonTake />
          </div>
        </div>
        <div className='statistics'>
          <div className='support'>
            <div className='statisticNumber'>966</div>
            <div className='smallGradientLine'></div>
            <div className='statisticDesc'>Support Ticket Solved</div>
          </div>
          <div className='curchases'>
            <div className='statisticNumber'>20K</div>
            <div className='smallGradientLine'></div>
            <div className='statisticDesc'>Purchases</div>
          </div>
          <div className='cups'>
            <div className='statisticNumber'>1832</div>
            <div className='smallGradientLine'></div>
            <div className='statisticDesc'>Cafe Cups</div>
          </div>
          <div className='likes'>
            <div className='statisticNumber'>1.2M</div>
            <div className='smallGradientLine'></div>
            <div className='statisticDesc'>Facebook Likes</div>
          </div>
          <div className='tweets'>
            <div className='statisticNumber'>10K</div>
            <div className='smallGradientLine'></div>
            <div className='statisticDesc'>Tweets</div>
          </div>
          <div className='comments'>
            <div className='statisticNumber'>+18K</div>
            <div className='smallGradientLine'></div>
            <div className='statisticDesc'>Comments</div>
          </div>
        </div>
        <Slider />
        <Services />
        <Partners />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
