import React from 'react';
import { logo } from '../assets';

const NavBar = () => {
  return (
    <header className="m-2 p-2 sticky top-2">
      <nav className=" flex justify-between items-center max-container">
        <div>
          <a href="#home">
            <img src={logo} alt="logo" className="w-8 h-8" />
          </a>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-4">
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
