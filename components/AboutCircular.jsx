"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const aboutPoints = [
  {
    id: 1,
    title: "100% Natural",
    shortDesc: "Pure ingredients from nature",
    fullDesc: "We source our herbs from untouched regions, ensuring they are organically grown, free from harsh pesticides and artificial additives. Our 100% natural guarantee means you get exactly what Mother Nature intended, completely unadulterated.",
    icon: "🌿"
  },
  {
    id: 2,
    title: "Eco-Sustainable",
    shortDesc: "Friendly to our planet",
    fullDesc: "We partner strictly with ethical local farmers who practice sustainable and regenerative agriculture. This ensures long-term soil health, protects local wildlife, and maintains a minimal carbon footprint from farm to your home.",
    icon: "♻️"
  },
  {
    id: 3,
    title: "Rigorous Testing",
    shortDesc: "Quality & purity guaranteed",
    fullDesc: "Your safety is our priority. Every single batch is independently tested in 3rd-party labs for purity, supreme potency, and safety, guaranteeing that our products exceed the highest industry standards.",
    icon: "✓"
  },
  {
    id: 4,
    title: "Ancient Wisdom",
    shortDesc: "Time-tested remedies",
    fullDesc: "Our formulations aren't just guesses. They rely on traditional herbal practices passed down through centuries across cultures, combining historical wisdom with the latest in modern dietary needs.",
    icon: "📜"
  },
  {
    id: 5,
    title: "Cold Extraction",
    shortDesc: "Maximizing potency naturally",
    fullDesc: "We use state-of-the-art cold extraction and slow-infusion methods to carefully maintain the delicate volatile oils, adaptogens, and active compounds of the herbs without any heat degradation.",
    icon: "🔬"
  },
  {
    id: 6,
    title: "Clean Label",
    shortDesc: "No hidden fillers",
    fullDesc: "What you see on the label is exactly what you get. We stand firmly against proprietary blends, artificial flavors, coloring, or synthetic preservatives. Pure honesty in every drop.",
    icon: "🏷️"
  }
];

