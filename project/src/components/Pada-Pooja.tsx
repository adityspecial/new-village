import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children, bgColor = 'bg-white', textColor = 'text-gray-800' }) => (
  <div className={`${bgColor} ${textColor} py-8 px-4 sm:px-6 lg:px-12 rounded-xl shadow-md mb-8`}>
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
    <div className="text-md sm:text-lg leading-relaxed">{children}</div>
  </div>
);

const PadaPooja = () => {
  const images = [
  "/images/Pada-Pooja/_DSC5038.JPG",
  "/images/Pada-Pooja/4.JPG",
  '/images/Pada-Pooja/DSC04168.JPG',
  ]; // Place images in /public or adjust path accordingly

  return (
    <div className="min-h-screen bg-pink-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center text-pink-800 mb-8"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Pada Pooja – A Tribute of Love and Respect
        </motion.h1>

        <Section title="What is Pada Pooja?" bgColor="bg-pink-100">
          Pada Pooja is a traditional Indian ceremony where children wash the feet of their parents 
          as a symbol of deep gratitude, respect, and devotion. At Karnataka Incubation Foundation (KIF), 
          this powerful ritual is part of our village projects to reinforce the foundation of values in young minds.
        </Section>

        <Section title="Objectives of Pada Pooja" bgColor="bg-white">
          <ul className="list-disc list-inside mt-3">
            <li>To instill humility and respect in children toward parents and elders</li>
            <li>To strengthen family bonds and emotional connections</li>
            <li>To preserve and promote cultural and traditional practices</li>
            <li>To emphasize that nation-building begins at home, with gratitude and discipline</li>
          </ul>
        </Section>

        <Section title="Impact on Children and Parents" bgColor="bg-rose-100">
          Children often undergo a deep emotional transformation, realizing the sacrifices and love of their parents. 
          Meanwhile, parents feel valued and proud seeing their children’s growth not only in academics but in values 
          and behavior. It fosters a sense of emotional bonding that extends beyond the family to the entire community.
        </Section>

        <Section title="Gallery – Moments from Pada Pooja" bgColor="bg-pink-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`padapooja-${index}`}
                className="rounded-lg w-full h-64 object-cover shadow hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default PadaPooja;
