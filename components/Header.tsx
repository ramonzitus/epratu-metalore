
import React from 'react';

interface HeaderProps {
  currentPage: 'home' | 'navigator';
  onNavigate: (page: 'home' | 'navigator') => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[80] bg-black py-4 px-6 md:px-12 flex justify-between items-center border-b border-zinc-900">
      <div 
        className="cursor-pointer flex flex-col items-start"
        onClick={() => onNavigate('home')}
      >
        <span className="text-[10px] tracking-widest text-zinc-500 font-bold mb-0.5">WEZINE //</span>
        <span className="text-xl md:text-2xl font-black tracking-tighter text-white leading-none">EPRATU</span>
      </div>
      
      <div className="flex gap-8 items-center">
        <button 
          onClick={() => onNavigate('home')}
          className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${currentPage === 'home' ? 'text-accent' : 'text-zinc-500 hover:text-white'}`}
        >
          HOME
        </button>
        <button 
          onClick={() => onNavigate('navigator')}
          className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${currentPage === 'navigator' ? 'text-accent' : 'text-zinc-500 hover:text-white'}`}
        >
          NAVEGADOR
        </button>
      </div>
    </nav>
  );
};

export default Header;
