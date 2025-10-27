import React from 'react';
import Header from './Header';
import Footer from './Footer';

const HolaSergioPage: React.FC = () => {
  return (
    <div className="bg-[rgb(var(--color-surface-base))] text-[rgb(var(--color-text-primary))] min-h-screen flex flex-col">
      <Header theme="dark" />
      <main className="flex-grow flex items-center justify-center">
        <h1
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
          style={{ filter: 'drop-shadow(0 0 1.5rem rgba(239, 68, 68, 0.4))' }}
        >
          ¡Hola Sergio!
        </h1>
      </main>
      <Footer />
    </div>
  );
};

export default HolaSergioPage;
