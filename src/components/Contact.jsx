import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { contact } = portfolioData.profile;

  return (
    <section id="contact" className="py-32 px-8 md:px-24 lg:px-48 bg-slate-900 border-t border-slate-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
          <span className="text-teal-400 font-mono text-xl md:text-2xl block mb-4">Apa Selanjutnya?</span>
          Mari Terhubung
        </h2>
        
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          Saat ini saya sangat terbuka untuk peluang kerja baru, diskusi seputar pengembangan perangkat lunak, atau sekadar bertukar sapa. Kotak masuk saya selalu terbuka untuk Anda!
        </p>
        
        <a 
            href="mailto:dwir57017@gmail.com" 
            className="px-8 py-4 border-2 border-teal-400 text-teal-400 rounded hover:bg-teal-400/10 transition-all duration-300 font-bold"
            >
            Kirim Pesan
            </a>
      </div>
    </section>
  );
};

export default Contact;