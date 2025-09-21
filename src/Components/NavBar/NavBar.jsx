import React from 'react';
import navImg from '../.././assets/logo.png'
import dollerCoin from '../../assets/dollar.png';

const NavBar = () => {
    return (
        <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-[60px] h-[60px]" src={navImg} alt='Logo Image'></img>
          </a>
        </div>
        <div className="flex items-center">
          <span className='mr-1'>60000000</span>
          <span className='mr-1'>Coin</span>
          <img className='w-[20px] h-[20px]' src={dollerCoin} alt='Coin Image'></img>
        </div>
      </div>
    );
};

export default NavBar;