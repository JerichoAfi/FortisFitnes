import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HERO_IMAGE, IMAGES, CLASSES, LOCATIONS, TRAINERS_KEPANJEN, TRAINERS_GRAHA, MEMBERSHIPS_KEPANJEN, WA } from '../data/mock';

const Home = () => {
  const previewTrainers = [...TRAINERS_KEPANJEN.slice(0, 2), ...TRAINERS_GRAHA.slice(0, 2)];
  const trainerImgs = [IMAGES.trainer1, IMAGES.trainer2, IMAGES.equip1, IMAGES.bjj];
  const previewClasses = CLASSES.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black" />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <p className="text-white/70 text-[11px] tracking-[0.4em] uppercase mb-6">Reload Boutique Gym &mdash; Malang</p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl tracking-[0.04em] leading-[1.02] mb-6" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>
            TRAIN. GROW. THRIVE.
          </h1>
          <p className="text-white/85 text-xl md:text-2xl mb-10 tracking-[0.06em]" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 300 }}>
            More Than Just a Gym
          </p>
          <a href={WA.kepanjen} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 border border-white text-white text-xs uppercase tracking-[0.25em] px-10 py-4 hover:bg-white hover:text-black transition-all duration-300">
            Mulai Berlatih <ArrowRight size={14} />
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-[1px] h-12 bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* GROUP CLASSES PREVIEW */}
      <section className="bg-black py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <p className="text-white/50 text-[11px] tracking-[0.4em] uppercase mb-3">01 / Group Classes</p>
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl tracking-[0.04em]" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>
                MOVE TOGETHER<br />SWEAT BETTER
              </h2>
            </div>
            <Link to="/book-a-class" className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-[0.25em] border-b border-white/40 pb-1 hover:border-white">
              View All Classes <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {previewClasses.map((c) => (
              <Link key={c.id} to="/book-a-class" className="group relative aspect-[4/5] overflow-hidden">
                <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-white text-lg md:text-xl tracking-[0.1em]" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>{c.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS PREVIEW */}
      <section className="relative bg-[#0a0a0a] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <p className="text-white/50 text-[11px] tracking-[0.4em] uppercase mb-3">02 / Locations</p>
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl tracking-[0.04em]" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>
                FIND YOUR<br />HOME GYM
              </h2>
            </div>
            <Link to="/locations" className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-[0.25em] border-b border-white/40 pb-1 hover:border-white">
              All Locations <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <Link key={loc.id} to="/locations" className="relative group overflow-hidden aspect-[3/4]">
                <img src={loc.image} alt={loc.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                  {loc.status === 'Coming Soon' && (
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 border border-white/40 px-3 py-1 mb-3">Coming Soon</span>
                  )}
                  <h3 className="text-white text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>{loc.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINERS PREVIEW */}
      <section className="bg-black py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <p className="text-white/50 text-[11px] tracking-[0.4em] uppercase mb-3">03 / Our Trainer</p>
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl tracking-[0.04em]" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>
                YOUR GOALS<br />OUR COMMITMENT
              </h2>
            </div>
            <Link to="/our-trainer" className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-[0.25em] border-b border-white/40 pb-1 hover:border-white">
              Meet The Team <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {previewTrainers.map((t, i) => (
              <div key={t.id + t.location} className="group relative overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
                  <img src={trainerImgs[i % trainerImgs.length]} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white/60 text-[10px] uppercase tracking-[0.25em] mb-1">{t.location}</p>
                  <h3 className="text-white text-lg tracking-wider" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>{t.name}</h3>
                  <p className="text-white/70 text-xs mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP PREVIEW */}
      <section className="relative bg-[#0a0a0a] border-t border-white/5">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.gym1})` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 md:py-32">
          <div className="text-center mb-14">
            <p className="text-white/50 text-[11px] tracking-[0.4em] uppercase mb-3">04 / Membership</p>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl tracking-[0.04em] mb-6" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>
              PREMIUM GYM EXPERIENCE
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">Choose the plan that fits your life. Unlimited access, expert coaching, and a community that pushes you forward.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {MEMBERSHIPS_KEPANJEN.map((m) => (
              <div key={m.id} className="border border-white/15 p-6 md:p-8 hover:border-white/40 transition-colors bg-black/40 backdrop-blur-sm">
                <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] mb-3">Kepanjen</p>
                <h3 className="text-white text-2xl md:text-3xl tracking-wider mb-2" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>{m.duration}</h3>
                <p className="text-white text-xl mb-5">{m.price}</p>
                <p className="text-white/60 text-xs">Unlimited Gym Access + Group Classes</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/membership" className="inline-flex items-center justify-center gap-3 border border-white text-white text-xs uppercase tracking-[0.25em] px-10 py-4 hover:bg-white hover:text-black transition-all duration-300">
              See All Plans <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
