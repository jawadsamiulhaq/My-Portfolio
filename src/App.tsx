import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <div className="portfolio-page">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
