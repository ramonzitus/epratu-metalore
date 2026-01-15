
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 flex flex-col items-center text-center px-4 overflow-hidden bg-black">
      {/* Decorative lines */}
      <div className="absolute top-10 left-12 w-32 border-t border-zinc-800 hidden md:block"></div>
      <div className="absolute top-10 right-12 w-32 border-t border-zinc-800 hidden md:block"></div>
      
      <div className="mb-12 relative">
        <div className="w-48 h-48 md:w-64 md:h-64 border border-zinc-800 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <img 
          src="https://picsum.photos/seed/compass/400/400" 
          alt="Rosa dos ventos metalore" 
          className="w-40 h-40 md:w-56 md:h-56 relative z-10 opacity-90 invert grayscale object-cover rounded-full"
        />
        <div className="mt-4 text-zinc-400 tracking-[0.3em] font-bold text-sm">WEZINE</div>
      </div>

      <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4">EPRATU</h1>
      <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs md:text-sm font-bold">UM METALORE PARA TEMPOS DE TRANSIÇÃO</p>

      <div className="mt-20 flex w-full justify-between px-6 md:px-12 text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
        <span>// FUTUROS POSSÍVEIS</span>
        <span>CONSUMO REGENERATIVO //</span>
      </div>
    </section>
  );
};

export default Hero;
