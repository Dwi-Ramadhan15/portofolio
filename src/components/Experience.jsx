import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 sm:px-8 md:px-24 lg:px-48 bg-slate-900 border-t border-slate-800">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
          <span className="text-teal-400 font-mono text-2xl mr-2">02.</span> 
          Pengalaman & Keahlian
        </h2>
        <div className="h-px bg-slate-700 flex-grow rounded"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <div>
          <h3 className="text-2xl font-bold text-slate-200 mb-8">Pengalaman Kerja</h3>
          
          <div className="mb-10 relative pl-6 border-l-2 border-teal-400">
            <div className="absolute w-4 h-4 bg-slate-900 border-2 border-teal-400 rounded-full -left-[9px] top-1"></div>
            <h4 className="text-xl font-bold text-slate-100">Backend Developer (Intern)</h4>
            <p className="text-teal-400 font-mono text-sm mb-3">PT Microdata Indonesia | Feb 2026 - Jun 2026</p>
            <ul className="text-slate-400 text-sm md:text-base list-disc list-inside space-y-2 text-justify">
              <li>Merancang dan mengembangkan RESTful API yang efisien menggunakan Node.js dan Express.js.</li>
              <li>Mendesain basis data PostgreSQL untuk mendukung fitur pencarian dan peta interaktif.</li>
              <li>Mengimplementasikan integrasi MinIO sebagai object storage yang skalabel untuk manajemen aset media.</li>
            </ul>
          </div>

          <div className="relative pl-6 border-l-2 border-teal-400">
            <div className="absolute w-4 h-4 bg-slate-900 border-2 border-teal-400 rounded-full -left-[9px] top-1"></div>
            <h4 className="text-xl font-bold text-slate-100">Teknisi Jaringan & Komputer (Intern)</h4>
            <p className="text-teal-400 font-mono text-sm mb-3">Zaicomtecht Computer | Jan 2021 - Mei 2021</p>
            <ul className="text-slate-400 text-sm md:text-base list-disc list-inside space-y-2 text-justify">
              <li>Melakukan instalasi jaringan LAN dan konfigurasi router.</li>
              <li>Melaksanakan perakitan, perawatan, dan troubleshooting hardware serta software komputer.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-200 mb-8">Keahlian & Pencapaian</h3>
          
          <div className="mb-8">
            <h4 className="text-lg font-bold text-slate-300 mb-3">Hard Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'React.js', 'PHP', 'PostgreSQL', 'MySQL', 'Git/GitHub', 'Networking'].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-teal-400/10 text-teal-300 border border-teal-400/20 rounded font-mono text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold text-slate-300 mb-3">Soft Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['Public Speaking', 'Leadership', 'Teamwork', 'Analytical Skills', 'Digital Content Creation'].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-slate-800 text-slate-300 border border-slate-700 rounded text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-300 mb-3">Organisasi & Prestasi Utama</h4>
            <ul className="text-slate-400 text-sm md:text-base list-disc list-inside space-y-2 text-justify">
              <li>Mahasiswa Berprestasi Polinela (2024 & 2026) serta Duta Berbakat & Persahabatan Kampus.</li>
              <li>Divisi Media dan Informasi (HMJ Ekonomi & Bisnis serta HMJ Teknologi Informasi).</li>
              <li>Mahasiswa Terdisiplin tingkat program studi Manajemen Informatika Politeknik Negeri Lampung.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;