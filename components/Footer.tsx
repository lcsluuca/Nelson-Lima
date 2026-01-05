
import React from 'react';
import { EXPERT_DATA } from '../constants';
import { Instagram, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-2xl font-serif mb-2">{EXPERT_DATA.name}</h2>
        <p className="text-slate-400 text-sm mb-8">Especialista em Reabilitação Oral e Facetas</p>
        
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
            <MapPin className="w-4 h-4 text-emerald-500" />
            <span>{EXPERT_DATA.address}</span>
          </div>
          <a 
            href={EXPERT_DATA.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-emerald-500 font-bold hover:underline"
          >
            <Instagram className="w-5 h-5" />
            <span>@dr.nelsonlimafacetas</span>
          </a>
        </div>
        
        <div className="w-full h-[1px] bg-white/10 mb-8"></div>
        
        <p className="text-slate-500 text-xs">
          © {new Date().getFullYear()} Nelson Lima. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
