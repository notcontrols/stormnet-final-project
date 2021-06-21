import React from 'react';

import './style.css';

import AppHeaderHome from '../../AppHeaderHome';

import Cubanese from './img/logos/cubanese.png';
import Handcraft from './img/logos/handcraft.png';
import Premium from './img/logos/premium.png';
import Genuine from './img/logos/genuine.png';
import Staton from './img/logos/staton.png';
import Southbeach from './img/logos/southbeach.png';
import Haus from './img/logos/haus.png';
import Newyork from './img/logos/newyork.png';

class Partners extends React.Component {
  render() {
    return (
      <div className='partners'>
        <div className='homeTitle'>
          <AppHeaderHome
            title='The Best Partners'
            subTitle='Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            Nulla vehicula nibh vel ante commodo feugiat.'
          />
        </div>
        <div class='gridContainerPartners'>
          <div class='partner1'>
            <img src={Cubanese} />
          </div>
          <div class='partner2'>
            <img src={Handcraft} />
          </div>
          <div class='partner3'>
            <img src={Premium} />
          </div>
          <div class='partner4'>
            <img src={Genuine} />
          </div>
          <div class='partner5'>
            <img src={Staton} />
          </div>
          <div class='partner6'>
            <img src={Southbeach} />
          </div>
          <div class='partner7'>
            <img src={Haus} />
          </div>
          <div class='partner8'>
            <img src={Newyork} />
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
