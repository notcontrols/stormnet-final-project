import React from 'react';

import './style.css';

class ContactFrom extends React.Component {
  render() {
    return (
      <div className='contact_form'>
        <div className='contact_form-title'>
          <div className='title'>Contact Us Today. Let‘s Work Together</div>
          <div className='gradientLine'></div>
          <div className='subTitle'>
            Whether you're a local or national business, big brand or high
            profile celebrity, we’ve worked with <br /> them all – we can help
            you get where you want to be.
          </div>
        </div>
        <div className='contact_form-wrapper'>
          <form
            name=''
            action='/'
            method='post'
            className='home_form'
            novalidate='novalidate'
          >
            <input
              type='text'
              name='your-name'
              value=''
              className='home_form-control home_form-text'
              aria-required='true'
              aria-invalid='false'
              placeholder='Name'
            />

            <input
              type='email'
              name='your-email'
              value=''
              className='home_form-control home_form-text home_form-email'
              aria-required='true'
              aria-invalid='false'
              placeholder='Email'
            />

            <input
              type='tel'
              name='your-tel'
              value=''
              className='home_form-control home_form-text home_form-tel'
              aria-required='true'
              aria-invalid='false'
              placeholder='Phone'
            />
              <input
                type='text'
                name='your-subject'
                value=''
                className='home_form-control wpcf7-text'
                aria-required='true'
                aria-invalid='false'
                placeholder='Company Name'
              />
            <select
              name='menu'
              className='home_form-control home_form-select'
              aria-required='true'
              aria-invalid='false'
            >
              <option value='Your Budget'>Your Budget</option>
              <option value='100$'>100$</option>
              <option value='200$'>200$</option>
            </select>
            <input
              type='submit'
              value='GET STARTED NOW'
              className='home_form-submit'
            />
          </form>
          <div className='prompt_form'>
            <p>All field are required</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactFrom;
