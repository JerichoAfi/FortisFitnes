import React, { useState } from 'react';
import { CLASSES } from '../data/mock';

const Classes = () => {
  const [active, setActive] = useState(0);
  const current = CLASSES[active];

  return (
    <section id="classes" className="relative bg-black overflow-hidden">
      <div className="relative min-h-[700px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${current.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 md:py-32">
          <div className="text-center mb-16">
            <h2
              className="text-white text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] mb-6"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
            >
              JOIN OUR CLASSES TODAY
            </h2>
            <p
              className="text-white/75 text-base md:text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We provide various classes such as Boxing, Brazilian Jiu Jitsu,
              TRX, Yoga and Pilates.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 max-w-5xl mx-auto mb-12">
            {CLASSES.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActive(idx)}
                className={`px-4 py-8 text-center transition-all duration-300 ${
                  active === idx
                    ? 'bg-white text-black'
                    : 'bg-black/40 backdrop-blur-sm text-white hover:bg-black/60'
                }`}
              >
                <span
                  className="text-xs md:text-sm tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  {c.name}
                </span>
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-white/85 text-lg leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {current.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
