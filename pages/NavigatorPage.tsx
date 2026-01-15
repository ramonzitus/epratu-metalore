
import React from 'react';
import Footer from '../components/Footer';

interface NavigatorPageProps {
  onOpenChat: () => void;
  onViewDetails: () => void;
}

const NavigatorPage: React.FC<NavigatorPageProps> = ({ onOpenChat, onViewDetails }) => {
  return (
    <div className="pt-20">
      {/* Section 1: Hero */}
      <section className="bg-[#f2f2eb] py-24 px-6 md:px-12 flex flex-col items-start border-b border-zinc-200">
        <div className="max-w-3xl">
          <div className="flex mb-12">
            <span className="bg-accent text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest mr-2">ENCARTE</span>
            <span className="bg-accent text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">SUPLEMENTO 01</span>
          </div>
          
          <h1 className="text-black text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
            NAVEGADOR<br />DE FUTUROS
          </h1>
          
          <div className="border-l-2 border-accent pl-8 mb-12">
            <p className="text-black text-3xl md:text-4xl italic font-serif leading-tight">
              Uma leitura estruturada do seu momento.
            </p>
          </div>

          <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest font-bold max-w-md leading-relaxed mb-16">
            ORIENTAR É LER O PRESENTE ANTES DE AGIR SOBRE O FUTURO. // O RUÍDO CESSA QUANDO A BÚSSOLA APONTA.
          </p>

          <button 
            onClick={onOpenChat}
            className="bg-black text-white px-12 py-6 text-xl font-black uppercase tracking-widest hover:bg-zinc-800 transition-all border-b-4 border-accent shadow-xl"
          >
            INICIAR LEITURA
          </button>
          
          <div className="mt-8">
             <button 
                onClick={onViewDetails}
                className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold border-b border-zinc-300 hover:text-black hover:border-black transition-all"
             >
                VER COMO FUNCIONA
             </button>
          </div>
        </div>
      </section>

      {/* Section 2: Methodology */}
      <section className="bg-zinc-950 py-24 px-6 md:px-12 border-b border-zinc-900">
        <div className="max-w-2xl mx-auto space-y-24">
          <div className="group">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] block mb-2">01 // DIAGNÓSTICO</span>
            <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">MAPEIE O CAOS</h2>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
              O excesso de informação paralisa. O navegador isola os sinais vitais do ruído de fundo, permitindo que você veja o terreno real, não a projeção de ansiedade.
            </p>
            <div className="w-full h-px bg-zinc-900 mt-12"></div>
          </div>

          <div className="group">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] block mb-2">02 // TENSÃO</span>
            <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">IDENTIFIQUE CONFLITOS</h2>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
              Onde seu desejo (Eros) colide com seus limites (Eco)? Onde sua ética (Ethos) barra sua identidade (Ego)? Nomear a tensão é o primeiro passo para resolvê-la.
            </p>
            <div className="w-full h-px bg-zinc-900 mt-12"></div>
          </div>

          <div className="group">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] block mb-2">03 // PRÓXIMO PASSO</span>
            <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">AÇÃO MÍNIMA VIÁVEL</h2>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
              Não um plano de 5 anos que falha amanhã. Mas a próxima ação concreta, alinhada e consciente que destrava o movimento.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Protocol */}
      <section className="bg-[#f7f7f2] py-24 px-6 md:px-12 flex flex-col items-center">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-16">
            <span className="text-zinc-400 uppercase tracking-[0.5em] text-[10px] font-bold">PROTOCOLO DE NAVEGAÇÃO</span>
            <div className="w-full h-px bg-zinc-200 mt-4"></div>
          </div>

          <div className="space-y-16">
            <div className="flex gap-8 items-start">
              <span className="text-6xl md:text-8xl font-black text-zinc-200 leading-none">1</span>
              <div>
                <h3 className="text-black text-2xl font-black uppercase tracking-tight mb-2">INTERROGATÓRIO</h3>
                <p className="text-zinc-500 font-serif italic text-lg leading-relaxed">
                  8 a 12 perguntas profundas desenhadas para contornar seus vieses cognitivos habituais.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <span className="text-6xl md:text-8xl font-black text-zinc-200 leading-none">2</span>
              <div>
                <h3 className="text-black text-2xl font-black uppercase tracking-tight mb-2">TRIANGULAÇÃO</h3>
                <p className="text-zinc-500 font-serif italic text-lg leading-relaxed">
                  Suas respostas são organizadas nos eixos cardeais: Eco, Ego, Eros e Ethos.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <span className="text-6xl md:text-8xl font-black text-zinc-200 leading-none">3</span>
              <div>
                <h3 className="text-black text-2xl font-black uppercase tracking-tight mb-2">SÍNTESE</h3>
                <p className="text-zinc-500 font-serif italic text-lg leading-relaxed">
                  Um relatório final de "posicionamento presente" gerado para leitura e download.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Example Output */}
      <section className="bg-white py-32 flex flex-col items-center px-6">
         <div className="max-w-md w-full text-center mb-16">
            <div className="inline-block border border-zinc-200 p-2 mb-4 uppercase text-[10px] tracking-widest text-zinc-400 font-bold">
               NORTE // ÉTICA
            </div>
            <div className="relative">
               <img 
                 src="https://picsum.photos/seed/compassnav/600/600" 
                 alt="Rosa dos ventos bússola" 
                 className="w-64 h-64 mx-auto object-cover grayscale opacity-80 border-4 border-black p-2 rounded-full" 
               />
               <div className="absolute inset-0 border-[1px] border-zinc-100 rounded-full scale-110 pointer-events-none"></div>
            </div>
            <div className="inline-block border border-zinc-200 p-2 mt-4 uppercase text-[10px] tracking-widest text-zinc-400 font-bold">
               SUL // IDENTIDADE
            </div>
         </div>

         <div className="max-w-md w-full bg-[#f2f2eb] border border-zinc-200 p-8 shadow-2xl relative">
            <h4 className="text-black text-2xl font-black uppercase mb-6 border-b border-zinc-300 pb-2">EXEMPLO DE SAÍDA:</h4>
            <ul className="space-y-4 text-xs font-bold tracking-tight">
               <li className="flex gap-2">
                 <span className="text-accent uppercase whitespace-nowrap">ECO:</span>
                 <span className="text-zinc-600 uppercase">Ambiente saturado. Recursos financeiros estáveis, mas tempo escasso.</span>
               </li>
               <li className="flex gap-2">
                 <span className="text-accent uppercase whitespace-nowrap">EROS:</span>
                 <span className="text-zinc-600 uppercase">Desejo de criação autoral bloqueado por demandas operacionais.</span>
               </li>
               <li className="flex gap-2">
                 <span className="text-accent uppercase whitespace-nowrap">ETHOS:</span>
                 <span className="text-zinc-600 uppercase">Compromisso com a qualidade inegociável.</span>
               </li>
            </ul>
            {/* Design detail */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-white -mr-4 -mt-4 border border-zinc-200 transform rotate-45"></div>
         </div>
      </section>

      {/* Section 5: Disclaimer */}
      <section className="bg-black py-32 px-6 text-center">
         <div className="max-w-2xl mx-auto border-l-4 border-accent pl-8 text-left">
            <h2 className="text-3xl md:text-5xl font-black text-white italic font-serif leading-tight mb-8">
               Não é terapia.<br />
               Não é coaching.<br />
               Não é promessa.
            </h2>
            <p className="text-accent text-xl md:text-2xl font-black uppercase tracking-tighter">
               É UM INSTRUMENTO DE POSICIONAMENTO CONSCIENTE.
            </p>
         </div>
      </section>

      {/* Section 6: Access Card */}
      <section className="bg-[#f2f2eb] py-32 px-6 flex justify-center">
         <div className="max-w-md w-full bg-white border-2 border-dashed border-zinc-300 p-8 md:p-12 text-center shadow-xl">
            <span className="text-[10px] text-zinc-400 uppercase tracking-[0.4em] font-bold block mb-4">DOCUMENTO DE ACESSO</span>
            <h2 className="text-black text-5xl font-black uppercase tracking-tighter leading-none mb-2">NAVEGADOR</h2>
            <p className="text-accent italic font-serif text-2xl mb-12">Edição Individual</p>
            
            <div className="mb-12">
               <span className="text-zinc-300 text-xs font-bold line-through mr-2">R$ 149,90</span>
               <span className="text-zinc-500 text-sm font-black uppercase tracking-widest">R$ 49,90</span>
            </div>

            <button className="bg-accent text-white w-full py-5 text-sm font-black uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-2">
               ACESSAR AGORA <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
            
            <p className="mt-8 text-[10px] text-zinc-400 uppercase tracking-widest font-bold flex items-center justify-center gap-2">
               <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
               AMBIENTE SEGURO // STRIPE
            </p>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default NavigatorPage;
