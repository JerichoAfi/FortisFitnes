import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { LOCATIONS } from '../data/mock';

const LocationDetails = () => {
  return (
    <section id="contact" className="bg-[#0a0a0a] py-24 md:py-28 border-t border-white/5">
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
                  <a href={`tel:${loc.phone}`} className="hover:text-white transition-colors">
                    {loc.phone}
                  </a>
                </li>
                <li className="flex gap-4 text-white/75 text-sm">
                  <Mail size={18} className="text-white/60 flex-shrink-0" />
                  <a href={`mailto:${loc.email}`} className="hover:text-white transition-colors">
                    {loc.email}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationDetails;
