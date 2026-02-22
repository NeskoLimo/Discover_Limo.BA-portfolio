/* ═══════════════════════════════════════════════════════════════
   App.jsx — Root component. Assembles all page sections.
   SCALABILITY: Import and add new section components here.
   Order of components = order on the page.
   ═══════════════════════════════════════════════════════════════ */
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import About          from './components/About';
import Experience     from './components/Experience';
import Projects       from './components/Projects';
import Skills         from './components/Skills';
import Certifications from './components/Certifications';
import Contact        from './components/Contact';
import Footer         from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
