import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import {
  HERO_IMAGE,
  IMAGES,
  LOCATIONS,
  WA,
} from '../data/mock';

const CLASS_HOVER_LIST = [
  { name: 'YOGA', image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/orcbu83h_yoga.png' },
  { name: 'PILATES', image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/so0ho6of_1782377170999.png' },
  { name: 'ZUMBA', image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/b6io4slp_zumba.png' },
  { name: 'AEROBIC', image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/kmyaj43i_aerobic.png' },
  { name: 'POUNDFIT', image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/a4n5kxug_poundfit.png' },
  { name: 'BOXING', image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/tfj78sb0_boxing.jpeg' },
  { name: 'MUAYTHAI', image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/1rrvdtm2_muaythai.jpeg' },
  { name: 'CIRCUIT TRAINING', image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/8dkbdewg_circuit%20training.jpeg' },
  { name: 'CALISTHENICS', image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/4hwwbi9p_CALISTHENICS.jpeg' },
];

const ClassesHoverSection = () => {
  const [activeIdx, setActiveIdx] = useState(5); // default BOXING
  const active = CLASS_HOVER_LIST[activeIdx];

  return (
    <section className="relative bg-black overflow-hidden">
      <div className="relative min-h-[700px]">
        {/* layered images for crossfade */}
        {CLASS_HOVER_LIST.map((c, i) => (
          <div
            key={c.name}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out ${
              i === activeIdx ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${c.image})` }}
            aria-hidden="true"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/95" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 md:py-32">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2
              className="text-white text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] mb-6"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
            >
              GROUP CLASSES
              <br />
              FOR EVERY GOAL
            </h2>
            <p
              className="text-white/75 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Setiap orang memiliki tujuan yang berbeda. Karena itu, Fortis
              Fitness menghadirkan berbagai pilihan kelas untuk membantu kamu
              menjadi lebih kuat, lebih sehat, dan terus berkembang.
            </p>
          </div>

          <ul
            className="flex flex-col items-center gap-y-3 md:gap-y-4 max-w-3xl mx-auto"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
          >
            {CLASS_HOVER_LIST.map((c, i) => {
              const isActive = i === activeIdx;
              return (
                <li
                  key={c.name}
                  onMouseEnter={() => setActiveIdx(i)}
                  onFocus={() => setActiveIdx(i)}
                  tabIndex={0}
                  className={`cursor-pointer text-center tracking-[0.18em] text-2xl md:text-3xl lg:text-4xl transition-all duration-300 outline-none ${
                    isActive ? 'text-white scale-105' : 'text-white/45 hover:text-white/80'
                  }`}
                >
                  {c.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

const HeroVideo = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    if (!next) {
      // user gesture allows playing with sound
      v.play().catch(() => {});
    }
    setMuted(next);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        src="https://customer-assets.emergentagent.com/job_content-124/artifacts/0vastvkv_fortis%20video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />

      <button
        onClick={toggleSound}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        className="absolute bottom-6 right-6 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/60 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-[#e11d2e] hover:border-[#e11d2e] transition-all duration-300"
      >
        {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </section>
  );
};

const Home = () => {
  return (
    <>
      {/* HERO - FULL FRAME VIDEO */}
      <HeroVideo />

      {/* TRAIN. GROW. THRIVE. */}
      <section className="bg-black py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h2
              className="text-white text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] leading-tight mb-8"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
            >
              TRAIN. GROW. THRIVE.
            </h2>
            <p
              className="text-white/75 text-base md:text-lg leading-relaxed mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Lebih dari tempat untuk berolahraga, Fortis Fitness adalah ruang
              untuk menjadi lebih kuat, lebih sehat, dan terus berkembang
              bersama komunitas yang positif.
            </p>
            <p className="text-white/60 text-sm tracking-[0.25em] mb-10">
              #PracticeWithFortis
            </p>
            <a
              href={WA.kepanjen}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-[#e11d2e] border border-[#e11d2e] text-white text-xs uppercase tracking-[0.25em] px-10 py-4 hover:bg-[#c81729] hover:border-[#c81729] transition-all duration-300"
            >
              Mulai Berlatih
            </a>
          </div>
        </div>
      </section>

      {/* GROUP CLASSES FOR EVERY GOAL */}
      <ClassesHoverSection />

      {/* OUR LOCATIONS - photos only */}
      <section className="bg-black py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => {
              const isPrivate = loc.id === 'graha';
              const isComing = loc.status === 'Coming Soon';
              return (
                <Link
                  to="/locations"
                  key={loc.id}
                  className="relative group overflow-hidden cursor-pointer aspect-[3/4] block"
                >
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                    {isComing && (
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/80 border border-white/40 px-3 py-1 mb-4 bg-black/30">
                        Coming Soon
                      </span>
                    )}
                    {isPrivate && (
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/85 border border-white/40 px-3 py-1 mb-4 bg-black/30">
                        Private Gym Series
                      </span>
                    )}
                    <h3
                      className="text-white text-2xl md:text-3xl tracking-[0.08em] mb-6"
                      style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
                    >
                      {loc.name}
                    </h3>
                    <div className="flex items-center gap-2 border border-[#e11d2e] px-6 py-3 group-hover:bg-[#e11d2e] transition-all duration-300">
                      <span className="text-white text-[10px] uppercase tracking-[0.25em]">
                        Discover More
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-white"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* MORE THAN JUST A GYM */}
      <section className="bg-black">
        <div className="max-w-3xl mx-auto text-center px-6 py-24 md:py-32">
          <h2
            className="text-white text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] mb-8"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
          >
            MORE THAN JUST A GYM
          </h2>
          <p
            className="text-white/75 text-base md:text-lg leading-relaxed mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Fortis Fitness menghadirkan pengalaman latihan yang nyaman, modern,
            dan berkualitas untuk membantu setiap orang menjadi lebih kuat,
            lebih sehat, dan terus berkembang bersama komunitas yang positif.
          </p>
          <p
            className="text-white/75 text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Mulai dari premium gym experience di Fortis Fitness Kepanjen hingga
            Private Gym Series di Graha Kencana yang menawarkan pengalaman
            latihan yang lebih privat, fokus, dan personal, kami percaya setiap
            orang berhak menikmati pengalaman fitness yang sesuai dengan
            kebutuhannya.
          </p>
        </div>
      </section>

      {/* MEET OUR TRAINERS - full image background with overlay */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[80vh] min-h-[600px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(https://customer-assets.emergentagent.com/job_content-124/artifacts/0f2jmqd9_2026-06-30%2012.00.05.jpg)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/85" />

          <div className="relative z-10 h-full flex flex-col items-center justify-end pb-8 md:pb-12 text-center px-6 max-w-2xl mx-auto">
            <h2
              className="text-white text-3xl md:text-4xl lg:text-5xl tracking-[0.04em] mb-3"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
            >
              MEET OUR TRAINERS
            </h2>
            <p
              className="text-white/85 text-sm md:text-base leading-relaxed mb-6 max-w-xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Tim pelatih Fortis Fitness hadir untuk mendampingi setiap
              perjalananmu, mulai dari membangun kebiasaan sehat hingga
              mencapai fitness goals yang kamu inginkan.
            </p>
            <Link
              to="/our-trainer"
              className="inline-flex items-center justify-center bg-[#e11d2e] border border-[#e11d2e] text-white text-[11px] uppercase tracking-[0.25em] px-8 py-3 hover:bg-[#c81729] hover:border-[#c81729] transition-all duration-300"
            >
              Kenali Pelatih Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
