import React from 'react';
import { Sparkles, Dumbbell, Footprints, Award, Flower2 } from 'lucide-react';
import { IMAGES } from '../data/mock';

const EVENTS = [
  {
    id: 'special-class',
    title: 'SPECIAL CLASS',
    subtitle: 'Independence Day, Fortis Anniversary, etc',
    Icon: Sparkles,
    photos: [
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/cbw3q0m8_SPECIAL%20CLASS.jpeg',
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/5ztacu6u_SPECIAL%20CLASS1.jpeg',
    ],
  },
  {
    id: 'community-games',
    title: 'FORTIS COMMUNITY GAMES',
    subtitle: 'a community driven calisthenics competition',
    Icon: Dumbbell,
    square: true,
    photos: [
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/8ikrceg7_IMG_2503.JPEG',
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/udb7iz6j_IMG_2507-2.jpeg',
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/z30m69hd_IMG_7756.png',
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/bjwc0owo_IMG_7757.png',
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/q9au3bcu_IMG_7758.png',
    ],
  },
  {
    id: 'community-run',
    title: 'FORTIS COMMUNITY RUN',
    subtitle: 'in collaboration with Klub Of Traps',
    Icon: Footprints,
    square: true,
    photos: [
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/ciesz0d0_IMG_7755.PNG',
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/93lws7kd_IMG_7754.PNG',
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/7cfwf4dy_IMG_7753.PNG',
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/ju1tdjka_1782368152230.png',
    ],
  },
  {
    id: 'certified-instructor',
    title: 'CERTIFIED FITNESS INSTRUCTOR',
    subtitle: 'by Prima Fit Academy',
    Icon: Award,
    photos: [
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/toa3efpw_CERTIFIED%20FITNESS%20INSTRUCTOR.jpeg',
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/zyx7qdcr_CERTIFIED%20FITNESS%20INSTRUCTOR1.jpeg',
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/3e8obzxj_CERTIFIED%20FITNESS%20INSTRUCTOR2.jpeg',
    ],
  },
  {
    id: 'serenity-flow',
    title: 'SERENITY FLOW',
    subtitle: "'Yoga Among The Rice Fields'",
    Icon: Flower2,
    photos: [
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/hglr28to_Yoga%20Serenity%20Flow%20Fortiss%20%2853%20of%20676%29.JPEG',
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/n94382kd_Yoga%20Serenity%20Flow%20Fortiss%20%28112%20of%20676%29.JPEG',
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/620sdldg_Yoga%20Serenity%20Flow%20Fortiss%20%28187%20of%20676%29.JPEG',
      'https://customer-assets.emergentagent.com/job_content-124/artifacts/npyoygmq_Yoga%20Serenity%20Flow%20Fortiss%20%28635%20of%20676%29.JPEG',
    ],
  },
];

const EventCard = ({ event }) => {
  const { Icon, title, subtitle, photos, square } = event;
  return (
    <div className="bg-[#0a0a0a] border border-white/15 rounded-3xl p-6 md:p-8 hover:border-[#e11d2e] transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center gap-5 mb-7">
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

      {/* Photo collage — square aspect for 4-photo events, portrait 3:4 for 5-photo events */}
      {photos.length === 4 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((src, i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      ) : photos.length === 3 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((src, i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      ) : photos.length === 2 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {photos.map((src, i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {photos.slice(0, 5).map((src, i) => (
            <div key={i} className={`${square ? 'aspect-square' : 'aspect-[3/4]'} rounded-2xl overflow-hidden`}>
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Events = () => {
  return (
    <>
      {/* HERO - FULL FRAME, ONLY EVENTS TITLE */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
        <img
          src="https://customer-assets.emergentagent.com/job_content-124/artifacts/n7yx6luk_Header%20Event.png"
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

      {/* EVENT CARDS - ALL UNIFORM LAYOUT */}
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
