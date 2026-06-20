import React, { useState } from 'react';
import { User } from 'lucide-react';
import { IMAGES, TRAINERS_KEPANJEN, TRAINERS_GRAHA, WA } from '../data/mock';

const TrainerCard = ({ t }) => {
  return (
    <div className="group relative overflow-hidden border border-white/10 bg-[#0a0a0a] rounded-2xl">
      <div className="aspect-[3/4] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
        <div className="flex flex-col items-center text-white/40">
          <User size={64} strokeWidth={1} />
          <p className="mt-3 text-[10px] uppercase tracking-[0.3em]">Photo Coming Soon</p>
        </div>
      </div>
      <div className="p-5 border-t border-white/10">
        <p className="text-white/50 text-[10px] uppercase tracking-[0.25em] mb-1">{t.location}</p>
        <h3
          className="text-white text-xl tracking-wider"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
        >
          {t.name}
        </h3>
        <p className="text-white/65 text-xs mt-1">{t.role}</p>
      </div>
    </div>
  );
};

const OurTrainer = () => {
  const [filter, setFilter] = useState('All');
  const all = [...TRAINERS_KEPANJEN, ...TRAINERS_GRAHA];
  const list = filter === 'All' ? all : filter === 'Kepanjen' ? TRAINERS_KEPANJEN : TRAINERS_GRAHA;

  return (
    <>
      {/* HERO - FULL FRAME IMAGE */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-end justify-center pb-24 md:pb-32">
        <img
          src={IMAGES.trainer1}
          alt="Our Team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/90" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p
            className="text-[#e11d2e] text-[11px] md:text-xs tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            Our Trainer
          </p>
          <h1
            className="text-white text-5xl md:text-7xl lg:text-8xl tracking-[0.03em] leading-[1.02] mb-7"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
          >
            OUR TEAM
          </h1>
          <p
            className="text-white/85 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Di Fortis Fitness, kami percaya bahwa setiap orang memiliki tujuan
            yang berbeda. Karena itu, tim pelatih kami hadir untuk membantu
            kamu berlatih lebih aman, lebih terarah, dan lebih percaya diri
            melalui pendampingan yang profesional dan suportif.
          </p>
        </div>
      </section>

      {/* HEADLINE - OUTLINE + FILLED */}
      <section className="bg-black py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="relative flex flex-col items-center justify-center text-center mb-4">
            <span
              className="block uppercase tracking-[0.02em] text-4xl md:text-6xl lg:text-8xl leading-[1.05] whitespace-nowrap select-none"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                WebkitTextStroke: '1.5px rgba(255,255,255,0.6)',
                color: 'transparent',
              }}
            >
              YOUR GOALS, OUR COMMITMENT.
            </span>
            <h2
              className="text-white text-3xl md:text-5xl lg:text-7xl tracking-[0.02em] leading-[1] -mt-4 md:-mt-6 lg:-mt-10"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
            >
              TRAIN WITH THE RIGHT GUIDANCE
            </h2>
          </div>
        </div>
      </section>

      {/* TRAINERS LIST */}
      <section className="bg-black pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {['All', 'Kepanjen', 'Graha Kencana'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-3 text-xs uppercase tracking-[0.25em] border transition-all ${
                  filter === f
                    ? 'bg-[#e11d2e] text-white border-[#e11d2e]'
                    : 'border-white/20 text-white/70 hover:border-[#e11d2e] hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {list.map((t) => (
              <TrainerCard key={t.location + t.id} t={t} />
            ))}
          </div>

          <div className="text-center mt-16 max-w-2xl mx-auto">
            <h3
              className="text-white text-2xl md:text-3xl tracking-[0.04em] mb-4"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
            >
              WANT TO JOIN OUR TEAM?
            </h3>
            <p className="text-white/70 mb-8">
              We&apos;re always looking for certified coaches passionate about
              transforming lives.
            </p>
            <a
              href={WA.kepanjen}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-[#e11d2e] border border-[#e11d2e] text-white text-xs uppercase tracking-[0.25em] px-8 py-4 hover:bg-[#c81729] hover:border-[#c81729] transition-all duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTrainer;
