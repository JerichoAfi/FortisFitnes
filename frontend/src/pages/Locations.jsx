import React from 'react';
import { MapPin, Phone, Instagram, Music2, ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../data/mock';

const LOCATION_DATA = [
  {
    id: 'kepanjen',
    title: 'FORTIS FITNESS KEPANJEN',
    tagline: 'The First Premium Gym in Kepanjen.',
    description:
      'Fortis Fitness menghadirkan pengalaman latihan yang nyaman, modern, dan berkualitas melalui fasilitas lengkap, 50+ imported gym equipment, unlimited gym & group classes, serta komunitas yang positif dan suportif. Tempat untuk berlatih, berkembang, dan menikmati setiap proses menuju versi terbaikmu.',
    image: IMAGES.gym1,
    address: 'Jl. Trunojoyo No. 50, Kepanjen, Kab. Malang',
    phoneLink: 'https://wa.me/6282333327332',
    phoneLabel: '0823-3332-7332 (Call / WhatsApp)',
    ig: '@fortisfitness.kepanjen',
    igLink:
      'https://www.instagram.com/fortisfitness.kepanjen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    tiktok: '@fortisfitness.kepanjen',
    tiktokLink:
      'https://www.tiktok.com/@fortisfitness.kepanjen?is_from_webapp=1&sender_device=pc',
    maps: 'https://maps.app.goo.gl/8c4YMXptQvJxsVgK6',
  },
  {
    id: 'graha',
    title: 'FORTIS FITNESS GRAHA KENCANA',
    subtitle: 'Private Gym Series',
    tagline: 'Private Gym Series in the Heart of Malang.',
    description:
      'Fortis Fitness Graha Kencana menghadirkan pengalaman latihan yang lebih privat, nyaman, dan fokus melalui konsep private gym by reservation only. Dengan imported gym equipment, fasilitas premium, dan kapasitas hingga 10 orang per sesi, kamu dapat menikmati pengalaman fitness yang lebih personal bersama circle kamu sendiri.',
    highlight: 'Private. Comfortable. By Reservation Only.',
    image: IMAGES.gym2,
    address: 'Jl. Graha Kencana Selatan VI No. 5, Blimbing, Kota Malang',
    phoneLink: 'https://wa.me/6281239201201',
    phoneLabel: '0812-3920-1201 (Call / WhatsApp)',
    ig: '@fortisfitness.grahakencana',
    igLink:
      'https://www.instagram.com/fortisfitness.grahakencana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    tiktok: '@fortisfitness.gk',
    tiktokLink:
      'https://www.tiktok.com/@fortisfitness.gk?is_from_webapp=1&sender_device=pc',
    maps: 'https://maps.app.goo.gl/ZYZgvs43aoxTd7wK7',
  },
];

const Locations = () => {
  return (
    <>
      {/* HERO - FULL FRAME */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
        <img
          src={IMAGES.gym2}
          alt="Locations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/85" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p
            className="text-[#e11d2e] text-[11px] md:text-xs tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            Locations
          </p>
          <h1
            className="text-white text-6xl md:text-8xl lg:text-9xl tracking-[0.02em] leading-[0.95]"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
          >
            LOCATIONS
          </h1>
        </div>
      </section>

      {/* LOCATION DETAILS */}
      <section className="bg-black py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-20 md:space-y-28">
          {LOCATION_DATA.map((loc, idx) => (
            <div
              key={loc.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center ${
                idx % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="relative overflow-hidden aspect-[4/5] md:aspect-[5/6] rounded-2xl">
                <img
                  src={loc.image}
                  alt={loc.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              <div>
                <p className="text-[#e11d2e] text-[11px] tracking-[0.4em] uppercase mb-4" style={{ fontWeight: 600 }}>
                  Branch {String(idx + 1).padStart(2, '0')}
                </p>
                <h2
                  className="text-white text-3xl md:text-4xl lg:text-5xl tracking-[0.03em] leading-tight mb-2"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                >
                  {loc.title}
                </h2>
                {loc.subtitle && (
                  <p className="text-white/55 text-[11px] uppercase tracking-[0.3em] mb-5">
                    {loc.subtitle}
                  </p>
                )}
                <p
                  className="text-white text-lg md:text-xl mb-5"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400 }}
                >
                  {loc.tagline}
                </p>
                <p className="text-white/75 text-sm md:text-base leading-relaxed mb-5">
                  {loc.description}
                </p>
                {loc.highlight && (
                  <p
                    className="text-white/85 text-sm md:text-base italic mb-6"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {loc.highlight}
                  </p>
                )}

                <ul className="space-y-4 mb-8 mt-6 border-t border-white/10 pt-6">
                  <li className="flex gap-4 text-white/85 text-sm leading-relaxed">
                    <MapPin size={18} className="text-white/50 flex-shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </li>
                  <li className="flex gap-4 text-white/85 text-sm">
                    <Phone size={18} className="text-white/50 flex-shrink-0" />
                    <a
                      href={loc.phoneLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {loc.phoneLabel}
                    </a>
                  </li>
                  <li className="flex gap-4 text-white/85 text-sm items-center">
                    <Instagram size={18} className="text-white/50 flex-shrink-0" />
                    <a
                      href={loc.igLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Instagram: {loc.ig}
                    </a>
                  </li>
                  <li className="flex gap-4 text-white/85 text-sm items-center">
                    <Music2 size={18} className="text-white/50 flex-shrink-0" />
                    <a
                      href={loc.tiktokLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      TikTok: {loc.tiktok}
                    </a>
                  </li>
                </ul>

                <a
                  href={loc.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#e11d2e] border border-[#e11d2e] text-white text-xs uppercase tracking-[0.25em] px-7 py-3.5 hover:bg-[#c81729] hover:border-[#c81729] transition-all duration-300"
                >
                  Lihat Lokasi <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}

          {/* TUREN - COMING SOON */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative overflow-hidden aspect-[4/5] md:aspect-[5/6] rounded-2xl">
              <img
                src={IMAGES.gym3}
                alt="Turen"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/70" />
              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <div>
                  <p className="text-white/70 text-[11px] tracking-[0.4em] uppercase mb-4">
                    Opening Soon
                  </p>
                  <p
                    className="text-white text-4xl md:text-5xl tracking-[0.15em]"
                    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                  >
                    COMING SOON
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#e11d2e] text-[11px] tracking-[0.4em] uppercase mb-4" style={{ fontWeight: 600 }}>
                Branch 03
              </p>
              <h2
                className="text-white text-3xl md:text-4xl lg:text-5xl tracking-[0.03em] leading-tight"
                style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
              >
                TUREN
                <span
                  className="text-white/55 text-lg md:text-xl ml-3 italic tracking-normal"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  (Coming Soon)
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;
