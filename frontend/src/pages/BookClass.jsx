import React from 'react';
import { IMAGES, WA } from '../data/mock';

const CLASS_CARDS = [
  {
    name: 'YOGA',
    image: 'https://i.postimg.cc/2SLJYQsS/1782377082152.png',
    desc: 'Yoga adalah kelas low impact yang berfokus pada keseimbangan antara tubuh dan pikiran melalui latihan pernafasan, fleksibilitas, mobility, dan kontrol tubuh. Yoga membantu meningkatkan kualitas postur, kelenturan, keseimbangan, serta memberikan efek relaksasi untuk menjaga kesehatan fisik dan mental.',
  },
  {
    name: 'PRENATAL YOGA',
    image: IMAGES.yoga,
    desc: 'Prenatal Yoga adalah kelas yoga khusus untuk ibu hamil yang dirancang untuk membantu menjaga kebugaran tubuh, fleksibilitas, serta kenyamanan selama masa kehamilan. Dengan gerakan dan teknik pernafasan yang aman, kelas ini membantu mengurangi stres, meningkatkan relaksasi, serta mempersiapkan tubuh menjelang persalinan.',
  },
  {
    name: 'PILATES',
    image: IMAGES.pilates,
    desc: 'Pilates adalah kelas low impact training yang berfokus pada core strength, postur tubuh, flexibility, dan body control. Dengan gerakan yang terkontrol dan teknik pernafasan yang tepat, Pilates membantu meningkatkan stabilitas tubuh, memperbaiki postur, serta mengurangi risiko cedera dalam aktivitas sehari-hari maupun latihan.',
  },
  {
    name: 'ZUMBA',
    image: 'https://i.postimg.cc/PqmRptrs/1782377297351.png',
    desc: 'Zumba adalah kelas cardio dance yang memadukan gerakan fitness dengan irama musik Latin dan internasional yang energik dan menyenangkan. Dengan gerakan yang mudah diikuti, Zumba menjadi salah satu jenis latihan yang efektif untuk membakar kalori, meningkatkan stamina, serta menjaga kebugaran tubuh dengan suasana latihan yang fun dan penuh energi.',
  },
  {
    name: 'AEROBIC',
    image: 'https://i.postimg.cc/J4v6pyGf/1782377307329.png',
    desc: 'Aerobic merupakan kelas cardio workout dengan kombinasi gerakan ritmis mengikuti musik untuk meningkatkan kesehatan jantung, stamina, koordinasi tubuh, serta membantu pembakaran kalori secara efektif. Kelas ini cocok untuk berbagai usia dan level kebugaran.',
  },
  {
    name: 'POUNDFIT',
    image: 'https://i.postimg.cc/ryhYtZcM/1782377409902.png',
    desc: 'Poundfit adalah kelas cardio workout yang menggabungkan gerakan fitness dengan simulasi bermain drum menggunakan ripstix. Dengan tempo musik yang energik dan gerakan full body workout, Poundfit membantu meningkatkan endurance, koordinasi, kekuatan, serta membakar kalori dengan cara yang lebih seru dan interaktif.',
  },
  {
    name: 'BOXING',
    image: IMAGES.boxing,
    desc: 'Boxing adalah kelas latihan yang memadukan teknik dasar tinju dengan latihan cardio dan conditioning. Kelas ini membantu meningkatkan kecepatan, kekuatan, koordinasi, refleks, serta endurance tubuh melalui kombinasi gerakan punching, footwork, dan body movement yang intens dan dinamis.',
  },
  {
    name: 'MUAYTHAI',
    image: IMAGES.bjj,
    desc: 'Muaythai merupakan kelas martial arts conditioning yang mengombinasikan teknik pukulan, tendangan, lutut, dan siku untuk melatih kekuatan, stamina, kelincahan, serta daya tahan tubuh. Selain efektif untuk kebugaran, kelas ini juga membantu meningkatkan fokus dan kepercayaan diri.',
  },
  {
    name: 'CIRCUIT TRAINING',
    image: IMAGES.equip1,
    desc: 'Circuit Training adalah metode latihan dengan kombinasi beberapa gerakan yang dilakukan secara berurutan dalam intensitas tertentu. Kelas ini dirancang untuk meningkatkan strength, endurance, cardio fitness, serta membantu pembakaran kalori secara maksimal melalui variasi latihan full body workout.',
  },
  {
    name: 'CALISTHENICS',
    image: IMAGES.equip2,
    desc: 'Calisthenics adalah metode latihan yang menggunakan berat tubuh sendiri untuk membangun kekuatan, kontrol tubuh, mobility, dan keseimbangan. Kelas ini melatih berbagai gerakan fundamental hingga advanced movement seperti pull up, push up, dips, hingga static hold yang membantu meningkatkan body control dan functional strength.',
  },
  {
    name: 'KIDS BOOTCAMP',
    image: IMAGES.equip3,
    desc: 'Kelas fun & aktif khusus anak-anak yang dirancang untuk membantu meningkatkan kekuatan, koordinasi, kelincahan, keseimbangan, dan kepercayaan diri melalui berbagai aktivitas olahraga yang seru dan interaktif. Dipandu dengan pendekatan yang aman dan menyenangkan, Kids Bootcamp membantu anak tetap aktif, sehat, serta membangun kebiasaan hidup sehat sejak dini.',
  },
];

