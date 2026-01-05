
import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { Maximize2, X } from 'lucide-react';

const Results: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif text-slate-900 mb-4">Resultados que inspiram</h2>
        <p className="text-slate-500 mb-12">Cada detalhe planejado para a harmonia perfeita do seu rosto.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {IMAGES.results.map((img, i) => (
            <div 
              key={i} 
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
              onClick={() => setSelectedImg(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-8 text-xs text-slate-400 italic">
          * Resultados podem variar de pessoa para pessoa. Fotos autorizadas por pacientes.
        </p>
      </div>

      {/* Simple Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImg} 
            alt="Resultado em tela cheia" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Results;
