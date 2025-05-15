import React from 'react';
import { motion } from 'framer-motion';

const Health: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-12 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h1
          className="text-4xl font-bold text-center text-red-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Strengthening Health. Saving Lives.
        </motion.h1>

        <motion.p
          className="bg-red-100 text-gray-900 p-4 rounded-lg shadow text-lg text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Our health programs focus on ensuring access to essential care, promoting hygiene, and supporting maternal and child health in underserved communities.
        </motion.p>

        {/* Section 1 */}
        <section className="bg-yellow-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-red-700 mb-3">Key Challenges</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Limited access to basic healthcare services in rural areas.</li>
            <li>Lack of awareness about hygiene and preventive care.</li>
            <li>High maternal and infant mortality rates.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="bg-green-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">What We Do</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Conduct health awareness campaigns and hygiene drives.</li>
            <li>Provide free health check-ups and consultations.</li>
            <li>Train local health workers and volunteers.</li>
            <li>Distribute sanitary kits and medicines in remote areas.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our Impact</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reached over 10,000 people with awareness campaigns.</li>
            <li>Facilitated 300+ health camps across 5 districts.</li>
            <li>Improved hygiene in 50+ villages through training & kits.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Health;
