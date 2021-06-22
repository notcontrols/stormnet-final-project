import React from 'react';

import './style.css';

import Cubanese from './img/logos/cubanese.png';
import Handcraft from './img/logos/handcraft.png';
import Premium from './img/logos/premium.png';
import Genuine from './img/logos/genuine.png';
import Staton from './img/logos/staton.png';
import Southbeach from './img/logos/southbeach.png';
import Haus from './img/logos/haus.png';
import Newyork from './img/logos/newyork.png';

class PartnersDemos extends React.Component {
  render() {
    return (
      <div className='demos_partners'>
        <div class='containerPartners'>
          <div class='partner1'>
            <img src={Staton} />
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
            <img src={Cubanese} />
          </div>
          <div class='partner6'>
            <img src={Southbeach} />
          </div>
          <div class='partner7'>
            <img src={Newyork} />
          </div>
          <div class='partner8'>
            <img src={Haus} />
          </div>
        </div>
      </div>
    );
  }
}

export default PartnersDemos;
