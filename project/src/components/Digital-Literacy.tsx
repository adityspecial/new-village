import React, { useState } from 'react';

const DigitalLiteracy: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const isMobile = window.innerWidth <= 768;

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
    if (!isMobile) e.currentTarget.style.width = '40%';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isMobile) e.currentTarget.style.width = '10%';
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

  const imageList = [
    '/images/Digital-literacy/488470140_9351316421604105_2816224130122345181_n (2) (2).jpg',
    '/images/Digital-literacy/1.jpg',
    '/images/Digital-literacy/2.jpg',
  ];

  return (
    <div style={galleryWrapper}>
      {/* Image Gallery */}
      <div style={{ paddingTop: '2rem' }}>
        <div style={galleryStyle}>
          {imageList.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              style={imageStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'zoom-out',
          }}
        >
          <img
            src={selectedImage}
            alt="Full view"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
            }}
          />
        </div>
      )}

      {/* Main Content */}
      <div style={sectionStyle}>
        <h1 style={headingStyle}>Digital Literacy</h1>

        <div style={cardStyle}>
          <p>
            <span style={highlightText}>Digital Literacy</span> empowers individuals with the skills needed to thrive in a tech-driven world.
            From basic computing to understanding digital platforms, we are committed to enhancing digital access and skills in rural communities.
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={subheadingStyle}>Our Focus Areas</h2>
          <ul style={listStyle}>
            <li><strong>Computer Fundamentals:</strong> Basic computer usage and internet skills.</li>
            <li><strong>Digital Platforms:</strong> Teaching navigation and usage of social media, e-commerce, and digital tools.</li>
            <li><strong>Online Safety:</strong> Equipping students with cyber hygiene practices for secure online activities.</li>
            <li><strong>Mobile Literacy:</strong> Instruction on mobile devices and using apps for communication and productivity.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={subheadingStyle}>Special Programs</h2>
          <ul style={listStyle}>
            <li><strong>Tech Workshops:</strong> Hands-on sessions to increase familiarity with computers and mobile devices.</li>
            <li><strong>Digital Literacy Camps:</strong> Intensive workshops for youth to learn digital tools and platforms.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={subheadingStyle}>Impact So Far</h2>
          <ul style={listStyle}>
            <li><strong>2000+</strong> students taught in the past year.</li>
            <li><strong>50+</strong> villages reached with mobile literacy training.</li>
            <li><strong>200+</strong> women empowered with digital skills.</li>
          </ul>
        </div>

        <div style={{ ...cardStyle, background: '#fde68a', textAlign: 'center' }}>
          <p style={{ fontSize: isMobile ? '1rem' : '1.3rem', fontWeight: 600 }}>
            With digital literacy, we bridge the digital divide and open doors to a brighter future! 💡
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalLiteracy;