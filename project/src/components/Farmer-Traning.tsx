import React, { useState, useEffect } from 'react';

const FarmerTraining: React.FC = () => {
  const slides = [
    {
      title: "Empowering Farmers",
      subtitle: "Why Farmer Training?",
      text: "Equipping farmers with knowledge, confidence, and sustainable techniques to improve yield and income.",
      image: "/images/Farmer-Training/1.jpg"
    },
    {
      title: "Sustainable Practices",
      subtitle: "Farming Techniques",
      text: "Organic farming, soil health management, and integrated pest control to boost productivity.",
      image: "/images/Farmer-Training/2.png"
    },
    {
      title: "Smart Farming",
      subtitle: "Business Skills",
      text: "Learn record keeping, market analysis, and use of government schemes for agri-entrepreneurship.",
      image: "/images/Farmer-Training/3.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="font-sans text-gray-800 bg-[#DBF2DE] bg-[url('/images/low-contrast-linen.png')]">
      {/* Slider Section */}
      <section className="relative h-[70vh] md:h-[600px] overflow-hidden">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover brightness-70"
        />
        
        <div className="absolute bottom-0 w-full p-4 md:p-8 bg-black/60 text-white">
          <h2 className="text-xl md:text-3xl font-bold mb-2">{slides[currentSlide].title}</h2>
          <h3 className="text-lg md:text-xl mb-2">{slides[currentSlide].subtitle}</h3>
          <p className="text-sm md:text-base">{slides[currentSlide].text}</p>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={handlePrev}
          className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-white/60 p-2 rounded-full hover:bg-white/80 transition-all"
        >
          ❮
        </button>
        
        <button 
          onClick={handleNext}
          className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-white/60 p-2 rounded-full hover:bg-white/80 transition-all"
        >
          ❯
        </button>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
          <h2 className="text-green-800 text-xl md:text-2xl font-bold mb-4">Why Farmers’ Training?</h2>
          <p className="text-sm md:text-base leading-relaxed mb-4">
            At Karnataka Incubation Foundation (KIF), we believe that empowered farmers can change the future of rural India. Our training programs are designed to equip farmers with:
          </p>
          <ul className="space-y-2 text-sm md:text-base">
            <li className="flex items-start">
              <span className="mr-2">-</span>
              Practical knowledge they can apply on their farms
            </li>
            <li className="flex items-start">
              <span className="mr-2">-</span>
              Affordable and sustainable techniques to improve yield and income
            </li>
            <li className="flex items-start">
              <span className="mr-2">-</span>
              Confidence to handle unexpected farming challenges
            </li>
            <li className="flex items-start">
              <span className="mr-2">-</span>
              Awareness of market trends, schemes, and entrepreneurship opportunities
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-green-800 text-xl md:text-2xl font-bold mb-4">What We Offer</h2>
          <p className="text-sm md:text-base leading-relaxed mb-4">
            We conduct one-day training programs in villages and talukas to equip farmers and rural youth with practical skills in:
          </p>
          <ol className="space-y-3 text-sm md:text-base">
            <li>
              <strong className="text-green-700">Farming Techniques: </strong>
              Organic farming, soil health, pest control, seed and water management
            </li>
            <li>
              <strong className="text-green-700">Livelihood Options: </strong>
              Poultry, sheep-goat rearing, and sericulture
            </li>
            <li>
              <strong className="text-green-700">Business Skills: </strong>
              Record keeping, profit planning, market linkages, and government schemes
            </li>
          </ol>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center py-8 md:py-12 bg-[#DBF2DE] bg-[url('/images/low-contrast-linen.png')]">
        <a 
          href="/register"
          className="inline-block px-6 py-3 md:px-8 md:py-4 bg-green-800 text-white rounded-full font-semibold 
                   hover:bg-green-700 transition-colors shadow-lg hover:shadow-md"
        >
          Register for Training
        </a>
      </div>
    </div>
  );
};

export default FarmerTraining;