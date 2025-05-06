import React from 'react';
import { motion } from 'framer-motion';
import { Trees as Tree, GraduationCap, Users, Heart } from 'lucide-react';

const stats = [
  {
    icon: Tree,
    value: '10,000+',
    label: 'Trees Planted',
    color: 'text-green-600',
  },
  {
    icon: GraduationCap,
    value: '500+',
    label: 'Students Educated',
    color: 'text-blue-600',
  },
  {
    icon: Users,
    value: '200+',
    label: 'Women Entrepreneurs',
    color: 'text-purple-600',
  },
  {
    icon: Heart,
    value: '50+',
    label: 'Villages Impacted',
    color: 'text-red-600',
  },
];

const Statistics = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="text-4xl font-bold text-gray-900 mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;