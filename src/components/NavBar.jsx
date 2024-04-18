import React from 'react';
import { logo } from '../assets';

const NavBar = () => {
  return (
    <header className="m-2 p-2 sticky top-2 dark:bg-black">
      <nav className=" flex justify-between items-center max-container">
        <div>
          <a href="#home">
            <img src={logo} alt="logo" className="w-8 h-8 dark:bg-white dark:rounded-full" />
          </a>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-4 dark:text-white">
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
