
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiNavigatorResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

interface ChatNavigatorProps {
  onClose: () => void;
}

const ChatNavigator: React.FC<ChatNavigatorProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Você acessou o Navegador de Futuros. Onde você se encontra na sua jornada atual?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    const botResponse = await getGeminiNavigatorResponse(userText);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col">
      <header className="flex justify-between items-center p-6 border-b border-zinc-800">
        <div>
          <h2 className="text-white font-black uppercase tracking-widest text-sm">Navegador de Futuros</h2>
          <span className="text-zinc-500 text-[10px] tracking-widest">ORIENTAÇÃO POR INTELIGÊNCIA ARTIFICIAL</span>
        </div>
        <button 
          onClick={onClose}
          className="text-zinc-500 hover:text-white transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </header>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-8 max-w-2xl mx-auto w-full"
      >
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div className={`
              max-w-[90%] p-6 rounded-sm text-sm md:text-base leading-relaxed
              ${msg.role === 'user' 
                ? 'bg-zinc-900 text-zinc-300 border border-zinc-800' 
                : 'bg-transparent text-white border-l-2 border-accent pl-8'}
            `}>
              {msg.text}
            </div>
            <span className="text-[10px] text-zinc-600 mt-2 uppercase tracking-widest font-bold">
              {msg.role === 'user' ? 'Explorador' : 'EPRATU Navigator'}
            </span>
          </div>
        ))}
        {loading && (
          <div className="flex items-center space-x-2 text-zinc-500 italic text-sm">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span>Calculando coordenadas...</span>
          </div>
        )}
      </div>

      <footer className="p-6 border-t border-zinc-800">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex gap-4">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Descreva o seu momento ou dilema..."
            className="flex-1 bg-zinc-900 border border-zinc-800 text-white p-4 text-sm focus:outline-none focus:border-accent transition-colors"
          />
          <button 
            type="submit"
            disabled={loading}
            className="bg-accent text-white px-8 py-4 uppercase text-xs font-black tracking-widest hover:bg-white hover:text-black transition-all"
          >
            LANÇAR
          </button>
        </form>
      </footer>
    </div>
  );
};

export default ChatNavigator;
