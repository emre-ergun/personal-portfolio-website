import React, { useState } from 'react';
import { logo } from '../assets';
import { HamburgerMenu } from '../components';

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => {
    setIsClicked(clicked => !clicked);
  };

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-slate-500 shadow-lg">
      <nav className="flex justify-between items-center max-container px-4">
        <div className="hover:animate-move-right">
          <a href="#home">
            <img src={logo} alt="logo" className="w-16 h-16" />
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-8 text-2xl">
            <li>
              <a href="#home">Home</a>
            </li>
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
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <HamburgerMenu />
        </div>
      </nav>
      {isClicked && (
        <div
          className="absolute bg-white w-full h-screen origin-top animate-open-menu md:hidden"
          onClick={toggleMenu}
        >
          <ul className="flex flex-col justify-center items-end mt-4 pr-4 space-y-4 text-2xl">
            <li>
              <a href="#home">Home</a>
            </li>
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
      )}
    </header>
  );
};

export default NavBar;