const SCHEDULE = [
  {
    day: 'SENIN',
    items: [
      { time: '09.00', name: 'Aerobic', coach: 'Coach Kristy' },
      { time: '16.30', name: 'Pound', coach: 'Pro Jeje' },
      { time: '18.30', name: 'Zumba', coach: 'Zin Teguh' },
    ],
  },
  {
    day: 'SELASA',
    items: [
      { time: '08.30', name: 'Zumba', coach: 'Zin Wahyu' },
      { time: '16.30', name: 'Yoga', coach: 'Coach Ericka' },
      { time: '18.30', name: 'Muaythai', coach: 'Coach Octavian' },
    ],
  },
  {
    day: 'RABU',
    items: [
      { time: '08.00', name: 'Zumba', coach: 'Zin Yoke' },
      { time: '16.30', name: 'Mat Pilates', coach: 'Coach Revi' },
      { time: '18.30', name: 'Circuit Training', coach: 'Coach Ragil' },
    ],
  },
  {
    day: 'KAMIS',
    items: [
      { time: '16.30', name: 'Pound', coach: 'Pro Jeje' },
      { time: '19.00', name: 'Zumba', coach: 'Zin Gilang' },
    ],
  },
  {
    day: "JUM'AT",
    items: [
      { time: '08.00', name: 'Yoga', coach: 'Coach Ericka' },
      { time: '16.30', name: 'Calisthenics', coach: 'Coach Tasya' },
      { time: '18.30', name: 'Zumba', coach: 'Zin Ridwan' },
    ],
  },
  {
    day: 'SABTU',
    items: [
      { time: '08.00', name: 'Zumba', coach: 'Zin Jane' },
      { time: '09.30', name: 'Yoga Prenatal', coach: 'Bidan Aini' },
      { time: '16.00', name: 'Boxing', coach: 'Coach Octavian' },
    ],
  },
  {
    day: 'MINGGU',
    items: [{ time: '09.00', name: 'Kids Bootcamp', coach: 'Coach Ida' }],
  },
];

const ClassCard = ({ name, image, desc }) => {
  return (
    <div className="flex flex-col">
      <div className="aspect-square rounded-2xl overflow-hidden mb-6 border border-white/5">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <h3
        className="text-white text-xl md:text-2xl tracking-[0.08em] text-center mb-5"
        style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
      >
        {name}
      </h3>
      <p className="text-white/75 text-sm leading-relaxed text-center px-2">
        {desc}
      </p>
    </div>
  );
};

const BookClass = () => {
  return (
    <>
      {/* HERO - FULL FRAME IMAGE WITH OVERLAY TEXT */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
        <img
          src={IMAGES.boxing}
          alt="Fortis Classes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/85" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p
            className="text-[#e11d2e] text-[11px] md:text-xs tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            Book a Class
          </p>
          <h1
            className="text-white text-5xl md:text-7xl lg:text-8xl tracking-[0.03em] leading-[1.02]"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
          >
            FORTIS CLASSES
          </h1>
        </div>
      </section>

      {/* CHOOSE YOUR CLASS */}
      <section className="bg-black py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2
              className="text-white text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] mb-7"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
            >
              CHOOSE YOUR CLASS
            </h2>
            <p
              className="text-white/75 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Berbagai pilihan kelas untuk membantu kamu bergerak lebih aktif,
              latihan lebih konsisten, dan menikmati proses bersama komunitas
              Fortis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-14">
            {CLASS_CARDS.map((c) => (
              <ClassCard key={c.name} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* JUNE CLASS - SCHEDULE */}
      <section className="bg-[#0a0a0a] py-20 md:py-28 border-t border-white/5">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2
              className="text-white text-4xl md:text-5xl lg:text-6xl tracking-[0.04em]"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
            >
              SCHEDULE GROUP CLASS KEPANJEN
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SCHEDULE.map((d) => (
              <div
                key={d.day}
                className="bg-black border border-white/10 rounded-2xl p-7 hover:border-white/30 transition-colors"
              >
                <h3
                  className="text-white text-2xl tracking-[0.18em] mb-5 pb-3 border-b border-white/10"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
                >
                  {d.day}
                </h3>
                <ul className="space-y-3">
                  {d.items.map((it, idx) => (
                    <li
                      key={idx}
                      className="flex flex-wrap items-baseline gap-x-3 text-white/85 text-sm md:text-[15px]"
                    >
                      <span
                        className="text-white font-medium tracking-wider min-w-[55px]"
                        style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
                      >
                        {it.time}
                      </span>
                      <span className="text-white/30">&mdash;</span>
                      <span className="text-white">{it.name}</span>
                      <span className="text-white/30">&mdash;</span>
                      <span className="text-white/65">{it.coach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Info tambahan */}
          <div className="mt-12 max-w-2xl mx-auto text-center bg-black/40 border border-[#e11d2e]/30 rounded-2xl px-6 py-7">
            <p className="text-[#e11d2e] text-[11px] tracking-[0.4em] uppercase mb-4" style={{ fontWeight: 600 }}>
              Info Tambahan
            </p>
            <p className="text-white/85 text-sm md:text-base leading-relaxed mb-2">
              Reservasi kelas dibuka setiap H-1 pukul 09.00 via WhatsApp:{' '}
              <a
                href={WA.kepanjen}
                target="_blank"
                rel="noreferrer"
                className="text-[#e11d2e] font-medium underline underline-offset-4 hover:text-[#c81729] transition-colors"
              >
                0823-3332-7332
              </a>
            </p>
            <p className="text-white/65 text-sm md:text-base italic">
              Kuota terbatas
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookClass;
