import React from 'react';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { IMAGES, EVENTS, WA } from '../data/mock';

const Events = () => {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="BUILT WITH THE COMMUNITY"
        subtitle="Signature classes, competitions, community runs, and education programs - more than just workouts."
        image={IMAGES.battle}
      />

      {/* INTRO / COMPANY PROFILE STYLE */}
      <section className="bg-black py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/50 text-[11px] tracking-[0.4em] uppercase mb-4">Our Story</p>
          <h2 className="text-white text-3xl md:text-5xl tracking-[0.04em] mb-6" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>
            MORE THAN A GYM. <br /> A MOVEMENT.
          </h2>
          <p className="text-white/70 leading-relaxed">
            Reload was born from a simple belief: fitness is more powerful when shared. We host events that bring our community together &mdash; from sweat-soaked competitions to mindful retreats &mdash; building bonds that go far beyond the gym floor.
          </p>
        </div>
      </section>

      {/* EVENT LIST */}
      <section className="bg-[#0a0a0a] py-20 md:py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-16">
          {EVENTS.map((e, i) => (
            <div key={e.id} className={`grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''}`}>
              <div className="md:col-span-7 relative overflow-hidden aspect-[16/10] group">
                <img src={e.image} alt={e.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
                <span className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] text-white border border-white/40 px-3 py-1 bg-black/40 backdrop-blur-sm">
                  {e.tag}
                </span>
              </div>
              <div className="md:col-span-5">
                <p className="text-white/40 text-[11px] tracking-[0.4em] uppercase mb-3">Event {String(i + 1).padStart(2, '0')}</p>
                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl tracking-[0.04em] mb-5" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>{e.name}</h3>
                <p className="text-white/70 leading-relaxed mb-7">{e.description}</p>
                <a href={WA.kepanjen} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white text-white text-xs uppercase tracking-[0.25em] px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 text-center px-6">
        <h3 className="text-white text-3xl md:text-4xl tracking-[0.04em] mb-4" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>JOIN THE NEXT ONE</h3>
        <p className="text-white/70 max-w-xl mx-auto mb-8">Be the first to hear about upcoming events, classes and community programs.</p>
        <a href={WA.kepanjen} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border border-white text-white text-xs uppercase tracking-[0.25em] px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
          Join the Community
        </a>
      </section>
    </>
  );
};

export default Events;
