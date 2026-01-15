
import React from 'react';

interface NavigatorSectionProps {
  onOpenChat: () => void;
}

const NavigatorSection: React.FC<NavigatorSectionProps> = ({ onOpenChat }) => {
  return (
    <section className="bg-zinc-100 py-32 flex justify-center">
      <div className="max-w-2xl w-full px-6">
        <div className="bg-white border border-zinc-300 p-8 md:p-12 flex flex-col md:flex-row gap-8 relative overflow-hidden group hover:shadow-xl transition-shadow duration-500">
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-zinc-300 uppercase tracking-widest text-xs font-bold">NAVEGADOR DE FUTUROS</h3>
              <span className="text-zinc-400 text-[10px] font-bold">SUPLEMENTO Nº 01</span>
            </div>
            
            <p className="text-zinc-500 text-sm leading-relaxed mb-12 max-w-xs font-light">
              Este não é um mapa estático, mas uma bússola dinâmica. Uma leitura estruturada do seu momento atual para recalibrar a rota em meio à incerteza.
            </p>

            <button 
              onClick={onOpenChat}
              className="bg-accent text-white px-8 py-4 uppercase text-xs tracking-[0.2em] font-bold self-start hover:bg-black transition-colors"
            >
              ACESSAR O NAVEGADOR
            </button>
          </div>

          <div className="flex-none hidden md:flex items-center justify-center pr-8">
            <div className="rotate-90 origin-center">
              <span className="text-7xl font-black text-zinc-100 tracking-tighter select-none">EPRATU</span>
            </div>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 h-32 w-[1px] bg-zinc-200"></div>
        </div>
      </div>
    </section>
  );
};

export default NavigatorSection;
