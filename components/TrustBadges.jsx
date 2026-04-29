'use client';
import React from 'react';

const badges = [
  { icon: '🛡️', text: 'NO-FILTERS' },
  { icon: '🚫', text: 'NO SUGAR' },
  { icon: '✓', text: 'PURITY' },
  { icon: '🌿', text: 'ORGANIC' },
  { icon: '🌱', text: 'VEGAN' },
  { icon: '🏷️', text: 'CLEAN LABEL' },
];

export default function TrustBadges() {
  return (
    <section className="bg-green-100/30 py-8 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center gap-8">
          {badges.map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-gray-700">
              <span className="text-xl">{badge.icon}</span>
              <span className="text-xs font-bold uppercase tracking-widest">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Mobile Sliding View */}
        <div className="md:hidden relative flex overflow-hidden">
          <div className="animate-scroll">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center pr-12">
                {badges.map((badge) => (
                  <div key={`${badge.text}-${i}`} className="flex items-center gap-2 text-gray-700 shrink-0">
                    <span className="text-lg">{badge.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-widest">{badge.text}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
