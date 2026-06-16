import React from 'react';
import { HERO_IMAGE } from '../data/mock';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <p
          className="text-white/70 text-[11px] tracking-[0.4em] uppercase mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Reload Boutique Gym
        </p>
        <h1
          className="text-white text-5xl md:text-7xl lg:text-8xl tracking-[0.04em] leading-[1.05] mb-8"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
        >
          WHERE FITNESS
          <br />
          MEETS LIFESTYLE
        </h1>
        <p
          className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Reload Boutique Gym is your sanctuary in the city, where cutting-edge
          technology meets personalized care. We&apos;re not just a gym &mdash;
          we&apos;re your third space. A place where you can push boundaries,
          achieve your goals and become your best self.
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
