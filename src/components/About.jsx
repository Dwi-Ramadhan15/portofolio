import React, { useState, useEffect, useRef } from 'react';
import fotImg from '../assets/fot.jpg';
import smkImg from '../assets/smk.jpeg';

const About = () => {
  const [isFotColor, setIsFotColor] = useState(false);
  const [isSmkColor, setIsSmkColor] = useState(false);
  const fotRef = useRef(null);
  const smkRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === fotRef.current) {
            setIsFotColor(entry.isIntersecting);
          } else if (entry.target === smkRef.current) {
            setIsSmkColor(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (fotRef.current) observer.observe(fotRef.current);
    if (smkRef.current) observer.observe(smkRef.current);

    return () => {
      if (fotRef.current) observer.unobserve(fotRef.current);
      if (smkRef.current) observer.unobserve(smkRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-20 px-8 md:px-24 lg:px-48 bg-slate-900">
      
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
          Perjalanan Saya
        </h2>
        <div className="h-px bg-slate-700 flex-grow rounded"></div>
      </div>

      <div className="flex flex-col gap-24">
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-2xl font-bold text-slate-200 mb-4">
              <span className="text-amber-400">D3 Manajemen Informatika</span>
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg text-justify">
              Lulusan D3 Manajemen Informatika Politeknik Negeri Lampung dengan IPK 3,71. Memiliki
              pengalaman praktik kerja lapangan di PT. Microdata Indonesia sebagai Backend Developer
              serta pengalaman magang selama 4 bulan di Zaicomtech Computer, Rajabasa. Memiliki
              pengalaman dalam pengembangan RESTful API, pengelolaan basis data, autentikasi sistem,
              serta instalasi jaringan, perakitan komputer, dan troubleshooting perangkat keras maupun
              perangkat lunak. Aktif berorganisasi sebagai anggota Himpunan Mahasiswa Jurusan Ekonomi
              dan Bisnis Divisi Media dan Informasi pada semester 1–3 serta Himpunan Mahasiswa
              Teknologi Informasi Divisi Media dan Informasi pada semester 4–5. Terpilih sebagai Duta
              Kampus Berbakat dan Bersahabat Politeknik Negeri Lampung, serta meraih penghargaan
              Mahasiswa Berprestasi Politeknik Negeri Lampung pada tahun 2024 dan 2026, serta
              Mahasiswa Terdisiplin tingkat program studi. Menguasai Node.js, Express.js, PostgreSQL,
              RESTful API, dan Git, serta memiliki kemampuan komunikasi, kepemimpinan, kerja sama tim,
              adaptasi, dan pemecahan masalah yang baik. Teliti, bertanggung jawab, cepat belajar, dan siap
              berkontribusi secara profesional di bidang pengembangan perangkat lunak, backend
              development, dan teknologi informasi.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="w-full max-w-sm aspect-[4/3] bg-slate-800 rounded-lg border-2 border-amber-400/50 flex items-center justify-center relative group overflow-hidden shadow-xl shadow-amber-900/20">
              <span className="w-full h-full z-0 relative">
                 <img ref={fotRef} src={fotImg} alt="D3 Manajemen Informatika" className={`w-full h-full object-cover transition-all duration-500 ${isFotColor ? 'grayscale-0' : 'grayscale'}`} />
              </span>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          
          <div className="w-full md:w-1/2 order-1 md:order-1 flex justify-center">
            <div className="w-full max-w-sm aspect-[4/3] bg-slate-800 rounded-lg border-2 border-amber-400/50 flex items-center justify-center relative group overflow-hidden shadow-xl shadow-amber-900/20">
              <span className="w-full h-full z-0 relative">
                <img ref={smkRef} src={smkImg} alt="Masa SMK" className={`w-full h-full object-cover transition-all duration-500 ${isSmkColor ? 'grayscale-0' : 'grayscale'}`} />
              </span>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-2 md:order-2">
            <h3 className="text-2xl font-bold text-slate-200 mb-4">
              <span className="text-amber-400">SMK Negeri Tanjung Sari</span>
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg text-justify">
              Lulusan SMK Negeri Tanjung Sari jurusan Teknik Komputer dan Jaringan, dengan pengalaman
              magang selama 4 bulan di Zaicomtech Computer, Rajabasa. Berpengalaman dalam instalasi
              jaringan, perakitan komputer, pemeliharaan hardware, serta troubleshooting sistem. Dengan predikat uji kopetensi keahlian : Kompeten.
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default About;