import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div>
        <img className='logo' src={require('./home-icon.jpg')} />
      </div>
      <div className='btns'>
        <button className='btn btn--1'>Sales</button>

        <button className='btn btn--1'>Condos</button>

        <button className='btn btn--1'>Houses</button>

        <button className='btn btn--1'>Contact</button>

        {/* <button className="btn btn--2">Button5</button>  */}
      </div>
    </nav>
  );
}

export default Navbar;
