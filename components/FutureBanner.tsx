
import React from 'react';

const FutureBanner: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-950 flex items-center justify-center text-center px-4 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-7xl font-black uppercase leading-none tracking-tighter">
          O FUTURO NÃO SE PREVÊ.<br />
          O FUTURO SE <span className="text-accent italic">NAVEGA.</span>
        </h2>
      </div>
    </section>
  );
};

export default FutureBanner;
