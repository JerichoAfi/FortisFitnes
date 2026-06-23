import React, { useState } from 'react';
import { User } from 'lucide-react';
import { IMAGES, WA } from '../data/mock';

const TRAINERS = [
  {
    id: 1,
    name: 'RAGIL',
    location: 'KEPANJEN',
    image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/03l0wrmd_1.jpg',
  },
  {
    id: 2,
    name: 'MUNIF',
    location: 'KEPANJEN',
    image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/44rfr1pv_2.jpg',
  },
  {
    id: 3,
    name: 'TASYA',
    location: 'KEPANJEN',
    image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/monnyuqa_3.jpg',
  },
  {
    id: 4,
    name: 'IDA',
    location: 'GRAHA KENCANA',
    image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/ejmenks0_4.jpg',
  },
  {
    id: 5,
    name: 'ALDO',
    location: 'GRAHA KENCANA',
    image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/pgws2k3e_5.jpg',
  },
  {
    id: 6,
    name: 'COMING SOON',
    location: 'GRAHA KENCANA',
    image: null, // placeholder for the 6th coach
  },
];

const TrainerCard = ({ t }) => {
  const isPlaceholder = !t.image;
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black border border-white/10 hover:border-[#e11d2e] transition-colors duration-300">
      <div className="relative aspect-[3/4] bg-black">
        {isPlaceholder ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30 gap-3">
            <User size={80} strokeWidth={1} />
            <p className="text-[10px] uppercase tracking-[0.3em]">Photo Coming Soon</p>
          </div>
        ) : (
          <img
            src={t.image}
            alt={t.name}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
        )}

        {/* Subtle bottom gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

        {/* Name overlay - bottom */}
        <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
          <h3
            className="text-white text-3xl md:text-4xl lg:text-5xl tracking-[0.02em] leading-none"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 800 }}
          >
            {t.name}
          </h3>
        </div>
      </div>

      {/* Location bar - big red strip */}
      <div className="bg-[#e11d2e] px-5 py-4 text-center">
        <p
          className="text-white text-lg md:text-xl tracking-[0.18em]"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
        >
          {t.location}
        </p>
      </div>
    </div>
  );
};

const OurTrainer = () => {
  const [filter, setFilter] = useState('All');
  const list =
    filter === 'All'
      ? TRAINERS
      : TRAINERS.filter((t) => t.location.toUpperCase().replace(' ', '') === filter.toUpperCase().replace(' ', ''));

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
      <section className="bg-black pt-20 md:pt-28 pb-6 md:pb-10">
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
          <div className="flex flex-wrap justify-center gap-2 mb-12 mt-6">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {list.map((t) => (
              <TrainerCard key={t.id} t={t} />
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
