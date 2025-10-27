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

  const linkClasses = "p-0 bg-transparent border-none cursor-pointer w-full text-left text-gray-400 hover:text-red-500 transition-colors";

  return (
    <footer className="bg-[#0b0f19] text-gray-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <PhotoIcon className="w-8 h-8 text-red-500" />
              <span className="text-xl font-bold text-white">PhotoRename</span>
            </div>
            <p className="text-sm">The smartest way to organize your digital photo library.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleNav('#')} className={linkClasses}>Features</button></li>
              <li><button onClick={() => handleNav('#/pricing')} className={linkClasses}>Pricing</button></li>
              <li><button onClick={() => handleNav('#')} className={linkClasses}>How it Works</button></li>
              <li><button onClick={() => handleNav('#')} className={linkClasses}>Demo</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleNav('#')} className={linkClasses}>About Us</button></li>
              <li><button onClick={() => handleNav('#')} className={linkClasses}>Contact</button></li>
              <li><button onClick={() => handleNav('#/design-system')} className={linkClasses}>Design System</button></li>
              <li><button onClick={() => handleNav('#')} className={linkClasses}>Privacy Policy</button></li>
            </ul>
          </div>
          <div>
             <h4 className="font-bold text-white mb-4">Follow Us</h4>
             <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                    <TwitterIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                    <GithubIcon className="w-6 h-6" />
                </a>
             </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} PhotoRename. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;