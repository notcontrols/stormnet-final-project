import React from 'react';

import './style.css';

class SkillsContent extends React.Component {
  render() {
    return (
      <div className={`skills_content skills_content-${this.props.theme}`}>
        <div className={`title skills_title-${this.props.theme}`}>Incredible Skills</div>
        <div className='gradientLine'></div>
        <div className={`subTitle skills_subtitle-${this.props.theme}`}>
          Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
          Nulla vehicula nibh vel ante commodo feugiat.
        </div>
        <div className={`skills_text skills_text-${this.props.theme}`}>
          Cras gravida arcu tincidunt, suscipit velit sed, porta sapien.
          Maecenas a aliquam lectus. Vivamus consequat purus quis ligula
          vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet
          venenatis faucibus. Praesent aliquet convallis.
        </div>
        <div className='progress'>
          <div className={`progress_title progress_title-${this.props.theme}`}>Web Design</div>
          <div className='progress_value' style={{ left: '80%' }}>
            85%
          </div>
          <div className={`progress_bg progress_bg-${this.props.theme}`}>
            <div className='progress_bar'></div>
          </div>
        </div>
        <div className='progress'>
          <div className={`progress_title progress_title-${this.props.theme}`}>WordPress Development</div>
          <div className='progress_value' style={{ left: '90%' }}>
            95%
          </div>
          <div className={`progress_bg progress_bg-${this.props.theme}`}>
            <div className='progress_bar' style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className='progress'>
          <div className={`progress_title progress_title-${this.props.theme}`}>SEO & Online Marketing</div>
          <div className='progress_value' style={{ left: '70%' }}>
            75%
          </div>
          <div className={`progress_bg progress_bg-${this.props.theme}`}>
            <div className='progress_bar' style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className='progress'>
          <div className={`progress_title progress_title-${this.props.theme}`}>Mobile Apps</div>
          <div className='progress_value' style={{ left: '75%' }}>
            80%
          </div>
          <div className={`progress_bg progress_bg-${this.props.theme}`}>
            <div className='progress_bar' style={{ width: '75%' }}></div>
          </div>
        </div>
        <a href='#' className='button_skills'>
          <span>MEET OUR TEAM</span>
        </a>
      </div>
    );
  }
}

export default SkillsContent;
