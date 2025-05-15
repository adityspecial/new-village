import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children, bgColor = 'bg-white', textColor = 'text-gray-800' }) => (
  <div className={`${bgColor} ${textColor} py-8 px-4 sm:px-6 lg:px-12 rounded-xl shadow-md mb-8`}>
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
    <div className="text-md sm:text-lg leading-relaxed">{children}</div>
  </div>
);

const Kreedotsava = () => {
  const images = [
    "/images/Kreedautasav/491045104_9438429239559489_6674236469208585750_n.jpg",
     "/images/Kreedautasav/491283191_9438428912892855_5240761760687279017_n.jpg",
     "/images/Kreedautasav/491429203_9438429216226158_5550896913428023532_n.jpg"
  ]; // Add your event images here

  return (
    <div className="min-h-screen bg-yellow-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center text-amber-700 mb-8"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          A Festival of Rural Games and Togetherness
        </motion.h1>

        <Section title="What is Kreedotsava?" bgColor="bg-yellow-100">
          Kreedotsava is a unique village-level sports festival initiated by Karnataka Incubation Foundation (KIF). 
          It brings the entire village together through games and shared celebration. This full-day event welcomes people 
          of all ages—children, youth, women, and elders—to play, cheer, and connect.
        </Section>

        <Section title="Why Kreedotsava?" bgColor="bg-white">
          The heart of Kreedotsava lies in the belief that <strong>playing together builds bonds</strong>. 
          In many villages, divisions exist—across age, gender, or caste. Kreedotsava becomes the <strong>common ground</strong> 
          where these fade away. It promotes <strong>equality, social harmony, and mutual respect</strong>.
        </Section>

        <Section title="Traditional Games" bgColor="bg-green-100">
          The festival revives and celebrates traditional games like:
          <ul className="list-disc list-inside mt-3">
            <li>Lagori</li>
            <li>Gilli Danda</li>
            <li>Tug-of-War</li>
            <li>Pot Breaking</li>
          </ul>
          These games foster teamwork, excitement, and nostalgia across generations.
        </Section>

        <Section title="A Full-Day Celebration" bgColor="bg-blue-100">
          The event starts with an <strong>inaugural ceremony</strong> and concludes with <strong>prize distribution</strong>. 
          Meals are shared, laughter fills the air, and people spend the day <strong>playing and reconnecting</strong>. 
          It’s a day of joy, not just sports—<strong>a social celebration</strong> that leaves lasting memories.
        </Section>

        <Section title="The Impact" bgColor="bg-purple-100">
          Kreedotsava helps:
          <ul className="list-disc list-inside mt-3">
            <li>Break social barriers</li>
            <li>Promote inclusion and equality</li>
            <li>Encourage physical activity and teamwork</li>
            <li>Strengthen a unified village identity</li>
            <li>Involve women and elders in community life</li>
          </ul>
        </Section>

        {/* Image Gallery Section */}
        <Section title="Moments from Kreedotsava" bgColor="bg-amber-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`kreedotsava-${index}`}
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

export default Kreedotsava;
