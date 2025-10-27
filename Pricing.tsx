import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CheckIcon from './CheckIcon';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'For individuals starting out.',
      features: [
        'Rename up to 50 photos per month',
        'Basic AI suggestions',
        'Standard processing speed',
        'Community support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$9',
      description: 'For professionals and creators.',
      features: [
        'Unlimited photo renaming',
        'Advanced AI suggestions',
        'Batch processing up to 1,000 photos',
        'Customizable naming formats',
        'Priority support',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Business',
      price: '$29',
      description: 'For teams and agencies.',
      features: [
        'All features in Pro',
        'Team collaboration (up to 5 users)',
        'Unlimited batch processing',
        'Centralized billing',
        'Dedicated account manager',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="bg-[#0b0f19] text-white min-h-screen">
      <Header theme="dark" />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Find the perfect plan</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Start for free and scale up as you grow. All plans include a 14-day trial of our Pro features.
          </p>
          <div className="grid lg:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-[#1c1f2e] p-8 rounded-lg flex flex-col text-left relative border-2 ${
                  plan.popular ? 'border-red-500 shadow-2xl shadow-red-500/20' : 'border-transparent'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Most Popular
                  </div>
                )}
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
                    plan.popular
                      ? 'text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl hover:shadow-red-500/40'
                      : 'text-slate-300 bg-white/5 border-2 border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </button>
                <ul className="mt-8 space-y-4 text-gray-300 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;