import React from 'react';

import './style.css';

import AppHeaderHome from '../../AppHeaderHome';

class PortfolioHome extends React.Component {
  render() {
    return (
      <>
        <div className='portfolio'>
          <div className='homeTitle'>
            <AppHeaderHome
              title='Selected Case Studies'
              subTitle='Curabitur ac lacus arcu. Sed vehicula varius lectus auctor
              viverra. Nulla vehicula nibh vel ante commodo feugiat.'
            />
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
      </>
    );
  }
}

export default PortfolioHome;
