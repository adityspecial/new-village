import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Local Farmer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    quote: 'The sustainable farming techniques I learned through Village Life have transformed my farm. My yields have improved, and I\'m now teaching these methods to other farmers in my community.',
  },
  {
    name: 'Priya Singh',
    role: 'Artisan',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    quote: 'Thanks to the craft development program, I\'ve been able to preserve our traditional art while making it economically viable. The support has helped me establish my own workshop.',
  },
  {
    name: 'Amit Patel',
    role: 'Village Teacher',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    quote: 'The educational initiatives have brought modern teaching methods to our village school. Our students now have access to quality education while staying connected to their roots.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
          Voices from the Village
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6 relative"
            >
              <div className="absolute -top-4 left-6">
                <Quote className="w-8 h-8 text-amber-500 transform rotate-180" />
              </div>
              
              <div className="flex items-center mb-6 mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-500"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-amber-900">{testimonial.name}</h3>
                  <p className="text-amber-700">{testimonial.role}</p>
                </div>
              </div>
              
              <motion.p 
                className="text-gray-600 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.3 }}
              >
                "{testimonial.quote}"
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;