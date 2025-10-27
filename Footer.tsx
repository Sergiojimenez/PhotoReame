import React from 'react';
import PhotoIcon from './PhotoIcon';
import TwitterIcon from './TwitterIcon';
import GithubIcon from './GithubIcon';
import Button from './Button';

const Footer: React.FC = () => {

  const handleNav = (hash: string) => {
    if (hash === '#') return;
    window.location.hash = hash;
  };

  const socialLinkClasses = "p-2 rounded-full text-[rgb(var(--color-text-secondary))] hover:bg-white/10 hover:text-[rgb(var(--color-text-primary))] transition-colors duration-300";

  return (
    <footer className="bg-[rgb(var(--color-surface-header))] text-slate-300 py-16 border-t border-[rgb(var(--color-border-subtle))]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <PhotoIcon className="w-8 h-8 text-[rgb(var(--color-brand-primary))]" />
              <span className="text-xl font-bold text-[rgb(var(--color-text-primary))]">PhotoRename</span>
            </div>
            <p className="text-sm text-[rgb(var(--color-text-secondary))]">The smartest way to organize your digital photo library.</p>
          </div>
          <div>
            <h4 className="font-bold text-[rgb(var(--color-text-primary))] mb-4">Product</h4>
            <ul className="space-y-1">
              <li><Button variant="text" color="neutral" onClick={() => handleNav('#')} className="p-1 justify-start">Features</Button></li>
              <li><Button variant="text" color="neutral" onClick={() => handleNav('#/pricing')} className="p-1 justify-start">Pricing</Button></li>
              <li><Button variant="text" color="neutral" onClick={() => handleNav('#')} className="p-1 justify-start">How it Works</Button></li>
              <li><Button variant="text" color="neutral" onClick={() => handleNav('#')} className="p-1 justify-start">Demo</Button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[rgb(var(--color-text-primary))] mb-4">Company</h4>
            <ul className="space-y-1">
               <li><Button variant="text" color="neutral" onClick={() => handleNav('#')} className="p-1 justify-start">About Us</Button></li>
               <li><Button variant="text" color="neutral" onClick={() => handleNav('#')} className="p-1 justify-start">Contact</Button></li>
               <li><Button variant="text" color="neutral" onClick={() => handleNav('#/design-system')} className="p-1 justify-start">Design System</Button></li>
               <li><Button variant="text" color="neutral" onClick={() => handleNav('#/hola-sergio')} className="p-1 justify-start">Hola Sergio</Button></li>
               <li><Button variant="text" color="neutral" onClick={() => handleNav('#')} className="p-1 justify-start">Privacy Policy</Button></li>
            </ul>
          </div>
          <div>
             <h4 className="font-bold text-[rgb(var(--color-text-primary))] mb-4">Follow Us</h4>
             <div className="flex space-x-2">
                <a href="#" className={socialLinkClasses}>
                    <TwitterIcon className="w-6 h-6" />
                </a>
                <a href="#" className={socialLinkClasses}>
                    <GithubIcon className="w-6 h-6" />
                </a>
             </div>
          </div>
        </div>
        <div className="mt-16 border-t border-[rgb(var(--color-border-subtle))] pt-8 text-center text-sm text-[rgb(var(--color-text-secondary))]">
          <p>&copy; {new Date().getFullYear()} PhotoRename. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;