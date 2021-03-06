import React from 'react';

import './style.css';

class ContactFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', phone: '', company: '', budget: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.email]: event.target.value,
      [event.target.phone]: event.target.value,
      [event.target.company]: event.target.value,
      [event.target.budget]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // alert('A form was submitted: ' + this.state);
    console.log(`A form was submitted: ${this.state}`);
    fetch('https://test.com/api', {
      method: 'POST',
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state),
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .catch((error) => {
        console.warn(error);
        alert(error.name + ': ' + error.message);
      });

    event.preventDefault();
  };

  render() {
    return (
      <div className='contact_form' id='contact_form'>
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
          <form onSubmit={this.handleSubmit} className='home_form'>
            <input
              type='text'
              value={this.state.value}
              name='name'
              className='home_form-control'
              required
              placeholder='Name'
              onChange={this.handleChange}
            />

            <input
              type='email'
              value={this.state.value}
              name='email'
              className='home_form-control'
              required
              placeholder='Email'
              onChange={this.handleChange}
            />

            <input
              type='tel'
              value={this.state.value}
              name='phone'
              className='home_form-control'
              required
              placeholder='Phone'
              onChange={this.handleChange}
            />
            <input
              type='text'
              value={this.state.value}
              name='company'
              className='home_form-control'
              required
              placeholder='Company Name'
              onChange={this.handleChange}
            />
            <select
              name='budget'
              value={this.state.value}
              className='home_form-control home_form-select'
              required
              onChange={this.handleChange}
            >
              <option value='Your Budget'>Your Budget</option>
              <option>100$</option>
              <option>200$</option>
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
