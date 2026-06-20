import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, WA } from '../data/mock';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-black/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center">
          <img
            src="https://customer-assets.emergentagent.com/job_content-124/artifacts/bq05qpbf_photo_2026-06-20%2007.14.45.jpeg"
            alt="Fortis Fitness"
            className="h-10 md:h-12 w-auto select-none"
            style={{ mixBlendMode: 'screen', filter: 'contrast(3.5) brightness(0.85)' }}
            draggable="false"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                `text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-white/70 hover:text-white'
                }`
              }
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={WA.kepanjen}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center justify-center border border-white/70 text-white text-[11px] uppercase tracking-[0.2em] px-5 py-3 hover:bg-white hover:text-black transition-all duration-300"
        >
          Mulai Berlatih
        </a>

        <button className="lg:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 border-t border-white/5">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.18em] ${isActive ? 'text-white' : 'text-white/70'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={WA.kepanjen}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-white/70 text-white text-xs uppercase tracking-[0.2em] px-5 py-3 w-fit"
            >
              Mulai Berlatih
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
