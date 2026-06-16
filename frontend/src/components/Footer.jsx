import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';
import { WA } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* LEFT */}
          <div>
            <div
              className="text-white tracking-[0.35em] text-3xl font-light mb-6"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              RELOAD
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md">
              Lebih dari tempat untuk berolahraga &mdash; Fortis Fitness adalah
              ruang untuk menjadi lebih kuat, lebih sehat, dan terus berkembang
              bersama komunitas yang positif.
            </p>
            <p className="text-white/50 text-xs uppercase tracking-[0.25em] mb-4">
              Ikuti Kami
            </p>
            <div className="flex items-center gap-3">
              <a
                href={WA.ig}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 border border-white/30 flex items-center justify-center text-white/80 hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="http://wa.me/082333327332"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 border border-white/30 flex items-center justify-center text-white/80 hover:bg-white hover:text-black transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT - HUBUNGI KAMI */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-[0.25em] mb-8 pb-3 border-b border-white/15">
              Hubungi Kami
            </h4>

            <div className="space-y-8">
              {/* Kepanjen */}
              <div>
                <h5
                  className="text-white text-lg tracking-[0.08em] mb-3"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
                >
                  Fortis Fitness Kepanjen
                </h5>
                <div className="space-y-2">
                  <p className="flex gap-3 text-white/70 text-sm leading-relaxed">
                    <MapPin size={16} className="text-white/50 flex-shrink-0 mt-0.5" />
                    <span>Jl. Trunojoyo No. 50, Kepanjen, Kab. Malang</span>
                  </p>
                  <p className="flex gap-3 text-white/70 text-sm">
                    <Phone size={16} className="text-white/50 flex-shrink-0" />
                    <a
                      href="http://wa.me/082333327332"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      0823-3332-7332
                    </a>
                  </p>
                </div>
              </div>

              {/* Graha Kencana */}
              <div>
                <h5
                  className="text-white text-lg tracking-[0.08em] mb-1"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
                >
                  Fortis Fitness Graha Kencana
                </h5>
                <p className="text-white/50 text-[11px] uppercase tracking-[0.25em] mb-3">
                  Private Gym Series
                </p>
                <div className="space-y-2">
                  <p className="flex gap-3 text-white/70 text-sm leading-relaxed">
                    <MapPin size={16} className="text-white/50 flex-shrink-0 mt-0.5" />
                    <span>Jl. Graha Kencana Selatan VI No. 5, Blimbing, Kota Malang</span>
                  </p>
                  <p className="flex gap-3 text-white/70 text-sm">
                    <Phone size={16} className="text-white/50 flex-shrink-0" />
                    <a
                      href="http://wa.me/081239201201"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      0812-3920-1201
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK LINKS row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link to="/" className="text-white/60 hover:text-white text-xs uppercase tracking-[0.2em]">Home</Link>
            <Link to="/membership" className="text-white/60 hover:text-white text-xs uppercase tracking-[0.2em]">Membership</Link>
            <Link to="/book-a-class" className="text-white/60 hover:text-white text-xs uppercase tracking-[0.2em]">Book a Class</Link>
            <Link to="/our-trainer" className="text-white/60 hover:text-white text-xs uppercase tracking-[0.2em]">Our Trainer</Link>
            <Link to="/locations" className="text-white/60 hover:text-white text-xs uppercase tracking-[0.2em]">Locations</Link>
            <Link to="/events" className="text-white/60 hover:text-white text-xs uppercase tracking-[0.2em]">Events</Link>
          </div>
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Fortis Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
