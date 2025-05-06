import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', { name, email });
    setName('');
    setEmail('');
  };

  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            Stay Connected with KIF
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for updates on village initiatives and community stories
          </p>
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto w-full">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-300 focus:outline-none focus:border-amber-500"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-300 focus:outline-none focus:border-amber-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
