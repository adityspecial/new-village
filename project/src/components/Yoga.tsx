import React from 'react';
import { motion } from 'framer-motion';

const Yoga = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-6 lg:px-20 text-gray-800 font-sans space-y-20 ">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className="text-4xl font-bold text-center mb-4 text-indigo-600"
      >
        Yoga for Children
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-medium text-center text-gray-700"
      >
        Empowering Young Minds and Bodies from an Early Age
      </motion.h2>

      {/* Section 1: Image left, text right */}
      <section className="flex flex-col lg:flex-row items-center gap-10">
        <motion.img
          src="/images/Yoga/DSC06014.JPG"
          alt="Kids Yoga"
          className="w-full lg:w-1/2 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Why We Do This</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Enhances strength, flexibility, and fitness in young bodies.</li>
            <li>Improves focus, memory, and mental well-being for better academics.</li>
            <li>Helps children manage stress, emotions, and anxiety with calmness.</li>
            <li>Builds confidence and leadership through peer-led yoga sessions.</li>
            <li>Instills lifelong wellness, discipline, and routine from a young age.</li>
          </ul>
        </motion.div>
      </section>

      {/* Section 2: Text left, image right */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">How We Do It</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Organize yoga training camps for physical and mental health.</li>
            <li>Encourage kids to lead yoga, building confidence and responsibility.</li>
            <li>Hold regular morning sessions to cultivate self-discipline and energy.</li>
            <li>Celebrate Yoga Day with performances led by children.</li>
          </ul>
        </motion.div>
        <motion.img
          src="/images/Yoga/DSC06015.JPG"
          alt="Yoga Day"
          className="w-full lg:w-1/2 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
      </section>

      {/* Section 3: Image left, text right */}
      <section className="flex flex-col lg:flex-row items-center gap-10">
        <motion.img
          src="/images/health/4.jpg"
          alt="Yoga Impact"
          className="w-full lg:w-1/2 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Impact So Far</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Trained 1500+ children across Karnataka</li>
            <li>Reached 70+ rural villages with yoga programs</li>
            <li>Empowered children with physical strength and inner confidence</li>
            <li>Fostered leadership, health, and discipline through daily practice</li>
          </ul>
        </motion.div>
      </section>

      {/* Quote */}
      <motion.div
        className="text-center text-lg text-purple-700 font-medium italic mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        "Yoga is more than fitness; it's the foundation for a healthy, happy future from an early age."
      </motion.div>
    </div>
  );
};

export default Yoga;
