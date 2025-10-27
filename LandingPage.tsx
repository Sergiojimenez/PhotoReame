import React from 'react';
import P5Canvas from './P5Canvas';
import Header from './Header';
import Features from './Features';
import Testimonials from './Testimonials';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 text-white">
        <P5Canvas />
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <h1
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent max-w-4xl leading-tight animate-fade-in-down"
            style={{ filter: 'drop-shadow(0 0 1.5rem rgba(239, 68, 68, 0.4))' }}
          >
            Transform Chaos Into <br /> Perfect Photo Organization
          </h1>
          <p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-6 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            Transform messy photo filenames into organized, descriptive names using AI. Sort thousands of photos in minutes, not hours.
          </p>
          <div
            className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <button className="text-lg font-semibold py-4 px-10 rounded-lg text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-red-500/50">
              Start Renaming
            </button>
            <button className="text-lg font-semibold py-4 px-10 rounded-lg text-slate-300 transition-all duration-300 ease-in-out bg-white/5 border-2 border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transform hover:-translate-y-1 hover:scale-105">
              See Demo
            </button>
          </div>
        </div>
      </main>
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
};

export default LandingPage;