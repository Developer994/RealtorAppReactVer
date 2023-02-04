// import './App.css';
import Navbar from './navbar/Navbar';
import React from 'react';
import WelcomeBox from './introMessage/WelcomeBox';

function App() {
  return (
    <>
      <div className='introContainer'>
        <Navbar />
        <WelcomeBox />
      </div>

      <div className='housesContainer'></div>
    </>
  );
}

export default App;
