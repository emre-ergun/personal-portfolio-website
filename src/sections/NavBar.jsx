import React, { useState } from 'react';
import { logo } from '../assets';
import { HamburgerMenu } from '../components';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(open => !open);
  };

  return (
    <header className="sticky top-0 z-10 bg-white shadow-lg">
      <nav className="flex justify-between items-center max-container px-4">
        <div>
          <a href="#home">
            <img src={logo} alt="logo" className="w-16 h-16"/>
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-8 text-xl font-primary font-semibold">
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
          <HamburgerMenu isClicked={isMenuOpen} />
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className="absolute bg-white pt-16 right-0 w-full h-screen origin-right animate-open-menu md:hidden"
          onClick={toggleMenu}
        >
          <ul className="flex flex-col justify-center items-center mt-4 px-8 space-y-4 text-xl font-primary font-semibold">
            <li className="p-2 w-full text-center border-2 border-black rounded-lg hover:text-slate-600">
              <a href="#home">Home</a>
            </li>
            <li className="p-2 w-full text-center border-2 border-black rounded-lg hover:text-slate-600">
              <a href="#skill">Skills</a>
            </li>
            <li className="p-2 w-full text-center border-2 border-black rounded-lg hover:text-slate-600">
              <a href="#project">Projects</a>
            </li>
            <li className="p-2 w-full text-center border-2 border-black rounded-lg hover:text-slate-600">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
          <p className="my-16 text-sm text-center text-slate-500">
            Copyright &copy; {new Date().getFullYear()} EngramSoft
          </p>
        </div>
      )}
    </header>
  );
};

export default NavBar;
