import React from 'react';
import { TRAINERS } from '../data/mock';

const Team = () => {
  return (
    <section id="team" className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2
            className="text-white text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] mb-6"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
          >
            OUR TEAM
          </h2>
          <p
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our champion athletes and trainers have vast fitness experience to
            help you achieve your desired goals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14">
          {TRAINERS.map((t) => (
            <div key={t.id} className="group relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3
                  className="text-white text-lg tracking-wider"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
                >
                  {t.name}
                </h3>
                <p className="text-white/70 text-xs uppercase tracking-[0.15em] mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#team"
            className="inline-flex items-center justify-center border border-white text-white text-xs uppercase tracking-[0.25em] px-10 py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            View All Trainers
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
