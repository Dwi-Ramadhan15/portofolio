import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { contact } = portfolioData.profile;
  const [modalConfig, setModalConfig] = useState({ isOpen: false, type: '' });
  const [copied, setCopied] = useState(false);

  const emailAddress = "dwir57017@gmail.com";
  const igUsername = "@dwi_ramadhan.15";
  const linkedInName = "Dwi Ramadhan";
  
  const igLink = "https://instagram.com/dwi_ramadhan.15";
  const linkedInLink = "https://linkedin.com/in/dwi-ramadhan-186b742aa/";

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getModalContent = () => {
    switch (modalConfig.type) {
      case 'email':
        return {
          title: 'Kirim Email',
          desc: 'Kamu bisa menyalin alamat email di bawah atau langsung kirim pesan.',
          textToCopy: emailAddress,
          actions: (
            <div className="flex gap-3">
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 bg-amber-400 text-slate-900 text-center font-bold rounded-lg hover:bg-amber-300 transition-colors text-sm"
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
          )
        };
      case 'instagram':
        return {
          title: 'Instagram',
          desc: 'Mari berteman dan saling sapa di Instagram.',
          textToCopy: igUsername,
          actions: (
            <a 
              href={igLink}
              target="_blank"
              rel="noreferrer"
              className="w-full block py-2.5 bg-amber-400 text-slate-900 text-center font-bold rounded-lg hover:bg-amber-300 transition-colors text-sm"
            >
              Buka Instagram
            </a>
          )
        };
      case 'linkedin':
        return {
          title: 'LinkedIn',
          desc: 'Mari terhubung secara profesional di LinkedIn.',
          textToCopy: linkedInName,
          actions: (
            <a 
              href={linkedInLink}
              target="_blank"
              rel="noreferrer"
              className="w-full block py-2.5 bg-amber-400 text-slate-900 text-center font-bold rounded-lg hover:bg-amber-300 transition-colors text-sm"
            >
              Buka LinkedIn
            </a>
          )
        };
      default:
        return null;
    }
  };

  const content = getModalContent();

  return (
    <section id="contact" className="py-32 px-8 md:px-24 lg:px-48 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
          <span className="text-amber-400 font-mono text-xl md:text-2xl block mb-4">Apa Selanjutnya?</span>
          Mari Terhubung
        </h2>
        
        <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
          Saat ini saya sangat terbuka untuk peluang kerja baru, diskusi seputar pengembangan perangkat lunak, atau sekadar bertukar sapa. Kotak masuk saya selalu terbuka untuk Anda!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <button 
            onClick={() => setModalConfig({ isOpen: true, type: 'email' })}
            className="px-6 md:px-8 py-3 md:py-4 border-2 border-amber-400 text-amber-400 rounded-lg hover:bg-amber-400/10 transition-all duration-300 font-bold flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            Email
          </button>
          
          <button 
            onClick={() => setModalConfig({ isOpen: true, type: 'instagram' })}
            className="px-6 md:px-8 py-3 md:py-4 border-2 border-amber-400 text-amber-400 rounded-lg hover:bg-amber-400/10 transition-all duration-300 font-bold flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.7-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Instagram
          </button>
          
          <button 
            onClick={() => setModalConfig({ isOpen: true, type: 'linkedin' })}
            className="px-6 md:px-8 py-3 md:py-4 border-2 border-amber-400 text-amber-400 rounded-lg hover:bg-amber-400/10 transition-all duration-300 font-bold flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
          </button>
        </div>
      </div>

      {modalConfig.isOpen && content && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-amber-400/40 p-6 md:p-8 rounded-xl max-w-md w-full shadow-2xl relative">
            
            <button 
              onClick={() => { setModalConfig({ isOpen: false, type: '' }); setCopied(false); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 text-xl font-bold cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-slate-100 mb-2">{content.title}</h3>
            <p className="text-slate-400 text-sm mb-6">{content.desc}</p>

            <div className="flex items-center justify-between bg-slate-900 border border-slate-700 p-3 rounded-lg mb-6">
              <span className="text-amber-300 font-mono text-sm md:text-base truncate mr-2">{content.textToCopy}</span>
              <button 
                onClick={() => handleCopy(content.textToCopy)}
                className="px-3 py-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/50 hover:bg-amber-400 hover:text-slate-900 rounded font-mono text-xs transition-all duration-200 cursor-pointer shrink-0"
              >
                {copied ? 'Tersalin! ✓' : 'Salin'}
              </button>
            </div>

            {content.actions}

          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;