import React from 'react';
import { Sparkles, Dumbbell, Footprints, Award, Flower2 } from 'lucide-react';
import { IMAGES } from '../data/mock';

const EVENTS = [
  {
    id: 'special-class',
    title: 'SPECIAL CLASS',
    subtitle: 'Independence Day, Fortis Anniversary, etc',
    Icon: Sparkles,
    layout: 'a',
    photos: [
      IMAGES.yoga,
      IMAGES.pilates,
      IMAGES.boxing,
      IMAGES.bjj,
      IMAGES.equip3,
    ],
  },
  {
    id: 'community-games',
    title: 'FORTIS COMMUNITY GAMES',
    subtitle: 'a community driven calisthenics competition',
    Icon: Dumbbell,
    layout: 'row5',
    photos: [
      IMAGES.equip2,
      IMAGES.equip1,
      IMAGES.battle,
      IMAGES.equip3,
      IMAGES.bjj,
    ],
  },
  {
    id: 'community-run',
    title: 'FORTIS COMMUNITY RUN',
    subtitle: 'in collaboration with Klub Of Traps',
    Icon: Footprints,
    layout: 'row4',
    photos: [IMAGES.gym1, IMAGES.gym2, IMAGES.gym3, IMAGES.battle],
  },
  {
    id: 'certified-instructor',
    title: 'CERTIFIED FITNESS INSTRUCTOR',
    subtitle: 'by Prima Fit Academy',
    Icon: Award,
    layout: 'b',
    photos: [IMAGES.trainer1, IMAGES.bjj, IMAGES.equip1, IMAGES.boxing],
  },
  {
    id: 'serenity-flow',
    title: 'SERENITY FLOW',
    subtitle: "'Yoga Among The Rice Fields'",
    Icon: Flower2,
    layout: 'b',
    photos: [IMAGES.yoga, IMAGES.trainer2, IMAGES.pilates, IMAGES.yoga],
  },
];

const EventHeader = ({ Icon, title, subtitle }) => (
  <div className="flex items-center gap-5 mb-6">
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#e11d2e] flex items-center justify-center flex-shrink-0">
      <Icon className="text-white" size={32} strokeWidth={1.5} />
    </div>
    <div className="w-px h-14 md:h-16 bg-[#e11d2e]/70" />
    <div className="min-w-0">
      <h3
        className="text-white text-xl md:text-2xl lg:text-3xl tracking-[0.02em] leading-tight"
        style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
      >
        {title}
      </h3>
      <p className="text-white/80 text-sm md:text-base mt-1">{subtitle}</p>
    </div>
  </div>
);

const PhotoCollage = ({ photos, layout }) => {
  // Various collage layouts mirroring the reference image
  if (layout === 'row5') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {photos.slice(0, 5).map((src, i) => (
          <div key={i} className="aspect-square rounded-xl overflow-hidden">
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  }

  if (layout === 'row4') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {photos.slice(0, 4).map((src, i) => (
          <div key={i} className="aspect-square rounded-xl overflow-hidden">
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  }

  if (layout === 'b') {
    // 3 large + 1 stacked column variant (like Certified Fitness Instructor reference)
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div className="aspect-[4/3] rounded-xl overflow-hidden">
          <img src={photos[0]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
        <div className="aspect-[4/3] rounded-xl overflow-hidden">
          <img src={photos[1]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
        <div className="grid grid-rows-2 gap-3">
          <div className="rounded-xl overflow-hidden">
            <img src={photos[2]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={photos[3]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
        </div>
      </div>
    );
  }

  // layout 'a' — large left + grid of smaller photos
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden">
        <img
          src={photos[0]}
          alt=""
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="aspect-square rounded-xl overflow-hidden col-span-2">
          <img src={photos[1]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
        <div className="aspect-square rounded-xl overflow-hidden">
          <img src={photos[2]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
        <div className="aspect-square rounded-xl overflow-hidden">
          <img src={photos[3]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ event }) => {
  return (
    <div className="bg-[#0a0a0a] border border-white/15 rounded-3xl p-6 md:p-8 hover:border-[#e11d2e] transition-colors duration-300">
      <EventHeader Icon={event.Icon} title={event.title} subtitle={event.subtitle} />
      <PhotoCollage photos={event.photos} layout={event.layout} />
    </div>
  );
};

const Events = () => {
  return (
    <>
      {/* HERO - FULL FRAME, ONLY EVENTS TITLE */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
        <img
          src={IMAGES.battle}
          alt="Events"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/85" />

        <div className="relative z-10 text-center px-6">
          <h1
            className="text-white text-7xl md:text-9xl lg:text-[180px] tracking-[0.02em] leading-[0.95]"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
          >
            EVENTS
          </h1>
        </div>
      </section>

      {/* EVENT CARDS */}
      <section className="bg-black py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 space-y-8">
          {EVENTS.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Events;
