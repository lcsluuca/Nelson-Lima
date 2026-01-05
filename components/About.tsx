
import React from 'react';
import { EXPERT_DATA, IMAGES } from '../constants';
import { Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <div className="relative group">
            <img 
              src={IMAGES.authority1} 
              alt="Nelson Lima em atendimento" 
              className="w-full h-[500px] object-cover rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-1 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />)}
              </div>
              <p className="text-sm font-bold text-slate-800">Referência em Natal</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl font-serif text-slate-900 mb-6 leading-tight">
            A odontologia para mim é sobre pessoas, não apenas dentes.
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Eu acredito que um sorriso transformado tem o poder de mudar vidas. No meu consultório em Natal, cada paciente é tratado como único. Esqueça aquele clima frio de clínica; aqui, meu foco é seu conforto e seu resultado.
          </p>
          
          <ul className="space-y-4 mb-8">
            {EXPERT_DATA.specialties.map((spec, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-slate-700 font-medium">{spec}</span>
              </li>
            ))}
          </ul>
          
          <div className="p-6 bg-white border border-slate-200 rounded-2xl">
            <p className="italic text-slate-600 text-sm">
              "Minha missão é devolver a segurança de sorrir através de técnicas modernas de reabilitação oral e estética."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
