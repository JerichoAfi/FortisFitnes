import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES, MEMBERSHIPS_GRAHA, WA } from '../data/mock';

const KEPANJEN_PLANS = [
  {
    id: 1,
    duration: '1 BULAN',
    features: ['Unlimited Gym Access', 'Unlimited Group Classes'],
    tagline: 'Cocok untuk kamu yang ingin mulai membangun kebiasaan sehat.',
  },
  {
    id: 2,
    duration: '3 BULAN',
    features: ['Unlimited Gym Access', 'Unlimited Group Classes'],
    tagline: 'Lebih hemat untuk kamu yang ingin berlatih lebih konsisten.',
  },
  {
    id: 3,
    duration: '6 BULAN',
    features: ['Unlimited Gym Access', 'Unlimited Group Classes'],
    tagline: 'Pilihan tepat untuk membangun progres dan menjaga konsistensi latihan.',
  },
  {
    id: 4,
    duration: '12 BULAN',
    features: ['Unlimited Gym Access', 'Unlimited Group Classes'],
    tagline: 'Pilihan terbaik untuk perubahan dan komitmen jangka panjang.',
  },
];

const KEPANJEN_FACILITIES = [
  {
    label: 'AREA LATIHAN LENGKAP',
    desc: '50+ alat import untuk strength, functional, cardio, dan calisthenics.',
    image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/3034qshj_IMG-20250318-WA0004.jpg',
  },
  {
    label: 'UNLIMITED GROUP CLASSES',
    desc: 'Akses berbagai kelas tanpa batas selama membership aktif.',
    image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/a4n5kxug_poundfit.png',
  },
  {
    label: 'FASILITAS PENDUKUNG',
    desc: 'Locker, shower room, hot shower, dan musholla.',
    image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/0qemut2r_IMG-20250514-WA0016.jpg',
  },
  {
    label: 'KENYAMANAN MEMBER',
    desc: 'Free parkir, body composition scale, dan Wi-Fi.',
    image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/rowf3flx_DSC07318-3.JPG',
  },
  {
    label: 'PERSONAL TRAINING',
    desc: 'Pendampingan profesional sesuai kebutuhan dan goals latihanmu.',
    image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/njfwnqgy_2026-06-30%2012.00.03.jpg',
  },
];

const GRAHA_FACILITIES = [
  {
    label: 'PRIVATE GYM EXPERIENCE',
    desc: 'Private, comfortable, and by reservation only.',
    image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/fnt8jbcr_DSCF0204.jpg',
  },
  {
    label: 'IMPORTED GYM EQUIPMENT',
    desc: 'Premium equipment for strength, cardio, and functional training.',
    image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/vg6snfcw_DSCF0676.JPG',
  },
  {
    label: 'PREMIUM AMENITIES',
    desc: 'Hot shower and body composition scale.',
    image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/txnu2i6s_DSC07365.jpg',
  },
  {
    label: 'MEMBER COMFORT',
    desc: 'Free water refill and free Wi-Fi.',
    image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/m96do02j_IMG-20250514-WA0014.jpg',
  },
  {
    label: 'FREE PARKING',
    desc: 'Convenient and easy-access parking area.',
    image: 'https://i.postimg.cc/9QVr6M1r/DSC07318.jpg',
  },
  {
    label: 'CLEAN & HYGIENIC ENVIRONMENT',
    desc: 'Cleaning wipes and disinfectant available in every session.',
    image: 'https://customer-assets.emergentagent.com/job_content-124/artifacts/n7zs0zr7_DSC07350.jpg',
  },
];

