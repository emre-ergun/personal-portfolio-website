import { Home, Skill, Project, Contact, Footer } from './sections';
import { NavBar } from './components';

document.body.style.backgroundColor = 'black';

function App() {
  return (
    <main className="relative">
      <NavBar />
      <Home />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
