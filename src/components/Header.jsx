import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800 transition-all duration-300">
      <div className="flex justify-between items-center px-6 sm:px-8 md:px-24 lg:px-48 py-4">
        
        <div className="text-2xl font-bold text-slate-100 font-mono hover:text-teal-400 transition-colors cursor-pointer">
          <span className="text-teal-400">&lt;</span>
          Dwi
          <span className="text-teal-400">/&gt;</span>
        </div>

        <nav className="hidden lg:flex gap-8 text-sm font-mono text-slate-300">
          <a href="#about" className="hover:text-teal-400 transition-colors">
            Tentang
          </a>
          <a href="#experience" className="hover:text-teal-400 transition-colors">
            Pengalaman
          </a>
          <a href="#projects" className="hover:text-teal-400 transition-colors">
            Proyek
          </a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">
            Kontak
          </a>
        </nav>

        <div className="hidden sm:block">
          <a 
            href="/cv-dwi-ramadhan.pdf" 
            download="CV_Dwi_Ramadhan.pdf"
            className="px-4 py-2 border border-teal-400 text-teal-400 rounded hover:bg-teal-400/10 transition-colors font-mono text-sm"
          >
            Resume
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;