import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "This app is a lifesaver! I organized 10 years of family photos in a single afternoon. It felt like magic.",
      name: "Sarah J.",
      title: "Wedding Photographer",
    },
    {
      quote: "As a content creator, managing assets is a huge pain. PhotoRename has streamlined my workflow and saved me countless hours.",
      name: "Mark Chen",
      title: "YouTuber & Designer",
    },
    {
      quote: "Finally, a tool that understands what I need. The AI suggestions are spot-on, and the batch processing is incredibly fast. Highly recommended!",
      name: "Emily Rodriguez",
      title: "Real Estate Agent",
    },
  ];

  return (
    <section className="bg-[rgb(var(--color-surface-header))] text-[rgb(var(--color-text-primary))] py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Creatives Worldwide</h2>
        <p className="text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto mb-16">Don't just take our word for it. Here's what our users are saying.</p>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[rgb(var(--color-surface-card))] p-8 rounded-lg text-left flex flex-col">
              <p className="text-gray-300 mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[rgb(var(--color-brand-primary))] flex-shrink-0 mr-4"></div>
                <div>
                  <p className="font-bold text-[rgb(var(--color-text-primary))]">{testimonial.name}</p>
                  <p className="text-[rgb(var(--color-text-secondary))] text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;