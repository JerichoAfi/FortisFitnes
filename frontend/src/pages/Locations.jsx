import React from 'react';
import { MapPin, Phone, Instagram, Music2, ArrowUpRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { IMAGES, LOCATIONS } from '../data/mock';

const Locations = () => {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="OUR HOMES"
        subtitle="Three locations across Malang. Same standard, same community, same energy."
        image={IMAGES.gym2}
      />

      <section className="bg-black py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-16">
          {LOCATIONS.map((loc, idx) => (
            <div key={loc.id} className={`grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center ${idx % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''}`}>
              <div className="relative overflow-hidden aspect-[4/5] md:aspect-[5/6]">
                <img src={loc.image} alt={loc.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                {loc.status === 'Coming Soon' && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white text-3xl md:text-4xl tracking-[0.2em]" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>COMING SOON</p>
                      <p className="text-white/60 text-xs uppercase tracking-[0.3em] mt-3">Stay Tuned</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              <div>
                <p className="text-white/50 text-[11px] tracking-[0.4em] uppercase mb-3">Branch {String(idx + 1).padStart(2, '0')}</p>
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl tracking-[0.04em] mb-2" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}>{loc.name}</h2>
                <p className={`inline-block text-[10px] uppercase tracking-[0.3em] mb-8 ${loc.status === 'Open' ? 'text-green-400' : 'text-yellow-400'}`}>
                  {loc.status === 'Open' ? '• Open Now' : '• Opening Soon'}
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex gap-4 text-white/80 text-sm leading-relaxed">
                    <MapPin size={18} className="text-white/50 flex-shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </li>
                  <li className="flex gap-4 text-white/80 text-sm">
                    <Phone size={18} className="text-white/50 flex-shrink-0" />
                    <span>{loc.waLabel}</span>
                  </li>
                  <li className="flex gap-4 text-white/80 text-sm items-center">
                    <Instagram size={18} className="text-white/50 flex-shrink-0" />
                    <span>{loc.ig}</span>
                  </li>
                  <li className="flex gap-4 text-white/80 text-sm items-center">
                    <Music2 size={18} className="text-white/50 flex-shrink-0" />
                    <span>{loc.tiktok}</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a href={loc.maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white text-white text-xs uppercase tracking-[0.25em] px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
                    Lihat Lokasi <ArrowUpRight size={14} />
                  </a>
                  {loc.status === 'Open' && (
                    <a href={loc.wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white/40 text-white text-xs uppercase tracking-[0.25em] px-6 py-3 hover:border-white transition-all duration-300">
                      WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Locations;
