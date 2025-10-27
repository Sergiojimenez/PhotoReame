import React, { useState } from 'react';
import PhotoIcon from './PhotoIcon';
import Button from './Button';

interface HeaderProps {
  theme?: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ theme = 'dark' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (hash: string) => {
    window.location.hash = hash;
    setIsMenuOpen(false);
  };
  
  const headerClasses = `fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
    theme === 'dark' 
      ? 'bg-[rgb(var(--color-surface-header),0.8)] border-b border-[rgb(var(--color-border-subtle))] backdrop-blur-md' 
      : 'bg-white/80 border-b border-gray-200 backdrop-blur-md'
  }`;

  const textColor = theme === 'dark' ? 'text-[rgb(var(--color-text-primary))]' : 'text-gray-800';

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => handleNav('')}
        >
          <PhotoIcon className={`w-8 h-8 text-[rgb(var(--color-brand-primary))]`} />
          <span className={`text-xl font-bold ${textColor}`}>PhotoRename</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-2">
          <Button variant="text" color={theme === 'dark' ? 'neutral' : 'inverted'} onClick={() => handleNav('#features')}>Features</Button>
          <Button variant="text" color={theme === 'dark' ? 'neutral' : 'inverted'} onClick={() => handleNav('#/pricing')}>Pricing</Button>
          <Button variant="text" color={theme === 'dark' ? 'neutral' : 'inverted'} onClick={() => handleNav('#how-it-works')}>How it Works</Button>
        </nav>
        
        <div className="hidden md:flex items-center space-x-2">
           <Button variant="text" color={theme === 'dark' ? 'neutral' : 'inverted'} onClick={() => handleNav('#/login')}>Log In</Button>
           <Button variant="filled" size="m" onClick={() => handleNav('#/renamer')}>Open App</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`focus:outline-none ${textColor}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${theme === 'dark' ? 'bg-[rgb(var(--color-surface-header))] border-t border-[rgb(var(--color-border-subtle))]' : 'bg-white border-t border-gray-200'}`}>
          <nav className="container mx-auto px-6 py-4 flex flex-col space-y-2">
              <Button variant="text" color={theme === 'dark' ? 'neutral' : 'inverted'} className="w-full justify-start" onClick={() => handleNav('#features')}>Features</Button>
              <Button variant="text" color={theme === 'dark' ? 'neutral' : 'inverted'} className="w-full justify-start" onClick={() => handleNav('#/pricing')}>Pricing</Button>
              <Button variant="text" color={theme === 'dark' ? 'neutral' : 'inverted'} className="w-full justify-start" onClick={() => handleNav('#how-it-works')}>How it Works</Button>
              <div className="pt-4 mt-2 border-t border-[rgb(var(--color-border-subtle))] flex flex-col space-y-2">
                <Button variant="outlined" className="w-full" onClick={() => handleNav('#/login')}>Log In</Button>
                <Button variant="filled" className="w-full" onClick={() => handleNav('#/renamer')}>Open App</Button>
              </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;