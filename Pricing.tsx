import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CheckIcon from './CheckIcon';
import Button from './Button';

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
    <div className="bg-[rgb(var(--color-surface-base))] text-[rgb(var(--color-text-primary))] min-h-screen">
      <Header theme="dark" />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Find the perfect plan</h1>
          <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto">
            Start for free and scale up as you grow. All plans include a 14-day trial of our Pro features.
          </p>
          <div className="grid lg:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-[rgb(var(--color-surface-card))] p-8 rounded-lg flex flex-col text-left relative border-2 ${
                  plan.popular ? 'border-[rgb(var(--color-brand-primary))] shadow-2xl shadow-[rgb(var(--color-brand-primary),0.2)]' : 'border-transparent'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-[rgb(var(--color-brand-primary))] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Most Popular
                  </div>
                )}
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <p className="text-[rgb(var(--color-text-secondary))] mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                  <span className="text-[rgb(var(--color-text-secondary))]">/month</span>
                </div>
                <Button 
                  variant={plan.popular ? 'filled' : 'outlined'}
                  size="m"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
                <ul className="mt-8 space-y-4 text-gray-300 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-[rgb(var(--color-brand-primary))] mr-3 mt-1 flex-shrink-0" />
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