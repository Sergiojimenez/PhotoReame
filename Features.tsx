import React from 'react';
import BrainIcon from './BrainIcon';
import LayersIcon from './LayersIcon';
import SettingsIcon from './SettingsIcon';

const Features: React.FC = () => {
  const features = [
    {
      icon: <BrainIcon className="w-12 h-12 text-red-500 mb-6 mx-auto" />,
      title: 'AI-Powered Renaming',
      description: 'Our smart AI analyzes your photos and suggests descriptive, context-aware filenames in seconds.',
    },
    {
      icon: <LayersIcon className="w-12 h-12 text-red-500 mb-6 mx-auto" />,
      title: 'Batch Processing',
      description: 'Rename thousands of photos at once with a single click. Save hours of manual work.',
    },
    {
      icon: <SettingsIcon className="w-12 h-12 text-red-500 mb-6 mx-auto" />,
      title: 'Customizable Formats',
      description: 'Define your own naming patterns. Add dates, locations, custom text, and sequences.',
    },
  ];

  return (
    <section className="bg-[#0b0f19] text-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features, Effortless Organization</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">Everything you need to bring order to your photo library.</p>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1c1f2e] p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
              {feature.icon}
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
