import React from 'react';
import { LUXURY_IMAGES, HERO_IMAGE } from '../data/mock';

const Champion = () => {
  const images = [LUXURY_IMAGES[0], HERO_IMAGE, LUXURY_IMAGES[1]];
  return (
    <section className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {images.map((src, i) => (
          <div key={i} className="aspect-[4/3] overflow-hidden">
            <img
              src={src}
              alt="Train"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center px-6 py-24 md:py-32">
        <h2
          className="text-white/80 text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] mb-8"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
        >
          TRAIN LIKE A CHAMPION
        </h2>
        <p
          className="text-white/70 text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Reload is redefining the gym experience with an elite approach to
          fitness and wellness. As pioneers in the boutique gym industry, we
          bring together cutting-edge training techniques, state-of-the-art
          New Tech equipment, and a team of expert trainers in a premium,
          modern environment. Reload is where fitness goals are achieved, and
          boundaries are pushed.
        </p>
      </div>
    </section>
  );
};

export default Champion;
