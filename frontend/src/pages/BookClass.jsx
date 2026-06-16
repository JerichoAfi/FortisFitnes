import React, { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';
import { IMAGES, CLASSES, TIMETABLE, WA } from '../data/mock';

const BookClass = () => {
  const [activeDay, setActiveDay] = useState('Mon');
  const day = TIMETABLE.find((d) => d.day === activeDay);

  return (
    <>
      <PageHero
        eyebrow="Book a Class"
        title="FIND YOUR FLOW"
        subtitle="From sunrise yoga to evening Muaythai - browse the weekly timetable and reserve your spot."
        image={IMAGES.boxing}
      />

      {/* CLASS GRID */}
      <section className="bg-black py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-white/50 text-[11px] tracking-[0.4em] uppercase mb-3">Our Classes</p>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl tracking-[0.04em]" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>
              11 SIGNATURE CLASSES
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {CLASSES.map((c) => (
              <div key={c.id} className="group relative aspect-[4/5] overflow-hidden border border-white/10">
                <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-white text-lg tracking-[0.1em] mb-2" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>{c.name}</h3>
                  <p className="text-white/70 text-xs leading-relaxed line-clamp-3">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMETABLE */}
      <section className="bg-[#0a0a0a] py-20 md:py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <p className="text-white/50 text-[11px] tracking-[0.4em] uppercase mb-3">Weekly Timetable</p>
            <h2 className="text-white text-4xl md:text-5xl tracking-[0.04em]" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>
              SCHEDULE
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {TIMETABLE.map((d) => (
              <button
                key={d.day}
                onClick={() => setActiveDay(d.day)}
                className={`px-5 py-3 text-xs uppercase tracking-[0.2em] border transition-all ${
                  activeDay === d.day ? 'bg-white text-black border-white' : 'border-white/20 text-white/70 hover:border-white/60 hover:text-white'
                }`}
              >
                {d.day}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {day?.items.map((it, idx) => (
              <div key={idx} className="grid grid-cols-12 items-center gap-4 border border-white/10 bg-black/40 px-5 py-4 hover:border-white/40 transition-colors">
                <div className="col-span-3 md:col-span-2">
                  <div className="flex items-center gap-2 text-white">
                    <Clock size={14} className="text-white/60" />
                    <span className="text-sm font-medium tracking-wider">{it.time}</span>
                  </div>
                  <p className="text-white/50 text-[10px] uppercase mt-1 tracking-[0.2em]">{it.duration} min</p>
                </div>
                <div className="col-span-5 md:col-span-5">
                  <h4 className="text-white text-lg tracking-wider" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>{it.name}</h4>
                  <p className="text-white/60 text-xs">{it.trainer}</p>
                </div>
                <div className="col-span-4 md:col-span-3 flex items-center gap-2 text-white/70 text-xs">
                  <MapPin size={12} /> {it.loc}
                </div>
                <div className="hidden md:flex md:col-span-2 justify-end">
                  <a href={it.loc === 'Graha Kencana' ? WA.graha : WA.kepanjen} target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.25em] border border-white/40 px-3 py-2 text-white hover:bg-white hover:text-black transition-all">
                    Book
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={WA.kepanjen} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center border border-white text-white text-xs uppercase tracking-[0.25em] px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
              Reserve a Spot
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookClass;
