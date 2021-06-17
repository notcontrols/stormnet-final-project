import React from 'react';

import './style.css';

class VideoBusiness extends React.Component {
  render() {
    return (
      /* <div className='video'>
          <iframe
            src='https://player.vimeo.com/video/213928187?title=0&byline=0&portrait=0'
            frameborder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
        <script src='https://player.vimeo.com/api/player.js'></script> */
      <div className='video'>
        <iframe
          width='100%'
          height='800'
          src='https://www.youtube.com/embed/ZgqwjeGj4nw?controls=0'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default VideoBusiness;
