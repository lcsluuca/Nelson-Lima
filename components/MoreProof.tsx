
import React from 'react';
import { IMAGES } from '../constants';

const MoreProof: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 group">
            <div className="overflow-hidden rounded-3xl shadow-lg aspect-[4/5]">
              <img 
                src={IMAGES.authority2} 
                alt="Dr. Nelson Lima em Natal" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-slate-500 uppercase tracking-widest text-center">Atendimento Personalizado</p>
          </div>
          <div className="flex-1 mt-12 md:mt-24 group">
            <div className="overflow-hidden rounded-3xl shadow-lg aspect-[4/5]">
              <img 
                src={IMAGES.authority1} 
                alt="Consultório Nelson Lima" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-slate-500 uppercase tracking-widest text-center">Ambiente Acolhedor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreProof;
