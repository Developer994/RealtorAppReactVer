import './App.css';
import Navbar from './navbar/Navbar';
import React from 'react';
import WelcomeBox from './introMessage/WelcomeBox';
import slides from './slides/Slides';
import ImageSlider from './slides/ImageSlider';
import './slides/styles.css';

import './mediaQueries.css';

function App() {
  // const containerStyles = {
  //   width: '500px',
  //   height: '280px',
  //   margin: '0 auto',
  // };
  return (
    <div className='mainContainer'>
      <div className='introContainer'>
        <Navbar />
        <WelcomeBox />
      </div>

      <div className='housesContainer'>
        <div className='housesHeader'>Top Current Houses For Sale</div>

        <div className='containerStyles'>
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}

export default App;
