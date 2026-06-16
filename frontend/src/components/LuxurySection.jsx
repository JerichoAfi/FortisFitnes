import React from 'react';
import { LUXURY_IMAGES } from '../data/mock';

const LuxurySection = () => {
  return (
    <section id="about" className="bg-black py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-20">
          {LUXURY_IMAGES.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden group aspect-square"
            >
              <img
                src={src}
                alt="Luxury fitness"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h2
            className="text-white/80 text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] leading-tight mb-8"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
          >
            WHERE LUXURY
            <br />
            AND FITNESS MEETS
          </h2>
          <p
            className="text-white/70 text-base md:text-lg leading-relaxed mb-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Reload Boutique Gym is your sanctuary in the city, where
            cutting-edge technology meets personalized care. We&apos;re not just
            a gym; we&apos;re your third space &mdash; a place where you can
            push boundaries, achieve your goals and become your best self.
          </p>
          <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-8">
            Ready to redefine your limits?
          </p>
          <a
            href="#membership"
            className="inline-flex items-center justify-center border border-white text-white text-xs uppercase tracking-[0.25em] px-10 py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            Become a Member
          </a>
        </div>
      </div>
    </section>
  );
};

export default LuxurySection;
