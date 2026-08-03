import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800 transition-all duration-300">
      <div className="flex justify-between items-center px-6 sm:px-8 md:px-24 lg:px-48 py-4">
        
        <div className="text-2xl font-bold text-slate-100 font-mono hover:text-teal-400 transition-colors cursor-pointer">
          <span className="text-teal-400">&lt;</span>Dwi<span className="text-teal-400">/&gt;</span>
        </div>

        <nav className="hidden lg:flex justify-center flex-grow gap-8 text-sm font-mono text-slate-300 items-center">
          <a href="#home" className="hover:text-teal-400 transition-colors">Beranda</a>
          <a href="#about" className="hover:text-teal-400 transition-colors">Tentang</a>
          <a href="#experience" className="hover:text-teal-400 transition-colors">Pengalaman</a>
          <a href="#projects" className="hover:text-teal-400 transition-colors">Proyek</a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">Kontak</a>
        </nav>

        <div className="hidden lg:block">
          <a href="/cv-dwi-ramadhan.pdf" download className="px-4 py-2 border border-teal-400 text-teal-400 rounded hover:bg-teal-400/10 transition-colors font-mono text-sm">
            Resume
          </a>
        </div>

        <button className="lg:hidden text-teal-400 text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-800 border-b border-slate-700 flex flex-col p-6 gap-6 font-mono text-slate-300 text-center shadow-xl">
          <a href="#home" onClick={() => setIsOpen(false)}>Beranda</a>
          <a href="#about" onClick={() => setIsOpen(false)}>Tentang</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Pengalaman</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Proyek</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Kontak</a>
          <a href="/cv-dwi-ramadhan.pdf" download className="text-teal-400 border border-teal-400 py-2 mx-auto px-6 rounded">Resume</a>
        </div>
      )}
    </header>
  );
};

export default Header;