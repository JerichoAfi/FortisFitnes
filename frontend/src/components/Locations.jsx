import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LOCATIONS } from '../data/mock';

const Locations = () => {
  return (
    <section id="locations" className="bg-black py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2
            className="text-white text-4xl md:text-6xl lg:text-7xl tracking-[0.04em]"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
          >
            OUR LOCATIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="relative group overflow-hidden cursor-pointer aspect-[3/4]"
            >
              <img
                src={loc.image}
                alt={loc.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                <h3
                  className="text-white text-2xl md:text-3xl tracking-[0.08em] mb-6"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
                >
                  {loc.name}
                </h3>
                <div className="flex items-center gap-2 border border-white/80 px-6 py-3 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <span className="text-white text-[10px] uppercase tracking-[0.25em] group-hover:text-black">
                    Discover More
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-white group-hover:text-black"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
