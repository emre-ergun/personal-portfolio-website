import React, { useState } from 'react';
import { HamburgerMenu } from '../components';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [color, setColor] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(open => !open);
  };

  const changeColor = () => {
    setColor(window.scrollY >= 90);
  };

  window.addEventListener('scroll', changeColor)

  return (
    <header
      className={`fixed w-full top-0 z-10 ${
        color ? 'bg-black bg-opacity-40 transition-colors duration-1000' : ''
      }`}
    >
      <nav className="flex justify-between items-center max-container px-4 py-2">
        <div>
          <a href="#home">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 564.000000 502.000000"
              preserveAspectRatio="xMidYMid meet"
              className="fill-neutral-200 h-10 hover:fill-neutral-500"
            >
              <g
                transform="translate(0.000000,502.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  d="M3199 4810 c-467 -42 -903 -248 -1219 -577 -183 -190 -306 -390 -385
                  -626 -195 -582 -67 -1229 337 -1712 152 -181 292 -289 531 -405 280 -137 573
                  -198 825 -172 118 12 257 43 274 60 15 15 -27 156 -68 232 -54 98 -47 94 -155
                  76 -169 -29 -339 -15 -516 43 -372 122 -633 343 -803 681 -39 78 -110 268
                  -110 295 0 37 371 228 585 302 223 76 395 107 605 108 250 0 386 -38 570 -160
                  184 -122 299 -333 300 -545 0 -75 -31 -212 -60 -270 -19 -38 -40 -53 -40 -29
                  0 6 -48 60 -107 120 -237 243 -519 414 -873 528 -188 60 -243 61 -311 4 -85
                  -72 -76 -227 16 -282 16 -10 77 -33 135 -51 129 -39 302 -109 389 -157 186
                  -103 371 -259 487 -412 78 -103 174 -293 208 -413 73 -254 74 -567 3 -878
                  l-12 -55 -349 0 -349 0 -22 70 c-107 347 -442 595 -802 595 -237 0 -437 -84
                  -608 -255 -102 -102 -162 -197 -205 -328 l-28 -82 -443 0 -444 0 3 65 c9 180
                  67 452 143 664 49 139 173 392 254 521 76 121 205 289 310 405 63 70 85 100
                  81 115 -3 11 -20 63 -40 116 -19 53 -40 125 -46 160 -7 35 -14 70 -16 77 -9
                  30 -244 -210 -405 -413 -323 -408 -542 -913 -620 -1425 -22 -147 -37 -497 -25
                  -593 l7 -57 792 2 792 3 5 150 c5 148 5 151 42 228 64 134 185 236 323 272
                  208 54 425 -36 540 -225 49 -81 65 -148 72 -297 l6 -133 930 0 930 0 37 39
                  c380 400 643 918 759 1500 145 721 80 1410 -183 1946 -133 270 -289 479 -494
                  658 -435 380 -995 566 -1553 517z m342 -360 c790 -86 1394 -664 1553 -1485 37
                  -194 48 -319 48 -540 0 -531 -123 -1037 -354 -1463 -73 -135 -126 -214 -231
                  -351 l-77 -101 -152 0 -151 0 7 42 c3 24 13 79 21 123 22 112 31 435 16 560
                  -17 141 -45 272 -86 391 -19 56 -35 107 -35 113 0 6 20 41 44 78 238 369 245
                  796 21 1145 -59 91 -196 228 -293 292 -85 56 -244 136 -317 160 -142 45 -245
                  59 -450 60 -166 1 -220 -3 -320 -22 -267 -49 -522 -136 -775 -264 -74 -37
                  -136 -68 -137 -68 -10 0 0 115 16 198 84 431 357 773 786 981 259 126 581 182
                  866 151z"
                />
              </g>
            </svg>
          </a>
        </div>
        <div className="hidden md:block">
          <div className="flex justify-center items-center gap-6 text-xl font-primary font-normal my-[9px]">
            <a href="#home" className="hover:text-slate-400">
              Home
            </a>
            <a href="#skill" className="hover:text-slate-400">
              Skills
            </a>
            <a href="#project" className="hover:text-slate-400">
              Projects
            </a>
            <a
              href="#contact"
              className="px-2 border border-slate-500  text-neutral-200 rounded-lg hover:bg-slate-500"
            >
              Let's Connect
            </a>
          </div>
        </div>
        <div
          className="rounded-full md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <HamburgerMenu isClicked={isMenuOpen} />
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className="absolute pt-4 px-4 right-0 w-full h-screen origin-right animate-open-menu md:hidden"
          onClick={toggleMenu}
        >
          <div className="flex flex-col justify-center items-end mt-2 space-y-3 text-xl font-primary font-normal">
            <motion.a
              initial={{ opacity: 0, x: 100 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              href="#home"
              className="bg-black rounded-lg px-4 text-right hover:text-slate-400"
            >
              Home
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: 100 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.1,
                },
              }}
              href="#skill"
              className="bg-black rounded-lg px-4 text-right hover:text-slate-400"
            >
              Skills
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: 100 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                },
              }}
              href="#project"
              className="bg-black rounded-lg px-4 text-right hover:text-slate-400"
            >
              Projects
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: 100 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              href="#contact"
              className="px-2 text-right border border-slate-500 bg-slate-500 text-neutral-200 rounded-lg hover:bg-slate-900"
            >
              Let's Connect
            </motion.a>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.4,
              },
            }}
            className="mt-12 text-sm text-right text-slate-600"
          >
            EngramSoft
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.4,
              },
            }}
            className="text-sm text-right text-slate-600"
          >
            Copyright &copy; {new Date().getFullYear()}
          </motion.p>
        </div>
      )}
    </header>
  );
};

export default NavBar;
