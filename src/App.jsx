import { Home, Skill, Project, Contact } from './sections';
import { Header, Footer } from './components';

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
