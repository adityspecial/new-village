import React, { useState } from 'react';

const SpokenEnglish: React.FC = () => {
  const isMobile = window.innerWidth <= 768;
  const [modalImage, setModalImage] = useState<string | null>(null); // <-- Modal image state

  const galleryWrapper: React.CSSProperties = {
    maxWidth: '100%',
    overflow: 'hidden',
    paddingBottom: '2rem',
    backgroundImage: "url('/images/low-contrast-linen.png')",
  };

  const galleryStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    height: isMobile ? 'auto' : '300px',
    padding: '0 1rem',
    overflow: 'hidden',
  };

  const imageStyle: React.CSSProperties = {
    width: isMobile ? '40%' : '10%',
    height: isMobile ? '200px' : '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    border: '2px solid white',
    transition: 'all 0.5s ease-out',
    cursor: 'pointer',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isMobile) e.currentTarget.style.width = '50%';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isMobile) e.currentTarget.style.width = '10%';
  };

  const handleImageClick = (src: string) => {
    setModalImage(src);
  };

  const handleModalClose = () => {
    setModalImage(null);
  };

  const sectionStyle: React.CSSProperties = {
    background: '#fffefc',
    padding: '3rem 1rem',
    fontFamily: 'Segoe UI, sans-serif',
    lineHeight: '1.7',
    color: '#3b2f2f',
    maxWidth: '1000px',
    margin: '1rem auto',
  };

  const cardStyle: React.CSSProperties = {
    background: '#fef3c7',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.8rem' : '2.4rem',
    color: '#92400e',
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: '2rem',
    letterSpacing: '0.5px',
  };

  const subheadingStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.2rem' : '1.6rem',
    color: '#b45309',
    fontWeight: 700,
    marginBottom: '1rem',
  };

  const listStyle: React.CSSProperties = {
    paddingLeft: '1.2rem',
    marginTop: '0.5rem',
    fontSize: isMobile ? '0.95rem' : '1rem',
  };

  const highlightText: React.CSSProperties = {
    color: '#92400e',
    fontWeight: 600,
  };

  return (
    <div style={galleryWrapper}>
      {/* Image Gallery */}
      <div style={{ paddingTop: '2rem' }}>
        <div style={galleryStyle}>
          {[
            '/images/Spoken-English/1.jpg',
            '/images/Spoken-English/2.jpg',
            '/images/Spoken-English/3.jpg',
            '/images/Spoken-English/4.jpg',
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              style={imageStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleImageClick(src)} // <-- Click opens modal
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={sectionStyle}>
        <h1 style={headingStyle}>Spoken English</h1>

        <div style={cardStyle}>
          <p>
            <span style={highlightText}>Spoken English</span> is essential for effective communication in today’s globalized world. 
            Our goal is to help people of all ages improve their spoken English skills and express themselves confidently.
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={subheadingStyle}>Key Features</h2>
          <ul style={listStyle}>
            <li><strong>Conversational Practice:</strong> Interactive sessions for real-life conversations.</li>
            <li><strong>Pronunciation Techniques:</strong> Mastering the art of speaking clearly and correctly.</li>
            <li><strong>Grammar Lessons:</strong> Strengthening the foundations of English grammar.</li>
            <li><strong>Public Speaking:</strong> Building confidence for speeches and presentations.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={subheadingStyle}>Outcomes</h2>
          <ul style={listStyle}>
            <li><strong>Better Communication:</strong> Children are being taught English to connect with the world more easily.</li>
            <li><strong>Confidence Boost:</strong> Language learning is helping them gain self-assurance.</li>
            <li><strong>Bridging Gaps:</strong> Aims to ensure they don't miss opportunities due to lack of language skills.</li>
            <li><strong>Sunday Sessions:</strong> NRIs and IT sector volunteers conduct online English classes every Sunday.</li>
          </ul>
        </div>

        <div style={{ ...cardStyle, background: '#fde68a', textAlign: 'center' }}>
          <p style={{ fontSize: isMobile ? '1rem' : '1.3rem', fontWeight: 600 }}>
            Spoken English is the key to unlocking limitless opportunities in your personal and professional life!
          </p>
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          onClick={handleModalClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={modalImage}
            alt="Modal"
            style={{
              maxHeight: '90%',
              maxWidth: '90%',
              borderRadius: '10px',
              border: '4px solid white',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SpokenEnglish;