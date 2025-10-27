import React from 'react';
import Header from './Header';
import BrainIcon from './BrainIcon';
import LayersIcon from './LayersIcon';
import SettingsIcon from './SettingsIcon';
import PhotoIcon from './PhotoIcon';
import TwitterIcon from './TwitterIcon';
import GithubIcon from './GithubIcon';

// Define props for the ColorSwatch component for type safety
interface ColorSwatchProps {
  name: string;
  hex: string;
  className: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, hex, className }) => (
  <div className="flex flex-col items-center">
    <div className={`w-24 h-24 rounded-lg shadow-lg ${className}`}></div>
    <div className="mt-2 text-center">
      <p className="font-bold">{name}</p>
      <p className="text-gray-400 text-sm">{hex}</p>
    </div>
  </div>
);

const DesignSystem: React.FC = () => {
  // Add a specific type for the icons array for better type safety
  const icons: { name: string; Component: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
    { name: 'Photo', Component: PhotoIcon },
    { name: 'Brain (AI)', Component: BrainIcon },
    { name: 'Layers (Batch)', Component: LayersIcon },
    { name: 'Settings', Component: SettingsIcon },
    { name: 'Twitter', Component: TwitterIcon },
    { name: 'GitHub', Component: GithubIcon },
  ];

  return (
    <div className="bg-[#0b0f19] text-white min-h-screen">
      <Header theme="dark" />
      <main className="container mx-auto px-6 py-32">
        <h1 className="text-5xl font-extrabold mb-12 text-center">PhotoRename Design System</h1>

        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-red-500 pb-2">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <ColorSwatch name="Primary Red" hex="#ef4444" className="bg-red-600" />
            <ColorSwatch name="Gradient Start" hex="#ef4444" className="bg-red-500" />
            <ColorSwatch name="Gradient End" hex="#dc2626" className="bg-red-600" />
            <ColorSwatch name="Background" hex="#0b0f19" className="bg-[#0b0f19] border border-gray-700" />
            <ColorSwatch name="Card" hex="#1c1f2e" className="bg-[#1c1f2e] border border-gray-700" />
            <ColorSwatch name="Text Primary" hex="#ffffff" className="bg-white" />
            <ColorSwatch name="Text Secondary" hex="#9ca3af" className="bg-gray-400" />
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-red-500 pb-2">Typography</h2>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
             style={{ filter: 'drop-shadow(0 0 1.5rem rgba(239, 68, 68, 0.4))' }}>
              Hero Title
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold">Heading 2 (Section Title)</h2>
            <h3 className="text-xl font-bold">Heading 3 (Card Title)</h3>
            <p className="text-lg md:text-xl text-gray-400">
              Paragraph (Hero Subtitle): Transform messy photo filenames into organized, descriptive names using AI.
            </p>
            <p className="text-gray-400">
              Paragraph (Body): Our smart AI analyzes your photos and suggests descriptive, context-aware filenames in seconds.
            </p>
          </div>
        </section>
        
        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-red-500 pb-2">Buttons</h2>
          <div className="flex flex-wrap items-center gap-6">
            <button className="text-lg font-semibold py-4 px-10 rounded-lg text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-red-500/50">
              Primary CTA
            </button>
            <button className="text-lg font-semibold py-4 px-10 rounded-lg text-slate-300 transition-all duration-300 ease-in-out bg-white/5 border-2 border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transform hover:-translate-y-1 hover:scale-105">
              Secondary CTA
            </button>
            <button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-2 px-5 rounded-md hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-px transition-all duration-300">
              Header Button
            </button>
          </div>
        </section>

        {/* Icons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-red-500 pb-2">Icons</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
            {icons.map(({ name, Component }) => (
              <div key={name} className="flex flex-col items-center">
                <Component className="w-12 h-12 text-red-500 mb-2" />
                <p className="text-gray-400 text-sm">{name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Components Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-red-500 pb-2">Components</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Feature Card</h3>
              <div className="max-w-sm mx-auto">
                 <div className="bg-[#1c1f2e] p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300 text-center">
                  <BrainIcon className="w-12 h-12 text-red-500 mb-6 mx-auto" />
                  <h3 className="text-xl font-bold mb-3">AI-Powered Renaming</h3>
                  <p className="text-gray-400">Our smart AI analyzes your photos and suggests descriptive, context-aware filenames in seconds.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Testimonial Card</h3>
               <div className="max-w-sm mx-auto">
                <div className="bg-[#1c1f2e] p-8 rounded-lg text-left flex flex-col">
                  <p className="text-gray-300 mb-6 flex-grow">"This app is a lifesaver! I organized 10 years of family photos in a single afternoon. It felt like magic."</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-red-500 flex-shrink-0 mr-4"></div>
                    <div>
                      <p className="font-bold text-white">Sarah J.</p>
                      <p className="text-gray-400 text-sm">Wedding Photographer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignSystem;