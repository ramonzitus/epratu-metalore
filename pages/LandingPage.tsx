
import React from 'react';
import Hero from '../components/Hero';
import PhilosophySection from '../components/PhilosophySection';
import DiagramSection from '../components/DiagramSection';
import FutureBanner from '../components/FutureBanner';
import NavigatorSection from '../components/NavigatorSection';
import ConsumptionSection from '../components/ConsumptionSection';
import ManifestoSection from '../components/ManifestoSection';
import Footer from '../components/Footer';

interface LandingPageProps {
  onOpenNavigator: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onOpenNavigator }) => {
  return (
    <>
      <Hero />
      <PhilosophySection />
      
      <div className="bg-white py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-black text-3xl md:text-5xl font-bold leading-tight mb-8">
            O mundo mudou rápido demais.<br />
            As decisões se acumulam.<br />
            O ruído aumenta.
          </h2>
          <p className="text-3xl md:text-5xl font-bold">
            <span className="text-accent">Falta orientação.</span><br />
            <span className="text-black">Não informação.</span>
          </p>
        </div>
      </div>

      <section className="bg-black py-24 border-y border-zinc-800">
         <div className="container mx-auto px-4 max-w-2xl text-center">
            <div className="text-zinc-500 uppercase tracking-widest text-sm mb-12">
              NÃO É UM PRODUTO. <br />
              NÃO É UM CURSO. <br />
              NÃO É UMA STARTUP.
            </div>
            
            <div className="w-8 h-8 mx-auto border-t border-r border-accent rotate-45 mb-12"></div>
            
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light">
              <strong className="text-white font-bold">EPRATU é um metalore.</strong><br />
              Um campo vivo onde reflexão, prática e projetos se organizam para navegar transições.
            </p>
         </div>
      </section>

      <DiagramSection />
      <FutureBanner />
      <NavigatorSection onOpenChat={onOpenNavigator} />
      <ConsumptionSection />
      <ManifestoSection />
      <Footer />
    </>
  );
};

export default LandingPage;
