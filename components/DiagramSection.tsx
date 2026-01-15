
import React from 'react';

const DiagramSection: React.FC = () => {
  return (
    <section className="bg-white py-24 flex flex-col items-center">
      <div className="max-w-xl w-full px-4">
        <div className="border border-zinc-200 p-8 md:p-12 relative shadow-2xl bg-white">
          <img 
            src="https://picsum.photos/seed/epratudiagram/800/800" 
            alt="Eixos de Posicionamento Consciente" 
            className="w-full h-auto grayscale border border-zinc-100"
          />
          <div className="mt-8 text-center text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold">
            FIG. 01 — EIXOS DE POSICIONAMENTO CONSCIENTE
          </div>
          {/* Technical corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default DiagramSection;