export default function AboutCircular() {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#FDFCF4] py-20 min-h-screen flex flex-col items-center justify-center font-sans">

      {/* Background Decoratives */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-bl from-[#FCF1A6] to-transparent opacity-60 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-green-200 to-transparent opacity-40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="text-center z-10 mb-12 px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A1A0B] mb-4 tracking-tight reveal-corner-tl">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F4A22] to-green-600">Herbal Shop</span> Difference
        </h1>
        <p className="text-gray-600 text-lg font-medium leading-relaxed reveal-corner-tr">
          Bringing nature's absolute best to your daily wellness routine, backed by tradition and guaranteed by science.
        </p>
      </div>

      {/* Layout Container */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1300px] mx-auto transition-all duration-700 px-4 z-20">

        {/* Circular Layout */}
        <div className={`mb-8 relative flex items-center justify-center shrink-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] reveal-stagger
          w-[300px] h-[300px] md:w-[500px] md:h-[500px] ${selectedPoint ? 'md:w-[450px] md:h-[450px]' : ''}`}
        >

          {/* Core Center Elements */}
          {/* Ring Background */}
          <div className="absolute inset-0 border-[3px] border-dashed border-green-200 rounded-full opacity-60 animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute inset-4 border-[1px] border-green-300/40 rounded-full opacity-70 animate-[spin_40s_linear_infinite_reverse]"></div>

          {/* Glow behind center image */}
          <div className="absolute w-[70%] h-[70%] bg-gradient-to-tr from-[#FCF1A6] to-green-100/80 rounded-full blur-2xl z-0 pointer-events-none"></div>

          {/* Center Image */}
          <div className="relative z-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-white/50 backdrop-blur-sm border-2 border-white/60 shadow-[0_0_40px_rgba(31,74,34,0.1)] flex items-center justify-center p-6 group cursor-pointer transition-transform duration-700 hover:scale-[1.03] reveal-bottom">
            <div className="absolute inset-0 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 backdrop-blur-[2px]"></div>
            <Image
              src="/images/Herbal.png"
              alt="Herbal Natural Power"
              fill
              sizes="(max-width: 768px) 160px, 300px"
              className="object-contain p-4 drop-shadow-2xl z-20 relative"
            />
          </div>

          {/* Orbiting Points */}
          {mounted && aboutPoints.map((point, index) => {
            const angle = (index / aboutPoints.length) * 360;
            const isSelected = selectedPoint?.id === point.id;
            const cornerClasses = ['reveal-corner-tl', 'reveal-corner-tr', 'reveal-corner-bl', 'reveal-corner-br'];
            const cornerClass = cornerClasses[index % 4];

            return (
              <div
                key={point.id}
                className={`absolute top-1/2 left-1/2 z-30 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isSelected ? 'z-50' : 'z-30 hover:z-40'} ${cornerClass}`}
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle - 90}deg) translate(clamp(135px, 32vw, 240px)) rotate(${-(angle - 90)}deg)`
                }}
              >
                <button
                  onClick={() => setSelectedPoint(point)}
                  className={`relative group flex flex-col items-center justify-center w-14 h-14 md:w-[84px] md:h-[84px] rounded-full border-[3px] transition-all duration-300
                    ${isSelected
                      ? 'bg-[#1F4A22] border-[#F2C83B] text-white scale-125 shadow-[0_0_25px_rgba(242,200,59,0.4)]'
                      : 'bg-white border-green-100 shadow-md text-[#0A1A0B] hover:border-[#1F4A22] hover:scale-110 hover:shadow-xl'}
                  `}
                  aria-label={point.title}
                >
                  <span className={`text-xl md:text-3xl transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-110'}`}>{point.icon}</span>

                  {/* Fixed position label for desktop */}
                  <div className={`absolute top-[calc(100%+0.5rem)] text-center w-[120px] pointer-events-none transition-all duration-300
                    ${isSelected ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}
                    hidden md:block`}
                  >
                    <p className="text-sm font-bold text-gray-800 drop-shadow-sm">{point.title}</p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mt-0.5">{point.shortDesc}</p>
                  </div>
                </button>
              </div>
            )
          })}
        </div>

        {/* Selected Detail Modal/Card Area */}
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden flex items-center reveal-right
            ${selectedPoint 
              ? 'w-full md:w-[500px] lg:w-[600px] opacity-100 translate-y-0 md:translate-x-0 scale-100 mt-10 md:mt-0 md:ml-20 lg:ml-28 max-h-[1000px]' 
              : 'w-full md:w-0 opacity-0 translate-y-12 md:translate-y-0 md:-translate-x-12 scale-95 mt-0 max-h-0 md:max-h-[1000px]'}`}
        >
          <div className="w-full min-w-0 md:min-w-[500px] lg:min-w-[600px]">
            {selectedPoint && (
              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-green-50 overflow-hidden">
                {/* Decorative background shape in card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-100 to-transparent opacity-50 rounded-bl-full pointer-events-none"></div>

                <div className="relative z-10 flex flex-col gap-6 md:gap-8 items-center text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F2C83B]/20 text-[#1F4A22] rounded-2xl flex items-center justify-center text-4xl md:text-5xl shrink-0 shadow-inner">
                    {selectedPoint.icon}
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-green-100 text-[#1F4A22] text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                      {selectedPoint.shortDesc}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{selectedPoint.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {selectedPoint.fullDesc}
                    </p>
                    <div className="mt-8 flex justify-center items-center">
                      <button
                        onClick={() => setSelectedPoint(null)}
                        className="text-sm font-semibold text-gray-500 hover:text-white hover:bg-[#1F4A22] hover:border-[#1F4A22] transition-all flex items-center gap-2 border border-gray-300 rounded-full px-6 py-2"
                      >
                        Close details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

    </section>
  )
}
