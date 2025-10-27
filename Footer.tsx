import React from 'react';
import PhotoIcon from './PhotoIcon';
import TwitterIcon from './TwitterIcon';
import GithubIcon from './GithubIcon';

const Footer: React.FC = () => {

  const handleNav = (hash: string) => {
    // For placeholder links, don't change the hash
    if (hash === '#') {
      return;
    }
    window.location.hash = hash;
  };

  const linkClasses = "inline-block py-1 px-2 rounded-md text-slate-400 hover:bg-white/5 hover:text-white transition-colors duration-300";
  const socialLinkClasses = "p-2 rounded-full text-slate-400 hover:bg-white/10 hover:text-white transition-colors duration-300";

  return (
    <footer className="bg-[#101422] text-slate-300 py-16 border-t border-slate-300/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <PhotoIcon className="w-8 h-8 text-red-500" />
              <span className="text-xl font-bold text-white">PhotoRename</span>
            </div>
            <p className="text-sm text-slate-400">The smartest way to organize your digital photo library.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-1">
              <li><button onClick={() => handleNav('#')} className={linkClasses}>Features</button></li>
              <li><button onClick={() => handleNav('#/pricing')} className={linkClasses}>Pricing</button></li>
              <li><button onClick={() => handleNav('#')} className={linkClasses}>How it Works</button></li>
              <li><button onClick={() => handleNav('#')} className={linkClasses}>Demo</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-1">
              <li><button onClick={() => handleNav('#')} className={linkClasses}>About Us</button></li>
              <li><button onClick={() => handleNav('#')} className={linkClasses}>Contact</button></li>
              <li><button onClick={() => handleNav('#/design-system')} className={linkClasses}>Design System</button></li>
              <li><button onClick={() => handleNav('#')} className={linkClasses}>Privacy Policy</button></li>
            </ul>
          </div>
          <div>
             <h4 className="font-bold text-white mb-4">Follow Us</h4>
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
        <div className="mt-16 border-t border-slate-300/10 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} PhotoRename. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;