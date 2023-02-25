import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [burgerActiveStat, setBurgerActiveStat] = useState('hamburger');
  const [burgBtns, setBurgBtns] = useState('btnBurger is-hidden');

  const hamburgerHandler = () => {
    if (burgerActiveStat === 'hamburger') {
      setBurgerActiveStat('hamburger is-active');
      setBurgBtns('btnBurger');
    } else {
      setBurgerActiveStat('hamburger');
      setBurgBtns('btnBurger is-hidden');
    }
  };

  return (
    <>
      <nav className='navContainer'>
        {/* <h3>The Realtor App</h3> */}
        <div>
          <img className='logo' alt='logo' src={require('./home-icon.jpg')} />
        </div>
        <div className='btns'>
          <button className='btn btn--1'>Buy</button>

          <button className='btn btn--1'>Sell</button>

          <button className='btn btn--1'>About</button>

          <button className='btn btn--1'>Contact</button>
          <div className='hamburgerDiv'>
            <button onClick={hamburgerHandler} className={burgerActiveStat}>
              {' '}
              {/* The Hamburger classname is set inside burgerActiveStat */}
              <div className='bar'></div>
            </button>
            <nav onClick={hamburgerHandler} className={burgBtns}>
              <button className='btnBurger btnBurger--1'>Buy</button>
              <button className='btnBurger btnBurger--1'>Sell</button>
              <button className='btnBurger btnBurger--1'>About</button>
              <button className='btnBurger btnBurger--1'>Houses</button>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
