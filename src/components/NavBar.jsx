import React from 'react';
import logo from '../assets/minilogo.png';

const NavBar = () => {
  return (
    <header className="mx-4 mt-6 sticky top-6">
      <nav className="max-container flex justify-between items-center">
        <div>
          <a href="#home">
            <img src={logo} alt="logo" className="w-6 h-6" />
          </a>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-4 ">
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
      </nav>
    </header>
  );
};

export default NavBar;
