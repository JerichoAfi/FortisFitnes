import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { IMAGES, TRAINERS_KEPANJEN, TRAINERS_GRAHA, WA } from '../data/mock';
import { User } from 'lucide-react';

const TrainerCard = ({ t }) => {
  return (
    <div className="group relative overflow-hidden border border-white/10 bg-[#0a0a0a]">
      <div className="aspect-[3/4] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
        <div className="flex flex-col items-center text-white/40">
          <User size={64} strokeWidth={1} />
          <p className="mt-3 text-[10px] uppercase tracking-[0.3em]">Photo Coming Soon</p>
        </div>
      </div>
      <div className="p-5 border-t border-white/10">
        <p className="text-white/50 text-[10px] uppercase tracking-[0.25em] mb-1">{t.location}</p>
        <h3 className="text-white text-xl tracking-wider" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>{t.name}</h3>
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
      <PageHero
        eyebrow="Our Trainer"
        title={<>YOUR GOALS,<br />OUR COMMITMENT.</>}
        subtitle="Train with the right guidance. Certified coaches across Kepanjen and Graha Kencana ready to push you beyond your limits."
        image={IMAGES.trainer1}
      />

      <section className="bg-black py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {['All', 'Kepanjen', 'Graha Kencana'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-3 text-xs uppercase tracking-[0.25em] border transition-all ${
                  filter === f ? 'bg-white text-black border-white' : 'border-white/20 text-white/70 hover:border-white/60 hover:text-white'
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
            <h3 className="text-white text-2xl md:text-3xl tracking-[0.04em] mb-4" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>WANT TO JOIN OUR TEAM?</h3>
            <p className="text-white/70 mb-8">We&apos;re always looking for certified coaches passionate about transforming lives.</p>
            <a href={WA.kepanjen} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center border border-white text-white text-xs uppercase tracking-[0.25em] px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTrainer;
