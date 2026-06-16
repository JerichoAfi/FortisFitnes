import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES, MEMBERSHIPS_KEPANJEN, MEMBERSHIPS_GRAHA, WA } from '../data/mock';

const PlanCard = ({ duration, price, features, ctaLabel, ctaHref, best }) => {
  return (
    <div className="relative h-full">
      {best && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-white text-black text-[10px] uppercase tracking-[0.25em] px-3 py-1 whitespace-nowrap">
          Best Value
        </span>
      )}
      <div
        className={`h-full bg-[#1c1c1c] rounded-2xl px-7 py-9 flex flex-col items-center text-center border ${
          best ? 'border-white/60' : 'border-white/10'
        } hover:border-white/40 transition-colors duration-300`}
      >
        <h3
          className="text-white text-2xl md:text-[28px] tracking-[0.04em] mb-1"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
        >
          {duration}
        </h3>
        <p
          className="text-white text-xl md:text-2xl mb-7"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
        >
          {price}
        </p>
        <ul className="space-y-3 mb-9 flex-1">
          {features.map((f) => (
            <li key={f} className="text-white/85 text-sm md:text-[15px] leading-relaxed">
              {f}
            </li>
          ))}
        </ul>
        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-white text-white text-[11px] uppercase tracking-[0.25em] px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 w-full"
        >
          Register Now <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
};

const Membership = () => {
  return (
    <>
      {/* HERO - FULL FRAME IMAGE, NO TEXT */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={IMAGES.gym1}
          alt="Membership"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
      </section>

      {/* INTRO */}
      <section className="bg-black pt-20 md:pt-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-white/50 text-[11px] tracking-[0.4em] uppercase mb-4">
            Membership
          </p>
          <h1
            className="text-white text-4xl md:text-5xl lg:text-6xl tracking-[0.04em] mb-6"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
          >
            MORE THAN A MEMBERSHIP
          </h1>
          <p
            className="text-white/75 text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Menjadi member Fortis Fitness berarti mendapatkan lebih dari sekadar
            tempat latihan &mdash; fasilitas premium, berbagai pilihan kelas,
            dan komunitas yang siap tumbuh bersama.
          </p>
        </div>
      </section>

      {/* KEPANJEN BRANCH */}
      <section className="bg-black py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2
              className="text-white text-5xl md:text-7xl lg:text-8xl tracking-[0.04em] mb-6"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
            >
              KEPANJEN BRANCH
            </h2>
            <p
              className="text-white/55 text-sm md:text-base tracking-[0.25em] uppercase mb-2"
            >
              Premium Gym Experience
            </p>
            <p className="text-white/65 max-w-2xl mx-auto text-sm md:text-base">
              Unlimited access to our flagship facility, all group classes included.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEMBERSHIPS_KEPANJEN.map((m, i) => (
              <PlanCard
                key={m.id}
                duration={m.duration}
                price={m.price}
                features={m.features}
                ctaLabel="Register Now"
                ctaHref={WA.kepanjen}
                best={i === 2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="border-t border-white/15" />
      </div>

      {/* GRAHA KENCANA BRANCH */}
      <section className="bg-black py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2
              className="text-white text-5xl md:text-7xl lg:text-8xl tracking-[0.04em] mb-6"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
            >
              GRAHA KENCANA
            </h2>
            <p className="text-white/55 text-sm md:text-base tracking-[0.25em] uppercase mb-2">
              Private Gym Series
            </p>
            <p className="text-white/65 max-w-2xl mx-auto text-sm md:text-base">
              Pengalaman latihan yang lebih privat, fokus, dan personal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEMBERSHIPS_GRAHA.map((m) => (
              <div key={m.id} className="bg-[#1c1c1c] rounded-2xl border border-white/10 hover:border-white/40 transition-colors duration-300 overflow-hidden flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1 text-center">
                  <h3
                    className="text-white text-xl md:text-2xl tracking-[0.04em] mb-2"
                    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
                  >
                    {m.name}
                  </h3>
                  <p className="text-white/55 text-[11px] uppercase tracking-[0.2em] mb-4">
                    {m.sub}
                  </p>
                  <p className="text-white/75 text-sm leading-relaxed mb-7 flex-1">
                    {m.description}
                  </p>
                  <a
                    href={WA.graha}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-white text-white text-[11px] uppercase tracking-[0.25em] px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {m.cta} <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16 md:py-20 text-center px-6 border-t border-white/5">
        <h3
          className="text-white text-3xl md:text-4xl tracking-[0.04em] mb-4"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
        >
          STILL DECIDING?
        </h3>
        <p className="text-white/70 max-w-xl mx-auto mb-8">
          Chat dengan tim kami untuk menemukan paket yang paling sesuai dengan
          tujuan dan gaya hidupmu.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={WA.kepanjen}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white text-white text-xs uppercase tracking-[0.25em] px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
          >
            WA Kepanjen
          </a>
          <a
            href={WA.graha}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white text-white text-xs uppercase tracking-[0.25em] px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
          >
            WA Graha Kencana
          </a>
        </div>
      </section>
    </>
  );
};

export default Membership;
