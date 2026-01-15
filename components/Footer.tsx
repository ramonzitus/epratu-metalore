
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-zinc-900 flex flex-col items-center text-center px-4">
      <div className="w-12 h-12 border border-zinc-700 transform rotate-45 flex items-center justify-center mb-12 grayscale opacity-30">
        <div className="w-4 h-4 border border-white"></div>
      </div>
      
      <p className="text-zinc-500 text-sm italic mb-12 font-serif font-light max-w-xs">
        "Toda travessia começa sabendo onde você está."
      </p>

      <div className="text-[10px] text-zinc-700 uppercase tracking-widest font-bold">
        © 2024 EPRATU METALORE.<br />TODOS OS DIREITOS RESERVADOS.
      </div>
    </footer>
  );
};

export default Footer;
