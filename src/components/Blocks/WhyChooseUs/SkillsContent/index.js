import React from 'react';

import './style.css';

class SkillsContent extends React.Component {
  render() {
    return (
      <div className='skills_content'>
        <div className='title skills_title'>Incredible Skills</div>
        <div className='gradientLine'></div>
        <div className='subTitle  skills_subTitle'>
          Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
          Nulla vehicula nibh vel ante commodo feugiat.
        </div>
        <div className='skills_text'>
          Cras gravida arcu tincidunt, suscipit velit sed, porta sapien.
          Maecenas a aliquam lectus. Vivamus consequat purus quis ligula
          vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet
          venenatis faucibus. Praesent aliquet convallis.
        </div>
        <div class='progress'>
          <div class='progress_title'>Web Design</div>
          <div class='progress_value' style={{ left: '80%' }}>
            85%
          </div>
          <div class='progress_bg'>
            <div class='progress_bar'></div>
          </div>
        </div>
        <div class='progress'>
          <div class='progress_title'>WordPress Development</div>
          <div class='progress_value' style={{ left: '90%' }}>
            95%
          </div>
          <div class='progress_bg'>
            <div class='progress_bar' style={{ width: '90%' }}></div>
          </div>
        </div>
        <div class='progress'>
          <div class='progress_title'>SEO & Online Marketing</div>
          <div class='progress_value' style={{ left: '70%' }}>
            75%
          </div>
          <div class='progress_bg'>
            <div class='progress_bar' style={{ width: '70%' }}></div>
          </div>
        </div>
        <div class='progress'>
          <div class='progress_title'>Mobile Apps</div>
          <div class='progress_value' style={{ left: '75%' }}>
            80%
          </div>
          <div class='progress_bg'>
            <div class='progress_bar' style={{ width: '75%' }}></div>
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
