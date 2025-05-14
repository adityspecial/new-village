import React from 'react';
import { motion } from 'framer-motion';

interface ProgramItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

const programData: ProgramItem[] = [
  {
    id: 1,
    title: "Akshara Prabhavam",
    description: "Akshara Prabhavam is a grassroots initiative transforming childhood education in rural Dharwad. We nurture disciplined, creative minds through mentorship, value-based learning, and holistic development in a safe, inspiring space.",
    imageUrl: "/images/Programs/AP.jpg",
    linkUrl: "/work/education/akshar-prabhavam"
  },
  {
    id: 2,
    title: "Farmers Training",
    description: "At Karnataka Incubation Foundation (KIF), we empower farmers with practical training, sustainable techniques, and market insights—building confidence, improving yields, and unlocking rural entrepreneurship.",
    imageUrl: "/images/Programs/FT.jpg",
    linkUrl: "/work/agriculture/farmer-training"
  },
  {
    id: 3,
    title: "Gram Siri",
    description: "Under Grama Siri, KIF hosts Kreedotsava, a village sports fest for all ages, and Pada Pooja, where children honor parents—fostering unity, joy, and values.",
    imageUrl: "/images/Programs/GS.JPG",
    linkUrl: "https://example.com/gram-siri"
  },
  {
    id: 4,
    title: "Grama Vana",
    description: "Grama Vana is an environment initiative by Karnataka Incubation Foundation that empowers rural communities to create their own forests and protect the environment.",
    imageUrl: "/images/Programs/Env.jpg",
    linkUrl: "/work/environment"
  }
];

const Programs: React.FC = () => {
  return (
    <div className="bg-amber-100 min-h-screen py-16 pattern-bg-yellow">
      <motion.h1 
        className="text-4xl font-bold text-center text-orange-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Programs
      </motion.h1>

      <div className="space-y-4 px-4 max-w-5xl mx-auto">
        {programData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            
          >
            <a href={item.linkUrl} rel="noopener noreferrer">
              <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="bg-white h-full p-6 rounded-2xl shadow-xl border-4 border-orange-300 transform transition duration-300 hover:shadow-2xl flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-orange-700 mb-2">{item.title}</h2>
                    <p className="text-lg text-gray-700">{item.description}</p>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="overflow-hidden rounded-2xl shadow-xl border-4 border-orange-300 h-64">
                    <motion.img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
