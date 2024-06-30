import SectionLayout from '@/layouts/SectionLayout';
import NavBar from '@/components/NavBar';
import Hero from '@/sections/hero';
import Skills from '@/sections/skills';
import Projects from '@/sections/projects';
import Contact from '@/sections/contact';
import Footer from '@/components/Footer';

import { SelectedPage } from '@/shared/types';
import { useState, useEffect } from 'react';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Hero
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Hero);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='font-primary'>
        <NavBar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <SectionLayout id="hero" children={<Hero />} />
        <SectionLayout id="skills" children={<Skills />} />
        <SectionLayout id="projects" children={<Projects />} />
        <SectionLayout id="contact" children={<Contact />} />
        <Footer />
      </div>
    </>
  );
}

export default App;
