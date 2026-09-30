import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Roadmap from './sections/Roadmap';
import Contact from './sections/Contact';
import Footer from './components/Footer';

// Main Application Assembly Component
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 relative">
      {/* Background Ambient Glow Elements */}
      <div className="fixed top-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <Navbar />

      <main className="max-w-5xl mx-auto px-4 space-y-12 pt-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Roadmap />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}