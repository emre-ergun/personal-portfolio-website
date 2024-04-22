import React from 'react';
import { logo } from '../assets';
import HamburgerMenu from './HamburgerMenu';

const NavBar = () => {
  return (
    <header className="m-2 p-2 sticky top-2">
      <nav className=" flex justify-between items-center max-container">
        <div>
          <a href="#home">
            <img src={logo} alt="logo" className="w-16 h-16" />
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-8 text-2xl">
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
        <div className='md:hidden'>
          <HamburgerMenu style="" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
