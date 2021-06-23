import React from 'react';

import './style.css';

import AppTitleHome from '../../AppTitleHome';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class Pricing extends React.Component {
  render() {
    return (
      <div className='pricing'>
        <div className='homeTitle'>
          <AppTitleHome
            title='Pricing Tables'
            subTitle='Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            Nulla vehicula nibh vel ante commodo feugiat.'
          />
        </div>
        <div className='pricetable'>
          <div className='personal pricetable-cell'>
            <div className='pricetable-header'>
              <h3 className='pricetable-name'>Personal</h3>
              <h4 className='pricetable-price'>
                From
                <span className='pricetable_value'> $99 </span>
                Per Months
              </h4>
            </div>
            <div className='features'>
              <div className='pricetable-feature'>
                <FontAwesomeIcon icon={faCheck} /> 01 PSD Pack
                <div className='pricetable-desc'>
                  Curabitur ac lacus arcu. Sed vehicula
                  <br />
                  lectus auctor viverra. Vehicula.
                </div>
              </div>
              <div className='pricetable-feature'>
                <FontAwesomeIcon icon={faCheck} /> 01 WordPress Install
                <div className='pricetable-desc'>
                  Curabitur ac lacus arcu. Sed vehicula
                  <br /> lectus auctor viverra. Vehicula.
                </div>
              </div>
              <div className='pricetable-feature'>
                <FontAwesomeIcon icon={faCheck} /> 100 Support Ticket
                <div className='pricetable-desc'>
                  Curabitur ac lacus arcu. Sed vehicula
                  <br /> lectus auctor viverra. Vehicula.
                </div>
              </div>
            </div>
            <div className='pricetable-button'>
              <a href='#'>GET STARTED NOW </a>
            </div>
          </div>
          <div className='business pricetable-cell pricetable-recommend'>
            <div className='pricetable-header'>
              <h3 className='pricetable-name'>Business</h3>
              <h4 className='pricetable-price'>
                From
                <span className='pricetable_value'> $599 </span>
                Per Months
              </h4>
            </div>

            <div className='features'>
              <div className='pricetable-feature'>
                <FontAwesomeIcon icon={faCheck} /> 05 PSD Pack
                <div className='pricetable-desc'>
                  Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
                  Vehicula.
                </div>
              </div>
              <div className='pricetable-feature'>
                <FontAwesomeIcon icon={faCheck} /> 10 WordPress Install
                <div className='pricetable-desc'>
                  Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
                  Vehicula.
                </div>
              </div>
              <div className='pricetable-feature'>
                <FontAwesomeIcon icon={faCheck} /> 1000 Support Ticket
                <div className='pricetable-desc'>
                  Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
                  Vehicula.
                </div>
              </div>
            </div>

            <div className='pricetable-button'>
              <a href='#'>GET STARTED NOW </a>
            </div>
          </div>
          <div className='ultimate  pricetable-cell'>
            <div className='pricetable-header'>
              <h3 className='pricetable-name'>Ultimate</h3>
              <h4 className='pricetable-price'>
                From
                <span className='pricetable_value'> $999 </span>
                Per Months
              </h4>
            </div>
            <div className='features'>
              <div className='pricetable-feature pricetable-first'>
                <FontAwesomeIcon icon={faCheck} /> 10 PSD Pack
                <div className='pricetable-desc'>
                  Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
                  Vehicula.
                </div>
              </div>
              <div className='pricetable-feature'>
                <FontAwesomeIcon icon={faCheck} /> 30 WordPress Install
                <div className='pricetable-desc'>
                  Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
                  Vehicula.
                </div>
              </div>
              <div className='pricetable-feature '>
                <FontAwesomeIcon icon={faCheck} /> Support Unlimited
                <div className='pricetable-desc'>
                  Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
                  Vehicula.
                </div>
              </div>
            </div>

            <div className='pricetable-button'>
              <a href='#'>GET STARTED NOW</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
