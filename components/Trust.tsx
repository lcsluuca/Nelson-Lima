
import React from 'react';
import { TRUST_CARDS } from '../constants';

const Trust: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl font-serif mb-16">Por que confiar em mim?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRUST_CARDS.map((card, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl text-left hover:border-emerald-500/50 transition-colors"
            >
              <div className="bg-emerald-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