const PlanCard = ({ duration, features, tagline, ctaHref }) => {
  return (
    <div className="h-full bg-[#1c1c1c] rounded-2xl px-7 py-9 flex flex-col items-center text-center border border-white/10 hover:border-[#e11d2e] transition-colors duration-300">
      <h3
        className="text-white text-2xl md:text-[28px] tracking-[0.08em] mb-7"
        style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
      >
        {duration}
      </h3>
      <ul className="space-y-3 mb-7">
        {features.map((f) => (
          <li
            key={f}
            className="text-white/90 text-sm md:text-[15px] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            {f}
          </li>
        ))}
      </ul>
      <p className="text-white/65 text-sm leading-relaxed mb-8 flex-1 italic">
        {tagline}
      </p>
      <a
        href={ctaHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-[#e11d2e] border border-[#e11d2e] text-white text-[11px] uppercase tracking-[0.25em] px-6 py-3 hover:bg-[#c81729] hover:border-[#c81729] transition-all duration-300 w-full"
      >
        Register Now <ArrowRight size={13} />
      </a>
    </div>
  );
};

const FacilityHeader = ({ overlay = 'UNLOCK YOUR SELF WITH OUR FACILITIES' }) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center mb-16 md:mb-20">
      <span
        className="block uppercase tracking-[0.04em] text-6xl md:text-8xl lg:text-[140px] leading-none select-none"
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          WebkitTextStroke: '1.5px rgba(255,255,255,0.55)',
          color: 'transparent',
        }}
      >
        OUR FACILITY
      </span>
      <h3
        className="absolute left-1/2 -translate-x-1/2 top-[55%] md:top-[60%] text-white text-2xl md:text-4xl lg:text-5xl tracking-[0.04em] leading-tight whitespace-nowrap px-4"
        style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
      >
        {overlay.split(' WITH ')[0]}
        <span className="block mt-1">WITH {overlay.split(' WITH ')[1]}</span>
      </h3>
    </div>
  );
};

const FacilityCard = ({ label, desc, image }) => {
  return (
    <div className="flex flex-col">
      <p
        className="text-white text-xs md:text-sm uppercase tracking-[0.25em] mb-4"
        style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
      >
        {label}
      </p>
      <div className="aspect-[3/5] rounded-2xl overflow-hidden mb-6 border border-white/5">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <p className="text-white/75 text-sm md:text-[15px] leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

const Membership = () => {
  return (
    <>
      {/* HERO - FULL FRAME IMAGE WITH OVERLAY TEXT */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
        <img
          src="https://customer-assets.emergentagent.com/job_content-124/artifacts/6hab815y_2026-06-30%2012.00.07.jpg"
          alt="Membership"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/85" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p
            className="text-[#e11d2e] text-[11px] md:text-xs tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            Membership
          </p>
          <h1
            className="text-white text-5xl md:text-7xl lg:text-8xl tracking-[0.03em] leading-[1.02] mb-8"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
          >
            MORE THAN
            <br />
            A MEMBERSHIP
          </h1>
          <p
            className="text-white/85 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Menjadi member Fortis Fitness berarti mendapatkan lebih dari sekadar
            tempat latihan &mdash; fasilitas premium, berbagai pilihan kelas,
            dan komunitas yang siap tumbuh bersama.
          </p>
        </div>
      </section>

      {/* FORTIS FITNESS KEPANJEN */}
      <section className="bg-black py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2
              className="text-white text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] mb-4"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
            >
              FORTIS FITNESS KEPANJEN
            </h2>
            <p className="text-[#e11d2e] text-sm md:text-base tracking-[0.25em] uppercase" style={{ fontWeight: 600 }}>
              Premium Gym Experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {KEPANJEN_PLANS.map((p) => (
              <PlanCard
                key={p.id}
                duration={p.duration}
                features={p.features}
                tagline={p.tagline}
                ctaHref={WA.kepanjen}
              />
            ))}
          </div>
        </div>
      </section>

      {/* KEPANJEN - OUR FACILITY */}
      <section className="bg-black py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FacilityHeader />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {KEPANJEN_FACILITIES.map((f) => (
              <FacilityCard key={f.label} {...f} />
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
              className="text-white text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] mb-4"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
            >
              FORTIS FITNESS GRAHA KENCANA
            </h2>
            <p className="text-[#e11d2e] text-sm md:text-base tracking-[0.25em] uppercase" style={{ fontWeight: 600 }}>
              Private Gym Series
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEMBERSHIPS_GRAHA.map((m) => (
              <div
                key={m.id}
                className="bg-[#1c1c1c] rounded-2xl border border-white/10 hover:border-white/40 transition-colors duration-300 overflow-hidden flex flex-col"
              >
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
                    className="inline-flex items-center justify-center gap-2 bg-[#e11d2e] border border-[#e11d2e] text-white text-[11px] uppercase tracking-[0.25em] px-6 py-3 hover:bg-[#c81729] hover:border-[#c81729] transition-all duration-300"
                  >
                    {m.cta} <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRAHA - OUR FACILITY */}
      <section className="bg-black py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FacilityHeader />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {GRAHA_FACILITIES.map((f) => (
              <FacilityCard key={f.label} {...f} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Membership;
