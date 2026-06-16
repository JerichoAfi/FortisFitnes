import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Music2 } from 'lucide-react';
import { WA } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="text-white tracking-[0.35em] text-3xl font-light mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
              RELOAD
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              More than just a gym &mdash; a premium training community across Malang. Train. Grow. Thrive.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/30 flex items-center justify-center text-white/80 hover:bg-white hover:text-black transition-all duration-300" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/30 flex items-center justify-center text-white/80 hover:bg-white hover:text-black transition-all duration-300" aria-label="TikTok">
                <Music2 size={16} />
              </a>
              <a href={WA.kepanjen} target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/30 flex items-center justify-center text-white/80 hover:bg-white hover:text-black transition-all duration-300" aria-label="WhatsApp">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-white/60 hover:text-white">Home</Link></li>
              <li><Link to="/membership" className="text-white/60 hover:text-white">Membership</Link></li>
              <li><Link to="/book-a-class" className="text-white/60 hover:text-white">Book a Class</Link></li>
              <li><Link to="/our-trainer" className="text-white/60 hover:text-white">Our Trainer</Link></li>
              <li><Link to="/locations" className="text-white/60 hover:text-white">Locations</Link></li>
              <li><Link to="/events" className="text-white/60 hover:text-white">Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-5">Membership</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><em>Kepanjen &mdash; +62 851 0000 0001</em></li>
              <li><em>Graha Kencana &mdash; +62 851 0000 0002</em></li>
              <li><em>Turen &mdash; Coming Soon</em></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-5">Contact</h4>
            <p className="text-white/70 text-sm mb-6"><em>info@reloadgym.id</em></p>
            <div className="flex flex-col gap-2">
              <a href={WA.kepanjen} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center border border-white/70 text-white text-[11px] uppercase tracking-[0.2em] px-5 py-3 hover:bg-white hover:text-black transition-all duration-300 w-fit">
                Schedule a Tour
              </a>
              <a href={WA.graha} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center border border-white/70 text-white text-[11px] uppercase tracking-[0.2em] px-5 py-3 hover:bg-white hover:text-black transition-all duration-300 w-fit">
                Request Callback
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/50 text-xs">Copyright &copy; {new Date().getFullYear()} Reload Gym. All rights reserved.</p>
          <p className="text-white/40 text-xs uppercase tracking-[0.2em]">More Than Just A Gym</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
