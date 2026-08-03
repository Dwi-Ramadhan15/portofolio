import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import profilImg from '../assets/profil.jpeg'; 

const Hero = () => {
  const { name, role, description, contact } = portfolioData.profile;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isPhotoColor, setIsPhotoColor] = useState(false);
  const photoRef = useRef(null);

  const emailAddress = "dwir57017@gmail.com"; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPhotoColor(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (photoRef.current) {
      observer.observe(photoRef.current);
    }

    return () => {
      if (photoRef.current) observer.unobserve(photoRef.current);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-24 lg:px-48 bg-slate-900 pt-28 md:pt-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center w-full">
        
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="text-teal-400 font-mono mb-3 text-base md:text-lg">Halo, perkenalkan nama saya</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-100 mb-3 md:mb-4 leading-tight">{name}.</h1>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-400 mb-5 md:mb-6 leading-snug">
            Saya seorang <span className="text-teal-300 block md:inline mt-1 md:mt-0">{role}</span>.
          </h2>
          <p className="text-slate-400 max-w-xl text-base md:text-lg mb-8 md:mb-10 leading-relaxed mx-auto md:mx-0 text-justify md:text-left">{description}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href={contact.github} target="_blank" rel="noreferrer" className="px-6 py-3 flex items-center justify-center gap-2 border-2 border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400/10 transition-all duration-300 font-mono text-sm md:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>

            <button 
              onClick={() => setIsModalOpen(true)} 
              className="px-6 py-3 flex items-center justify-center gap-2 bg-teal-400 text-slate-900 rounded-lg hover:bg-teal-300 transition-all duration-300 font-bold shadow-lg shadow-teal-400/20 cursor-pointer text-sm md:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              Email Saya
            </button>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-slate-800 rounded-full md:rounded-lg border-2 border-teal-400 overflow-hidden flex items-center justify-center shadow-2xl mt-4 md:mt-0">
            <img 
              ref={photoRef} 
              src={profilImg} 
              alt="Profil" 
              className={`w-full h-full object-cover transition-all duration-500 ${isPhotoColor ? 'grayscale-0' : 'grayscale'}`} 
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-teal-400/40 p-6 md:p-8 rounded-xl max-w-md w-full shadow-2xl relative">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 text-xl font-bold cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-slate-100 mb-2">Hubungi Saya</h3>
            <p className="text-slate-400 text-sm mb-6">Kamu bisa menyalin alamat email di bawah atau langsung kirim pesan via Gmail.</p>

            <div className="flex items-center justify-between bg-slate-900 border border-slate-700 p-3 rounded-lg mb-6">
              <span className="text-teal-300 font-mono text-sm md:text-base truncate mr-2">{emailAddress}</span>
              <button 
                onClick={handleCopyEmail}
                className="px-3 py-1.5 bg-teal-400/20 text-teal-300 border border-teal-400/50 hover:bg-teal-400 hover:text-slate-900 rounded font-mono text-xs transition-all duration-200 cursor-pointer shrink-0"
              >
                {copied ? 'Tersalin! ✓' : 'Salin'}
              </button>
            </div>

            <div className="flex gap-3">
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 bg-teal-400 text-slate-900 text-center font-bold rounded-lg hover:bg-teal-300 transition-colors text-sm"
              >
                Buka Gmail
              </a>
              <a 
                href={`mailto:${emailAddress}`}
                className="flex-1 py-2.5 border border-slate-600 text-slate-300 text-center font-medium rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                Aplikasi Mail
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;