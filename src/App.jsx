import { Home, Skill, Project, Contact, Footer, NavBar } from './sections';

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
