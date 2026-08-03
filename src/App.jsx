import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'; 
import Experience from './components/Experience'; 
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen font-sans selection:bg-teal-300 selection:text-teal-900">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Experience /> 
        <Projects />
        <Contact />
      </main>

      <footer className="text-center py-6 text-slate-500 font-mono text-sm bg-slate-900 border-t border-slate-800">
        <p>Dibuat oleh Dwi Ramadhan &copy; 2026</p>
      </footer>
    </div>
  );
}

export default App;