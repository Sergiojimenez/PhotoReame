import React from 'react';
import Header from './Header';
import BrainIcon from './BrainIcon';
import LayersIcon from './LayersIcon';
import SettingsIcon from './SettingsIcon';
import PhotoIcon from './PhotoIcon';
import TwitterIcon from './TwitterIcon';
import GithubIcon from './GithubIcon';
import Button from './Button';

interface ColorSwatchProps {
  name: string;
  token: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, token }) => (
  <div className="flex flex-col items-center">
    <div className="w-24 h-24 rounded-lg shadow-lg border border-[rgb(var(--color-border-subtle))]" style={{ backgroundColor: `rgb(var(${token}))` }}></div>
    <div className="mt-2 text-center">
      <p className="font-bold">{name}</p>
      <p className="text-[rgb(var(--color-text-secondary))] text-sm font-mono">{token}</p>
    </div>
  </div>
);

const DesignSystem: React.FC = () => {
  const icons: { name: string; Component: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
    { name: 'Photo', Component: PhotoIcon },
    { name: 'Brain (AI)', Component: BrainIcon },
    { name: 'Layers (Batch)', Component: LayersIcon },
    { name: 'Settings', Component: SettingsIcon },
    { name: 'Twitter', Component: TwitterIcon },
    { name: 'GitHub', Component: GithubIcon },
  ];
  
  const sizes: ('s' | 'm' | 'l')[] = ['s', 'm', 'l'];

  return (
    <div className="bg-[rgb(var(--color-surface-base))] text-[rgb(var(--color-text-primary))] min-h-screen">
      <Header theme="dark" />
      <main className="container mx-auto px-6 py-32">
        <h1 className="text-5xl font-extrabold mb-12 text-center">PhotoRename Design System</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-[rgb(var(--color-brand-primary))] pb-2">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <ColorSwatch name="Brand Primary" token="--color-brand-primary" />
            <ColorSwatch name="Surface Base" token="--color-surface-base" />
            <ColorSwatch name="Surface Card" token="--color-surface-card" />
            <ColorSwatch name="Text Primary" token="--color-text-primary" />
            <ColorSwatch name="Text Secondary" token="--color-text-secondary" />
            <ColorSwatch name="Success" token="--color-success" />
            <ColorSwatch name="Warning" token="--color-warning" />
            <ColorSwatch name="Danger" token="--color-danger" />
            <ColorSwatch name="Info" token="--color-info" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-[rgb(var(--color-brand-primary))] pb-2">Typography</h2>
          {/* ... Typography examples remain the same */}
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-[rgb(var(--color-brand-primary))] pb-2">Buttons</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Filled (Primary)</h3>
              <div className="flex flex-wrap items-center gap-6 p-6 bg-[rgb(var(--color-surface-card))] rounded-lg">
                {sizes.map(size => <Button key={size} variant="filled" size={size}>Button {size.toUpperCase()}</Button>)}
                <Button variant="filled" size="m" disabled>Disabled</Button>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Outlined</h3>
              <div className="flex flex-wrap items-center gap-6 p-6 bg-[rgb(var(--color-surface-card))] rounded-lg">
                {sizes.map(size => <Button key={size} variant="outlined" size={size}>Button {size.toUpperCase()}</Button>)}
                <Button variant="outlined" size="m" disabled>Disabled</Button>
              </div>
            </div>
             <div>
              <h3 className="text-2xl font-bold mb-4">Text</h3>
                <div className="space-y-4">
                    <div className="p-6 bg-[rgb(var(--color-surface-card))] rounded-lg">
                        <p className="mb-4 text-[rgb(var(--color-text-secondary))]">Default (Primary)</p>
                        <div className="flex flex-wrap items-center gap-6">
                            {sizes.map(size => <Button key={size} variant="text" size={size}>Button {size.toUpperCase()}</Button>)}
                            <Button variant="text" size="m" disabled>Disabled</Button>
                        </div>
                    </div>
                    <div className="p-6 bg-[rgb(var(--color-surface-card))] rounded-lg">
                        <p className="mb-4 text-[rgb(var(--color-text-secondary))]">Neutral (on Dark)</p>
                        <div className="flex flex-wrap items-center gap-6">
                            {sizes.map(size => <Button key={size} variant="text" color="neutral" size={size}>Button {size.toUpperCase()}</Button>)}
                            <Button variant="text" color="neutral" size="m" disabled>Disabled</Button>
                        </div>
                    </div>
                    <div className="p-6 bg-slate-200 rounded-lg">
                        <p className="mb-4 text-gray-600">Inverted (on Light)</p>
                        <div className="flex flex-wrap items-center gap-6">
                            {sizes.map(size => <Button key={size} variant="text" color="inverted" size={size}>Button {size.toUpperCase()}</Button>)}
                            <Button variant="text" color="inverted" size="m" disabled>Disabled</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Semantic</h3>
              <div className="flex flex-wrap items-center gap-6 p-6 bg-[rgb(var(--color-surface-card))] rounded-lg">
                  <Button color="success">Success</Button>
                  <Button color="warning">Warning</Button>
                  <Button color="danger">Danger</Button>
                  <Button color="info">Info</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-[rgb(var(--color-brand-primary))] pb-2">Icons</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
            {icons.map(({ name, Component }) => (
              <div key={name} className="flex flex-col items-center">
                <Component className="w-12 h-12 text-[rgb(var(--color-brand-primary))] mb-2" />
                <p className="text-[rgb(var(--color-text-secondary))] text-sm">{name}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-[rgb(var(--color-brand-primary))] pb-2">Components</h2>
           <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">CTA Card</h3>
              <div className="max-w-sm mx-auto">
                <div className="bg-[rgb(var(--color-surface-card))] p-8 rounded-lg text-center flex flex-col items-center">
                  <h3 className="text-2xl font-bold mb-3">Ready to Start?</h3>
                  <p className="text-[rgb(var(--color-text-secondary))] mb-6 max-w-xs">
                    Experience the magic of AI-powered photo organization today.
                  </p>
                  <Button size="m">Try Free Now</Button>
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