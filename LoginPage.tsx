import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';

const LoginPage: React.FC = () => {
  const handleNav = (hash: string) => {
    if (hash === '#') return;
    window.location.hash = hash;
  };

  return (
    <div className="bg-[rgb(var(--color-surface-base))] text-[rgb(var(--color-text-primary))] min-h-screen flex flex-col">
      <Header theme="dark" />
      <main className="flex-grow flex items-center justify-center py-24 px-4">
        <div className="w-full max-w-md bg-[rgb(var(--color-surface-card))] p-8 rounded-lg shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-white">Welcome Back</h1>
            <p className="text-[rgb(var(--color-text-secondary))] mt-2">Sign in to continue to PhotoRename</p>
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
                className="w-full bg-[rgb(var(--color-surface-header))] text-white border border-[rgb(var(--color-border-subtle))] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-brand-primary))] transition"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <Button variant="text" onClick={() => handleNav('#')} className="p-0 h-auto text-sm">
                  Forgot Password?
                </Button>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="w-full bg-[rgb(var(--color-surface-header))] text-white border border-[rgb(var(--color-border-subtle))] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-brand-primary))] transition"
              />
            </div>
            <div>
              <Button type="submit" size="l" className="w-full">
                Sign In
              </Button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-[rgb(var(--color-text-secondary))]">
              Don't have an account?{' '}
              <Button variant="text" onClick={() => handleNav('#')} className="p-0 h-auto inline-block">
                Sign Up
              </Button>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;