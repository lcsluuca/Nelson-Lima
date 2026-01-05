
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Results from './components/Results';
import Trust from './components/Trust';
import Process from './components/Process';
import MoreProof from './components/MoreProof';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <Hero />
      <About />
      <Results />
      
      {/* Intermediate CTA */}
      <div className="bg-slate-50 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-serif text-slate-900 mb-8">
            Dê o primeiro passo para o sorriso que você sempre sonhou.
          </h3>
          <WhatsAppButton label="Agendar agora pelo WhatsApp" />
        </div>
      </div>
      
      <Trust />
      <Process />
      <MoreProof />
      
      {/* Final CTA Section */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            Você merece sorrir sem medo.
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            Clique no botão abaixo para garantir sua primeira consulta de avaliação gratuita. Restam poucas vagas para esta semana.
          </p>
          
          {/* O ID está aqui para que o scroll pare exatamente neste elemento */}
          <div id="final-cta">
            <WhatsAppButton />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default App;
