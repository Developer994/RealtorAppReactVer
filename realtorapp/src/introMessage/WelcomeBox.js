import React from 'react';
import './WelcomeBox.css';

function WelcomeBox() {
  return (
    <div className='wlcmBox'>
      <p className='openParagraph'>
        <br />
        <br />
        Welcome to the the Housing App! <br />I am a professional home realtor
        who strives to meet client's home searching needs.
      </p>
      <img
        className='profilePic'
        alt='profilePic'
        src={require('./profilePic.png')}
      />
    </div>
  );
}

export default WelcomeBox;
