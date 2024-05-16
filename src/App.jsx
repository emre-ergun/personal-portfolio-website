import SocialMedia from './components/SocialMedia';
import { Home, Skill, Project, Contact, Footer, NavBar } from './sections';

function App() {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-200 selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-black">
          <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
        </div>
      </div>
      <div>
        <NavBar />
        <Home />
        <Skill />
        <Project />
        <Contact />
        <Footer />
        <SocialMedia />
      </div>
    </div>
  );
}

export default App;
