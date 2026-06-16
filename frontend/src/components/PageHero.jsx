import React from 'react';

const PageHero = ({ eyebrow, title, subtitle, image }) => {
  return (
    <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black" />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {eyebrow && (
          <p className="text-white/70 text-[11px] tracking-[0.4em] uppercase mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
            {eyebrow}
          </p>
        )}
        <h1
          className="text-white text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] leading-[1.05] mb-6"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
