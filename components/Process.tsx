
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif text-slate-900 mb-16">Como funciona a primeira consulta</h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between items-start">
          {PROCESS_STEPS.map((item, i) => (
            <div key={i} className="flex-1 px-4 relative">
              <div className="text-6xl font-serif text-emerald-50/100 absolute -top-10 left-1/2 -translate-x-1/2 -z-0 select-none opacity-50">
                {item.step}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
              
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-2 text-slate-200">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
          <p className="text-emerald-800 font-semibold text-lg italic">
            "A primeira avaliação é totalmente gratuita e sem nenhum compromisso. Meu objetivo é te orientar honestamente."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
