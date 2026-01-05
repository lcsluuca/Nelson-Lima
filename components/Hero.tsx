
import React from 'react';
import { EXPERT_DATA, IMAGES } from '../constants';
import WhatsAppButton from './WhatsAppButton';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#final-cta');
    if (target) {
      // Usando scrollIntoView com behavior smooth para uma descida fluida que permite ver o conteúdo
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center' // Centraliza o botão final na tela ao terminar
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center pt-8 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-50"></div>
      
      <div className="relative z-10 w-full px-6 flex flex-col items-center text-center">
        {/* Name/Title Badge */}
        <div className="mb-6 inline-flex items-center px-4 py-1 rounded-full bg-slate-900 text-white text-sm font-medium tracking-wide fade-in">
          DR. NELSON LIMA • NATAL / RN
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-4 leading-tight fade-in" style={{ animationDelay: '0.1s' }}>
          Eu sou Nelson Lima,<br />
          <span className="text-emerald-600">seu novo dentista.</span>
        </h1>
        
        <p className="text-lg text-slate-600 max-w-md mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
          Recupere sua autoestima com um sorriso planejado exclusivamente para você, unindo técnica avançada e atendimento humanizado.
        </p>
        
        <WhatsAppButton 
          className="mb-12 fade-in" 
          style={{ animationDelay: '0.3s' }} 
          href="#final-cta"
          onClick={handleScroll}
          label="Agendar primeira consulta gratuita"
        />
        
        {/* Main Image */}
        <div className="w-full max-w-xl mx-auto mt-4 px-2 fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            {/* Image Frame with gold accent */}
            <div className="absolute inset-0 border-2 border-slate-100 translate-x-3 translate-y-3 rounded-2xl -z-10"></div>
            <img 
              src={IMAGES.hero} 
              alt={`Dr. ${EXPERT_DATA.name}`}
              className="w-full h-auto rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
