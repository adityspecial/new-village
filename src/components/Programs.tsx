import React from 'react';
import { motion } from 'framer-motion';
import { Scaling as Seedling, BookOpen, ShoppingBag, Users } from 'lucide-react';

const programs = [
  {
    icon: Seedling,
    title: 'Sustainable Farming',
    description: 'Promoting organic farming practices and sustainable agriculture',
  },
  {
    icon: BookOpen,
    title: 'Rural Education',
    description: 'Quality education initiatives for village children',
  },
  {
    icon: ShoppingBag,
    title: 'Craft Development',
    description: 'Supporting local artisans and traditional crafts',
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Strengthening village communities through collective programs',
  },
];

const Programs = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <program.icon className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;