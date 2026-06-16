import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import {
  HERO_IMAGE,
  IMAGES,
  CLASSES,
  LOCATIONS,
  TRAINERS_KEPANJEN,
  TRAINERS_GRAHA,
  WA,
} from '../data/mock';

const Home = () => {
  const [activeClass, setActiveClass] = useState(0);
  // Pick 4 hero classes for the tab section (Boxing, Muaythai, Pilates, Yoga)
  const heroClasses = [
    CLASSES.find((c) => c.name === 'BOXING'),
    CLASSES.find((c) => c.name === 'MUAYTHAI'),
    CLASSES.find((c) => c.name === 'PILATES'),
    CLASSES.find((c) => c.name === 'YOGA'),
  ].filter(Boolean);

  const current = heroClasses[activeClass] || heroClasses[0];

  const previewTrainers = [
    ...TRAINERS_KEPANJEN.slice(0, 2),
    ...TRAINERS_GRAHA.slice(0, 2),
  ];
  const trainerImgs = [IMAGES.trainer1, IMAGES.trainer2, IMAGES.equip1, IMAGES.bjj];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black" />

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
          <Link
            to="/membership"
            className="inline-flex items-center justify-center border border-white text-white text-xs uppercase tracking-[0.25em] px-10 py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            Become a Member
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-[1px] h-12 bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* WHERE LUXURY AND FITNESS MEETS */}
      <section className="bg-black py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-20">
            {[IMAGES.equip2, IMAGES.battle].map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden group aspect-square"
              >
                <img
                  src={src}
                  alt="Luxury fitness"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h2
              className="text-white/80 text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] leading-tight mb-8"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
            >
              WHERE LUXURY
              <br />
              AND FITNESS MEETS
            </h2>
            <p
              className="text-white/70 text-base md:text-lg leading-relaxed mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Reload Boutique Gym is your sanctuary in the city, where
              cutting-edge technology meets personalized care. We&apos;re not
              just a gym; we&apos;re your third space &mdash; a place where you
              can push boundaries, achieve your goals and become your best self.
            </p>
            <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-8">
              Ready to redefine your limits?
            </p>
            <Link
              to="/membership"
              className="inline-flex items-center justify-center border border-white text-white text-xs uppercase tracking-[0.25em] px-10 py-4 hover:bg-white hover:text-black transition-all duration-300"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </section>

      {/* JOIN OUR CLASSES TODAY */}
      <section className="relative bg-black overflow-hidden">
        <div className="relative min-h-[700px]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url(${current.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 md:py-32">
            <div className="text-center mb-16">
              <h2
                className="text-white text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] mb-6"
                style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
              >
                JOIN OUR CLASSES TODAY
              </h2>
              <p
                className="text-white/75 text-base md:text-lg max-w-2xl mx-auto"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                We provide various classes such as Boxing, Muaythai, Pilates,
                Yoga and many more.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 max-w-5xl mx-auto mb-12">
              {heroClasses.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => setActiveClass(idx)}
                  className={`px-4 py-8 text-center transition-all duration-300 ${
                    activeClass === idx
                      ? 'bg-white text-black'
                      : 'bg-black/40 backdrop-blur-sm text-white hover:bg-black/60'
                  }`}
                >
                  <span
                    className="text-xs md:text-sm tracking-[0.2em] uppercase"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    {c.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-center mb-10">
              <p
                className="text-white/85 text-lg leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {current.description}
              </p>
            </div>

            <div className="text-center">
              <Link
                to="/book-a-class"
                className="inline-flex items-center justify-center border border-white text-white text-xs uppercase tracking-[0.25em] px-10 py-4 hover:bg-white hover:text-black transition-all duration-300"
              >
                Book a Class
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR LOCATIONS */}
      <section className="bg-black py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2
              className="text-white text-4xl md:text-6xl lg:text-7xl tracking-[0.04em]"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
            >
              OUR LOCATIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <Link
                to="/locations"
                key={loc.id}
                className="relative group overflow-hidden cursor-pointer aspect-[3/4] block"
              >
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                  {loc.status === 'Coming Soon' && (
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/80 border border-white/40 px-3 py-1 mb-4 bg-black/30">
                      Coming Soon
                    </span>
                  )}
                  <h3
                    className="text-white text-2xl md:text-3xl tracking-[0.08em] mb-6"
                    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
                  >
                    {loc.name}
                  </h3>
                  <div className="flex items-center gap-2 border border-white/80 px-6 py-3 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <span className="text-white text-[10px] uppercase tracking-[0.25em] group-hover:text-black">
                      Discover More
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-white group-hover:text-black"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION DETAILS */}
      <section className="bg-[#0a0a0a] py-24 md:py-28 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="text-white">
                <h3
                  className="text-2xl md:text-3xl tracking-[0.1em] mb-8 pb-4 border-b border-white/15"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
                >
                  {loc.name}
                </h3>
                <ul className="space-y-5">
                  <li className="flex gap-4 text-white/75 text-sm leading-relaxed">
                    <MapPin size={18} className="text-white/60 flex-shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </li>
                  <li className="flex gap-4 text-white/75 text-sm">
                    <Phone size={18} className="text-white/60 flex-shrink-0" />
                    <a
                      href={loc.wa}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {loc.waLabel}
                    </a>
                  </li>
                  <li className="flex gap-4 text-white/75 text-sm">
                    <Mail size={18} className="text-white/60 flex-shrink-0" />
                    <a
                      href="mailto:info@reloadgym.id"
                      className="hover:text-white transition-colors"
                    >
                      info@reloadgym.id
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAIN LIKE A CHAMPION */}
      <section className="bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {[IMAGES.equip2, HERO_IMAGE, IMAGES.battle].map((src, i) => (
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
            equipment, and a team of expert trainers in a premium, modern
            environment. Reload is where fitness goals are achieved, and
            boundaries are pushed.
          </p>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2
              className="text-white text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] mb-6"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
            >
              OUR TEAM
            </h2>
            <p
              className="text-white/70 text-base md:text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our champion athletes and trainers have vast fitness experience to
              help you achieve your desired goals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14">
            {previewTrainers.map((t, i) => (
              <div
                key={t.location + t.id}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={trainerImgs[i % trainerImgs.length]}
                    alt={t.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white/60 text-[10px] uppercase tracking-[0.25em] mb-1">
                    {t.location}
                  </p>
                  <h3
                    className="text-white text-lg tracking-wider"
                    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
                  >
                    {t.name}
                  </h3>
                  <p className="text-white/70 text-xs uppercase tracking-[0.15em] mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/our-trainer"
              className="inline-flex items-center justify-center border border-white text-white text-xs uppercase tracking-[0.25em] px-10 py-4 hover:bg-white hover:text-black transition-all duration-300"
            >
              View All Trainers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
