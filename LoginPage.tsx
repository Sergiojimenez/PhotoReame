import React from 'react';
import Header from './Header';
import Footer from './Footer';

const LoginPage: React.FC = () => {
  const handleNav = (hash: string) => {
    // For placeholder links, don't change the hash
    if (hash === '#') {
        return;
    }
    window.location.hash = hash;
  };

  return (
    <div className="bg-[#0b0f19] text-white min-h-screen flex flex-col">
      <Header theme="dark" />
      <main className="flex-grow flex items-center justify-center py-24 px-4">
        <div className="w-full max-w-md bg-[#1c1f2e] p-8 rounded-lg shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-white">Welcome Back</h1>
            <p className="text-gray-400 mt-2">Sign in to continue to PhotoRename</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full bg-[#101422] text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => handleNav('#')}
                  className="text-sm text-red-500 hover:underline p-0 bg-transparent border-none cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="w-full bg-[#101422] text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full text-lg font-semibold py-3 px-8 rounded-lg text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-red-500/40"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <button
                onClick={() => handleNav('#')}
                className="font-medium text-red-500 hover:underline p-0 bg-transparent border-none cursor-pointer"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;