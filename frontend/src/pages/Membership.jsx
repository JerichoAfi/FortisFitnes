import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { IMAGES, MEMBERSHIPS_KEPANJEN, MEMBERSHIPS_GRAHA, WA } from '../data/mock';

const Membership = () => {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="CHOOSE YOUR PATH"
        subtitle="Two locations. Two unique experiences. One uncompromising standard of training."
        image={IMAGES.gym1}
      />

      {/* KEPANJEN */}
      <section className="bg-black py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-white/50 text-[11px] tracking-[0.4em] uppercase mb-3">Kepanjen Branch</p>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl tracking-[0.04em] mb-4" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>
              PREMIUM GYM EXPERIENCE
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">Unlimited access to our flagship facility, all group classes included.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {MEMBERSHIPS_KEPANJEN.map((m, i) => (
              <div key={m.id} className={`relative border ${i === 2 ? 'border-white' : 'border-white/15'} p-8 flex flex-col bg-[#0a0a0a] hover:border-white/60 transition-colors`}>
                {i === 2 && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[10px] uppercase tracking-[0.25em] px-3 py-1">Best Value</span>
                )}
                <h3 className="text-white text-3xl md:text-4xl tracking-wider mb-2" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>{m.duration}</h3>
                <p className="text-white text-2xl mb-6">{m.price}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {m.features.map((f) => (
                    <li key={f} className="flex gap-3 text-white/75 text-sm">
                      <Check size={16} className="text-white/80 flex-shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <a href={WA.kepanjen} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border border-white text-white text-xs uppercase tracking-[0.25em] px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
                  Register Now <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRAHA KENCANA */}
      <section className="bg-[#0a0a0a] py-20 md:py-28 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-white/50 text-[11px] tracking-[0.4em] uppercase mb-3">Graha Kencana Branch</p>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl tracking-[0.04em] mb-4" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>
              PRIVATE GYM SERIES
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">An exclusive training environment for those who want focus, privacy, and tailored coaching.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEMBERSHIPS_GRAHA.map((m) => (
              <div key={m.id} className="group bg-black border border-white/15 overflow-hidden flex flex-col hover:border-white/50 transition-colors">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-white text-2xl tracking-wider mb-2" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>{m.name}</h3>
                  <p className="text-white/60 text-xs uppercase tracking-[0.18em] mb-5">{m.sub}</p>
                  <p className="text-white/75 text-sm leading-relaxed mb-6 flex-1">{m.description}</p>
                  <a href={WA.graha} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border border-white text-white text-xs uppercase tracking-[0.25em] px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
                    {m.cta} <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-center px-6">
        <h3 className="text-white text-3xl md:text-4xl tracking-[0.04em] mb-4" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>STILL DECIDING?</h3>
        <p className="text-white/70 max-w-xl mx-auto mb-8">Chat with our team to find the plan that fits your goals and lifestyle.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={WA.kepanjen} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border border-white text-white text-xs uppercase tracking-[0.25em] px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
            WA Kepanjen
          </a>
          <a href={WA.graha} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border border-white text-white text-xs uppercase tracking-[0.25em] px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
            WA Graha Kencana
          </a>
        </div>
      </section>
    </>
  );
};

export default Membership;
