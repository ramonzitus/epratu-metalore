
import React from 'react';

const ManifestoSection: React.FC = () => {
  const targets = [
    "Para quem sente que as velhas respostas não servem mais.",
    "Para quem busca autonomia em meio ao algoritmo.",
    "Para quem constrói no longo prazo, não no hype.",
    "Para navegadores, criadores e pensadores da transição."
  ];

  return (
    <section className="bg-white py-32 flex flex-col items-center">
      <div className="max-w-xl w-full px-6">
        <ul className="space-y-6 mb-20">
          {targets.map((text, i) => (
            <li key={i} className="text-black text-center text-sm md:text-base font-light border-b border-zinc-100 pb-4">
              {text}
            </li>
          ))}
        </ul>

        <div className="border border-black p-10 text-center group hover:bg-black transition-colors duration-500">
          <p className="text-black font-bold uppercase tracking-widest text-xs mb-2 group-hover:text-white transition-colors">NÃO É UM ESPAÇO DE CONVENIÊNCIA.</p>
          <p className="text-accent font-bold uppercase tracking-widest text-xs">É UM ESPAÇO DE RESSONÂNCIA.</p>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
