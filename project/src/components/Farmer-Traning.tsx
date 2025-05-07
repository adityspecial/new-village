import React, { useState, useEffect } from 'react';

const FarmerTraining: React.FC = () => {
  const slides = [
    {
      title: "Empowering Farmers",
      subtitle: "Why Farmer Training?",
      text: "Equipping farmers with knowledge, confidence, and sustainable techniques to improve yield and income.",
      image: "/images/Farmer-Training/IMG20240602161413 (1).jpg"
    },
    {
      title: "Sustainable Practices",
      subtitle: "Farming Techniques",
      text: "Organic farming, soil health management, and integrated pest control to boost productivity.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Smart Farming",
      subtitle: "Business Skills",
      text: "Learn record keeping, market analysis, and use of government schemes for agri-entrepreneurship.",
      image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
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
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: "#333" ,backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-thread.png")'
    }}>
      {/* Slider Section */}
      <section style={{
        position: 'relative',
        height: '600px',
        overflow: 'hidden'
      }}>
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(70%)'
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          padding: '30px',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',

        }}>
          <h2 style={{ fontSize: '1.8rem', margin: 0 }}>{slides[currentSlide].title}</h2>
          <h3 style={{ fontSize: '1.2rem', margin: '10px 0' }}>{slides[currentSlide].subtitle}</h3>
          <p style={{ fontSize: '1rem' }}>{slides[currentSlide].text}</p>
        </div>
        {/* Arrows */}
        <button onClick={handlePrev} style={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.6)',
          border: 'none',
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer'
        }}>❮</button>

        <button onClick={handleNext} style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.6)',
          border: 'none',
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer'
        }}>❯</button>
      </section>

      {/* Info Section */}
      <section style={{
        maxWidth: '900px',
        margin: '50px auto',
        padding: '20px',
        background: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        
     
      }}>
        <div style={{ marginBottom: '30px', }}>
          <h2 style={{ color: '#ff9f43', fontSize: '1.5rem', marginBottom: '10px' }}>Why Farmers’ Training?</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            At Karnataka Incubation Foundation (KIF), we believe that empowered farmers can change the future of rural India. Our training programs are designed to equip farmers with:
          </p>
          <ul style={{ padding: 0, listStyleType: 'none', fontSize: '1rem', lineHeight: '1.6' }}>
            <li>✅ Practical knowledge they can apply on their farms</li>
            <li>✅ Affordable and sustainable techniques to improve yield and income</li>
            <li>✅ Confidence to handle unexpected farming challenges</li>
            <li>✅ Awareness of market trends, schemes, and entrepreneurship opportunities</li>
          </ul>
        </div>

        <div>
          <h2 style={{ color: '#ff9f43', fontSize: '1.5rem', marginBottom: '10px' }}>What We Offer</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            We conduct one-day training programs in villages and talukas to equip farmers and rural youth with practical skills in:
          </p>
          <ul style={{ padding: 0, listStyleType: 'none', fontSize: '1rem', lineHeight: '1.6' }}>
            <li>🌱 <strong>Farming Techniques:</strong> Organic farming, soil health, pest control, seed and water management</li>
            <li>🐓 <strong>Livelihood Options:</strong> Poultry, sheep-goat rearing, and sericulture</li>
            <li>📈 <strong>Business Skills:</strong> Record keeping, profit planning, market linkages, and government schemes</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <div style={{
        textAlign: 'center',
        padding: '40px 20px',
        background: '#f8f9fa'
      }}>
        <a href="/register" style={{
          display: 'inline-block',
          padding: '15px 30px',
          background: '#ff9f43',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '30px',
          fontWeight: 600,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          Register for Training
        </a>
      </div>
    </div>
  );
};

export default FarmerTraining;
