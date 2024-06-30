import SectionLayout from '@/layouts/SectionLayout';
import NavBar from '@/components/NavBar';
import Hero from '@/sections/hero';
import Skills from '@/sections/skills';
import Projects from '@/sections/projects';
import Contact from '@/sections/contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <div>
        <NavBar />
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
