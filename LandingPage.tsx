import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import Features from './Features';
import Testimonials from './Testimonials';
import Button from './Button';
import P5Canvas from './P5Canvas';

const LandingPage: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash;
    let element: HTMLElement | null = null;

    if (hash === '#features' && featuresRef.current) {
        element = featuresRef.current;
    } else if (hash === '#how-it-works' && howItWorksRef.current) {
        element = howItWorksRef.current;
    }
    
    if (element) {
      // Use a timeout to ensure the page has rendered before scrolling
      setTimeout(() => {
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []); // Run only on mount

  const handleNav = (hash: string) => {
    window.location.hash = hash;
  };

  return (
    <div className="bg-[rgb(var(--color-surface-base))] text-[rgb(var(--color-text-primary))]">
      <Header theme="dark" />
      <P5Canvas />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center text-center min-h-[700px]">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                    The Smartest Way to
                    <br />
                    <span className="bg-gradient-to-r from-[rgb(var(--color-brand-primary))] to-red-400 bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 1rem rgba(239, 68, 68, 0.3))' }}>
                        Rename Your Photos
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto mb-10">
                    Stop wasting time on manual renaming. Use our AI to organize your entire photo library with meaningful, consistent filenames in just a few clicks.
                </p>
                <Button size="l" onClick={() => handleNav('#/renamer')}>
                    Open App
                </Button>
            </div>
        </section>

        {/* Features Section */}
        <div ref={featuresRef} id="features">
            <Features />
        </div>
        
        {/* How It Works Section */}
        <section ref={howItWorksRef} id="how-it-works" className="py-24">
           <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works in 3 Simple Steps</h2>
                <p className="text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto mb-16">Organize your photos in under a minute.</p>
                <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    <div className="text-center">
                        <div className="w-24 h-24 rounded-full bg-[rgb(var(--color-surface-card))] border-2 border-[rgb(var(--color-brand-primary))] flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-[rgb(var(--color-brand-primary))]">
                           1
                        </div>
                        <h3 className="text-xl font-bold mb-3">Upload Your Photos</h3>
                        <p className="text-[rgb(var(--color-text-secondary))]">Drag and drop any number of photos into our secure uploader.</p>
                    </div>
                     <div className="text-center">
                        <div className="w-24 h-24 rounded-full bg-[rgb(var(--color-surface-card))] border-2 border-[rgb(var(--color-brand-primary))] flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-[rgb(var(--color-brand-primary))]">
                           2
                        </div>
                        <h3 className="text-xl font-bold mb-3">Analyze with AI</h3>
                        <p className="text-[rgb(var(--color-text-secondary))]">Our AI analyzes the content of your images to suggest smart names.</p>
                    </div>
                     <div className="text-center">
                        <div className="w-24 h-24 rounded-full bg-[rgb(var(--color-surface-card))] border-2 border-[rgb(var(--color-brand-primary))] flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-[rgb(var(--color-brand-primary))]">
                           3
                        </div>
                        <h3 className="text-xl font-bold mb-3">Download & Enjoy</h3>
                        <p className="text-[rgb(var(--color-text-secondary))]">Review the new names, make tweaks, and download a .zip file.</p>
                    </div>
                </div>
           </div>
        </section>
        
        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <section className="bg-[rgb(var(--color-surface-base))] py-24">
            <div className="container mx-auto px-6">
                <div className="bg-[rgb(var(--color-surface-card))] p-12 rounded-lg text-center flex flex-col items-center max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-4">Ready to Organize Your Photos?</h2>
                  <p className="text-[rgb(var(--color-text-secondary))] mb-8 max-w-xl">
                    Take control of your digital memories. Get started for free today, no credit card required.
                  </p>
                  <Button size="l" onClick={() => handleNav('#/renamer')}>Open App</Button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;