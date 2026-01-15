
import React from 'react';

const ConsumptionSection: React.FC = () => {
  return (
    <section className="bg-black py-32 text-center px-4 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light leading-snug mb-8">
          "Aqui, consumo não é acumulação.<br />
          É <span className="text-accent italic">participação.</span>"
        </h2>
        <p className="text-zinc-500 text-sm max-w-lg mx-auto leading-relaxed">
          O acesso ao metalore sustenta projetos regenerativos, pesquisas independentes e a manutenção deste espaço de pensamento crítico.
        </p>
      </div>
    </section>
  );
};

export default ConsumptionSection;
