import React from 'react';
import PhotoIcon from './PhotoIcon';

interface HeaderProps {
  theme?: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ theme = 'light' }) => {
  const isDarkTheme = theme === 'dark';
  
  const headerBaseClasses = "fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b transition-colors duration-300";
  const themeClasses = isDarkTheme 
    ? 'bg-[#101422]/80 border-slate-300/10 text-slate-200' 
    : 'bg-slate-200/80 border-slate-900/10 text-gray-800';

  const linkHoverClass = isDarkTheme 
    ? 'hover:text-white hover:bg-white/5' 
    : 'hover:text-gray-900 hover:bg-black/5';
    
  const linkClasses = `font-medium transition-colors duration-300 rounded-md px-3 py-2 ${linkHoverClass}`;

  const handleNav = (hash: string) => {
    if (hash === '#') {
        return;
    }
    window.location.hash = hash;
  };

  return (
    <header className={`${headerBaseClasses} ${themeClasses}`}>
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <button onClick={() => handleNav('/')} className={`flex items-center space-x-2 p-2 rounded-md transition-colors duration-300 ${linkHoverClass}`}>
          <PhotoIcon className="w-8 h-8 text-red-600" />
          <span className="text-xl font-bold">PhotoRename</span>
        </button>
        <div className="hidden md:flex items-center space-x-2">
          <button onClick={() => handleNav('#')} className={linkClasses}>Features</button>
          <button onClick={() => handleNav('#')} className={linkClasses}>How It Works</button>
          <button onClick={() => handleNav('#/pricing')} className={linkClasses}>Pricing</button>
          <button onClick={() => handleNav('#/design-system')} className={linkClasses}>Design System</button>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={() => handleNav('#/login')} className={`hidden md:block ${linkClasses}`}>Sign In</button>
          <button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-2 px-5 rounded-md hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-px transition-all duration-300">
            Try Free
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;