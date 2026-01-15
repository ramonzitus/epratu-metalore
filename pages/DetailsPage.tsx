
import React from 'react';
import Footer from '../components/Footer';

const DetailsPage: React.FC = () => {
  const menuItems = [
    "01. DEFINIÇÃO OPERACIONAL",
    "02. MODELO E PESQUISA",
    "03. PROTOCOLO V1.0",
    "04. QUESTIONÁRIO COMPLETO",
    "05. TEMPLATE DE SAÍDA",
    "06. EXEMPLOS DE CASOS",
    "07. CRITÉRIOS DE QUALIDADE",
    "08. ÉTICA (MANIFESTO)",
    "09. CHANGELOG",
    "10. OUTRAS FUNÇÕES"
  ];

  return (
    <div className="pt-20 bg-[#f2f2eb] min-h-screen text-black">
      {/* Header Info */}
      <section className="px-6 md:px-12 pt-12">
        <div className="border border-zinc-300 inline-block px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-12">
          ARQUIVO TÉCNICO V1.2
        </div>
        
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter mb-12">
            EPRATU<br />NAVEGADOR<br />DE FUTUROS
          </h1>

          <div className="border-2 border-accent p-8 md:p-12 mb-20 bg-white shadow-xl relative">
            <h3 className="text-accent text-xs font-bold uppercase tracking-widest mb-4">AVISO AO MÉTODO</h3>
            <p className="text-zinc-600 italic font-serif text-2xl md:text-3xl leading-snug">
              "Não é um esforço de entretenimento. Não é uma promessa de salvação. É um instrumento de localização em territórios de alta entropia."
            </p>
            {/* Design notch */}
            <div className="absolute top-0 right-0 w-4 h-4 bg-[#f2f2eb] -mt-[1px] -mr-[1px]"></div>
          </div>
        </div>
      </section>

      {/* Numerical Index */}
      <section className="px-6 md:px-12 py-20 border-t border-zinc-200 bg-white/50">
        <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mb-8 block">SUMÁRIO EXECUTIVO</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          {menuItems.map((item, i) => (
            <div key={i} className="flex justify-between items-center py-4 border-b border-zinc-100 group cursor-pointer hover:bg-zinc-50 transition-colors px-2">
              <span className="text-xs font-bold tracking-widest uppercase">{item}</span>
              <span className="text-zinc-300 group-hover:text-accent transition-colors">+</span>
            </div>
          ))}
        </div>
      </section>

      {/* 01 Definition */}
      <section className="px-6 md:px-12 py-32 max-w-4xl">
        <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">01 // DEFINIÇÃO OPERACIONAL</span>
        <p className="text-3xl md:text-4xl font-light leading-snug mb-16">
          O Navegador de Futuros não prevê o tempo, ele lê o espaço. É um sistema cibernético de redução de ruído composto por três estágios lógicos:
        </p>

        <div className="space-y-12 pl-4 border-l-2 border-zinc-200">
          <div>
            <h4 className="font-black uppercase text-xl mb-1">ENTRADA (INPUT)</h4>
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mb-2 block">DADOS BRUTOS & CONTEXTO</span>
            <p className="text-zinc-600 text-sm">Escuta honesta do estado atual do sujeito, sem filtros de desejo ou medo.</p>
          </div>
          <div>
            <h4 className="font-black uppercase text-xl mb-1">PROCESSAMENTO</h4>
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mb-2 block">TRIANGULAÇÃO DE EIXOS</span>
            <p className="text-zinc-600 text-sm">Classificação das tensões nos quadrantes Eco, Ego, Eros e Ethos.</p>
          </div>
          <div>
            <h4 className="font-black uppercase text-xl mb-1">SAÍDA (OUTPUT)</h4>
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mb-2 block">AÇÃO MÍNIMA VIÁVEL (AMV)</span>
            <p className="text-zinc-600 text-sm">Um relatório de curso, com o próximo passo concreto e inadiável.</p>
          </div>
        </div>
      </section>

      {/* 02 Topological Model (Black Box) */}
      <section className="bg-black text-white py-32 px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-20 text-center">02 // MODELO TOPOLÓGICO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
          {[
            { id: 'ECO', title: 'O Recurso', desc: 'Finanças, Biologia, tempo, capacidades, o contexto social.' },
            { id: 'EGO', title: 'O Ator', desc: 'Habilidades, competências, história interna, reputação.' },
            { id: 'EROS', title: 'O Desejo', desc: 'Pulsão, desejo, comunidade, o que conecta com o mundo.' },
            { id: 'ETHOS', title: 'A Lei', desc: 'Valores, limites, ética, aquilo que é "sagrado" inegociável.' }
          ].map((box, i) => (
            <div key={i} className="border border-zinc-800 p-8 hover:border-accent transition-colors group relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-black">{box.id}</h3>
                <div className="w-2 h-2 bg-accent rounded-full opacity-30 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-2 block italic">{box.title}</span>
              <p className="text-zinc-400 text-sm leading-relaxed">{box.desc}</p>
              {/* Grid element */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-zinc-900"></div>
            </div>
          ))}
        </div>
      </section>

      {/* 03 Protocol */}
      <section className="py-32 px-6 md:px-12 bg-zinc-100/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-20">03 // PROTOCOLO V1.0</h2>
          <div className="space-y-16">
            <div className="flex gap-12 items-start">
               <span className="text-6xl font-black text-zinc-300">A</span>
               <div>
                  <h4 className="uppercase font-bold tracking-widest text-xs mb-2">PREPARAÇÃO (SETUP)</h4>
                  <p className="text-zinc-600 text-lg font-serif italic">Isolamento físico. Modo avião. Papel e caneta (analógico preferencial). Duração: 30 min.</p>
               </div>
            </div>
            <div className="flex gap-12 items-start">
               <span className="text-6xl font-black text-zinc-300">B</span>
               <div>
                  <h4 className="uppercase font-bold tracking-widest text-xs mb-2">RESPOSTAS (INPUT)</h4>
                  <p className="text-zinc-600 text-lg font-serif italic">Responder às 12 perguntas do questionário abaixo com a primeira intuição, sem edição moral.</p>
               </div>
            </div>
            <div className="flex gap-12 items-start">
               <span className="text-6xl font-black text-zinc-300">C</span>
               <div>
                  <h4 className="uppercase font-bold tracking-widest text-xs mb-2">LEITURA (ANALYSIS)</h4>
                  <p className="text-zinc-600 text-lg font-serif italic">Identificar qual eixo apresenta maior tensão (dor) e qual apresenta maior recurso (força). O movimento nasce dessa diferença de potencial.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Full Questionnaire */}
      <section className="py-32 px-6 md:px-12 bg-[#f2f2eb]">
        <div className="max-w-4xl mx-auto">
          <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">04 // QUESTIONÁRIO COMPLETO</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-24">OS 12 PONTOS DE SONDAGEM</h2>
          
          <div className="space-y-24">
            {[
              {id: 'ECO', qs: ['Qual recurso material está perigosamente escasso hoje?', 'Onde o ambiente físico está bloqueando seu movimento?', 'Qual imprevisto mais consome seu caixa?']},
              {id: 'EGO', qs: ['Qual habilidade sua o mundo não está vendo?', 'Onde você está fingindo saber o que não sabe?', 'Qual reputação atual ajuda ou atrapalha seu próximo passo?']},
              {id: 'EROS', qs: ['Quem é a última pessoa que você está negligenciando?', 'Qual relação se tornou um peso morto?', 'O que você deseja mas tem vergonha de pedir?']},
              {id: 'ETHOS', qs: ['Qual valor você violou recentemente por conveniência?', 'Por que você está disposto a perder dinheiro hoje?', 'Qual é a verdade que você evita dizer a si mesmo?']}
            ].map((section, i) => (
              <div key={i}>
                <h3 className="bg-black text-white inline-block px-4 py-2 font-black text-2xl mb-8">{section.id}</h3>
                <ul className="space-y-8 pl-4">
                  {section.qs.map((q, j) => (
                    <li key={j} className="text-zinc-600 text-lg md:text-xl font-light border-b border-zinc-200 pb-4">
                      {j+1}. {q}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Output Template */}
      <section className="py-32 px-6 bg-white flex flex-col items-center">
        <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] block mb-12">05 // TEMPLATE DE SAÍDA</span>
        <div className="max-w-xl w-full border border-zinc-200 p-12 bg-white shadow-2xl relative">
          <div className="flex justify-between border-b border-zinc-100 pb-4 mb-8">
            <h2 className="text-black text-2xl font-black uppercase">CARTÃO DE NAVEGAÇÃO</h2>
            <span className="text-zinc-300 text-[10px] font-bold">#NAV-001</span>
          </div>
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <span className="text-[10px] text-zinc-400 uppercase font-bold block mb-2">DOMÍNIO ATUAL</span>
              <div className="h-px w-full bg-zinc-100"></div>
            </div>
            <div>
              <span className="text-[10px] text-accent uppercase font-bold block mb-2">MAIOR TENSÃO</span>
              <div className="h-px w-full bg-accent/20"></div>
            </div>
          </div>
          <div className="mb-12">
            <span className="text-[10px] text-zinc-400 uppercase font-bold block mb-2">SÍNTESE DO MOMENTO</span>
            <div className="h-32 w-full border border-zinc-50 bg-zinc-50/30"></div>
          </div>
          <div className="border border-black p-4 bg-zinc-50">
            <span className="text-accent text-[10px] font-bold uppercase tracking-widest block mb-2">PRÓXIMA AÇÃO (AMV)</span>
            <div className="text-zinc-300 text-2xl font-black uppercase">ação única</div>
          </div>
          <div className="absolute -bottom-10 left-0 right-0 text-center">
             <span className="text-[8px] text-zinc-300 uppercase tracking-widest font-bold">ESTE É O RESULTADO FINAL DE 1 SESSÃO DE NAVEGAÇÃO.</span>
          </div>
        </div>
      </section>

      {/* 06 Case Studies */}
      <section className="py-32 px-6 md:px-12 bg-zinc-100/50">
        <div className="max-w-4xl mx-auto">
          <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">06 // ESTUDOS DE CASO</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            <div className="border-2 border-zinc-300 p-8 bg-white">
              <span className="bg-black text-white text-[8px] px-2 py-1 font-bold uppercase mb-4 inline-block">CASO A: CRIATIVO BLOQUEADO</span>
              <p className="text-zinc-500 text-xs leading-relaxed mt-4">
                <strong>Cenário:</strong> Designer freelancer, sem dinheiro (Eco), muito talento (Ego). <br/>
                <strong>Diagnóstico:</strong> Eros (desejo) está morto por falta de caixa (Eco). <br/>
                <strong>AMV:</strong> Parar de desenhar por 48h. Ligar para 3 ex-clientes oferecendo serviço agora.
              </p>
            </div>
            <div className="border-2 border-accent p-8 bg-white">
               <span className="bg-accent text-white text-[8px] px-2 py-1 font-bold uppercase mb-4 inline-block">CASO B: EXECUTIVA ANSIOSA</span>
               <p className="text-zinc-500 text-xs leading-relaxed mt-4">
                <strong>Cenário:</strong> Efeito Financeiro alto (Eco), cansaço total e sem propósito (Ego/Eros). <br/>
                <strong>Diagnóstico:</strong> Sem Ethos (ética) para tomar decisão de saída (Ego). <br/>
                <strong>AMV:</strong> Agendar jantar honesto com cônjuge sem celulares. Ouvir sem interromper.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 Criteria */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-16">07 // CRITÉRIOS DE QUALIDADE</h2>
          <p className="text-zinc-500 text-lg mb-12">Para considerar uma sessão de navegação válida, o output deve obedecer aos critérios:</p>
          <ul className="space-y-8">
            <li className="flex gap-4 items-start">
              <div className="w-4 h-4 rounded-full bg-accent mt-1 shrink-0"></div>
              <p className="text-black font-bold uppercase text-sm tracking-tight">
                ACIONABILIDADE: <span className="text-zinc-500 font-normal">A ação proposta é fisicamente possível de ser realizada nas próximas 24 horas?</span>
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-4 h-4 rounded-full bg-accent mt-1 shrink-0"></div>
              <p className="text-black font-bold uppercase text-sm tracking-tight">
                CLAREZA: <span className="text-zinc-500 font-normal">Uma criança de 10 anos entenderia a instrução?</span>
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-4 h-4 rounded-full bg-accent mt-1 shrink-0"></div>
              <p className="text-black font-bold uppercase text-sm tracking-tight">
                ECOLOGIA: <span className="text-zinc-500 font-normal">A ação respeita os limites físicos e financeiros atuais do sujeito?</span>
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* 08 Manifesto (Black Box) */}
      <section className="bg-black text-white py-32 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 text-center">08 // MANIFESTO</h2>
          <ul className="space-y-12">
            <li className="flex gap-8 items-start">
              <span className="text-accent text-2xl font-black">01.</span>
              <p className="text-xl md:text-2xl font-bold leading-tight">Isto <span className="border-b-2 border-accent">não é terapia</span>. Não tratamos patologias. Tratamos estratégias de navegação.</p>
            </li>
            <li className="flex gap-8 items-start">
              <span className="text-accent text-2xl font-black">02.</span>
              <p className="text-xl md:text-2xl font-bold leading-tight">Não usamos <span className="border-b-2 border-accent">psicologia de palco</span>. Sem frases motivacionais. Apenas leitura fria de estruturas.</p>
            </li>
            <li className="flex gap-8 items-start">
              <span className="text-accent text-2xl font-black">03.</span>
              <p className="text-xl md:text-2xl font-bold leading-tight">Não fazemos <span className="border-b-2 border-accent">previsão</span>. O futuro é consequência, não destino místico.</p>
            </li>
            <li className="flex gap-8 items-start">
              <span className="text-accent text-2xl font-black">04.</span>
              <p className="text-xl md:text-2xl font-bold leading-tight">A responsabilidade radical é <span className="border-b-2 border-accent">sua</span>. O navegador aponta o norte, você caminha.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* 09 Changelog */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black uppercase mb-12">09 // CHANGELOGS</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black text-white text-[10px] uppercase font-black tracking-widest">
                <th className="p-4 border border-zinc-800">VERSÃO</th>
                <th className="p-4 border border-zinc-800">DATA</th>
                <th className="p-4 border border-zinc-800">UPDATE</th>
              </tr>
            </thead>
            <tbody className="text-xs uppercase font-bold text-zinc-600">
              <tr>
                <td className="p-4 border border-zinc-200">V1.2</td>
                <td className="p-4 border border-zinc-200">JAN/24</td>
                <td className="p-4 border border-zinc-200">Expansão do Desejo Completo.</td>
              </tr>
              <tr>
                <td className="p-4 border border-zinc-200">V1.1</td>
                <td className="p-4 border border-zinc-200">OUT/23</td>
                <td className="p-4 border border-zinc-200">Inclusão do output "Manifesto Pessoal".</td>
              </tr>
              <tr>
                <td className="p-4 border border-zinc-200">V1.0</td>
                <td className="p-4 border border-zinc-200">AGO/23</td>
                <td className="p-4 border border-zinc-200">Lançamento do core system.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 10 Final philosophy */}
      <section className="py-32 px-6 md:px-12 bg-white flex flex-col items-start border-t border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">10 // CAMADA KABBALAH</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">SOCIOCIBERNÉTICA 13:20</h2>
          <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed mb-12">
            Para usuários experientes, o sistema EPRATU conecta-se com protocolos de tempo natural (13:20). Nesta camada, a navegação deixa de ser apenas espacial (onde estou?) e torna-se crono-topológica (quando estou?).
          </p>
          <button className="border-2 border-black px-12 py-4 uppercase text-xs font-black tracking-widest hover:bg-black hover:text-white transition-all">
             LER SOBRE RITMO E TEMPO NATURAL
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DetailsPage;
