
import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import NavigatorPage from './pages/NavigatorPage';
import DetailsPage from './pages/DetailsPage';
import ChatNavigator from './components/ChatNavigator';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'navigator' | 'details'>('home');
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Header 
        currentPage={currentPage === 'details' ? 'navigator' : currentPage} 
        onNavigate={(page) => setCurrentPage(page as 'home' | 'navigator')} 
      />
      
      <main>
        {currentPage === 'home' && (
          <LandingPage onOpenNavigator={() => setCurrentPage('navigator')} />
        )}
        {currentPage === 'navigator' && (
          <NavigatorPage 
            onOpenChat={() => setShowChat(true)} 
            onViewDetails={() => setCurrentPage('details')}
          />
        )}
        {currentPage === 'details' && (
          <DetailsPage />
        )}
      </main>

      {/* Floating Chat / AI Interface Overlay */}
      {showChat && <ChatNavigator onClose={() => setShowChat(false)} />}
    </div>
  );
};

export default App;
