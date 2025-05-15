import React from 'react';
import { motion } from 'framer-motion';

const HealthHygiene = () => {
  return (
    <div className="bg-gradient-to-br from-orange-100 via-pink-100 to-yellow-100 py-12 px-6 lg:px-20 text-gray-800 font-sans space-y-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8 text-rose-600"
      >
        Health & Hygiene Awareness for School Children
      </motion.h1>

      {/* Section 1: Image left, Text right */}
      <section className="flex flex-col lg:flex-row items-center gap-10">
        <motion.img
          src="/images/health/3.jpg"
          alt="Health Hygiene"
          className="w-full lg:w-1/2 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-rose-500 mb-4">Why Health & Hygiene Awareness?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Children are more vulnerable to infections and diseases due to poor hygiene.</li>
            <li>Lack of awareness leads to frequent illnesses, affecting school attendance and learning.</li>
            <li>Many rural schools face challenges like unsafe drinking water and inadequate sanitation.</li>
            <li>Early education on hygiene builds lifelong healthy habits.</li>
            <li>Girls especially need awareness on menstrual hygiene.</li>
            <li>Healthy children create healthy families and clean villages.</li>
          </ul>
        </motion.div>
      </section>

      {/* Section 2: Text left, Image right */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-rose-500 mb-4">What We Do</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Visit homes and interact with families</li>
            <li>Educate on personal, family, and environmental hygiene</li>
            <li>Demonstrate handwashing, safe drinking water, and food safety practices</li>
            <li>Spread awareness about common diseases and menstrual hygiene</li>
            <li>Distribute informative leaflets, posters, and hygiene kits</li>
            <li>Encourage families to maintain clean homes and surroundings</li>
          </ul>
        </motion.div>
        <motion.img
          src="/images/health/1.jpg"
          alt="Hygiene Education"
          className="w-full lg:w-1/2 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* Section 3: Image left, Text right */}
      <section className="flex flex-col lg:flex-row items-center gap-10">
        <motion.img
          src="/images/health/2.jpg"
          alt="Healthy Families"
          className="w-full lg:w-1/2 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-rose-500 mb-4">Why It Matters</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Creates personal connections and trust within the community</li>
            <li>Reaches people who may not attend public meetings</li>
            <li>Tackles myths, taboos, and misconceptions directly</li>
            <li>Improves household health awareness long-term</li>
            <li>Healthy homes build healthy villages.</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
};

export default HealthHygiene;
