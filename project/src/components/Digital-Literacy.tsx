import React from 'react';

const DigitalLiteracy: React.FC = () => {
  const isMobile = window.innerWidth <= 768;

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

  const sectionStyle: React.CSSProperties = {
    background: '#fffefc',
    padding: '3rem 1rem',
    fontFamily: 'Segoe UI, sans-serif',
    lineHeight: '1.7',
    color: '#3b2f2f',
    maxWidth: '1000px',
    margin: 'auto',
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
    <div style={{ background: '#fffefc', minHeight: '100vh' }}>
      {/* Image Gallery */}
      <div style={{ paddingTop: '2rem' }}>
        <div style={galleryStyle}>
          {[
            'https://images.unsplash.com/photo-1455368109333-ebc686ad6c58?q=80&w=1470&auto=format&fit=crop',
            'https://plus.unsplash.com/premium_photo-1664528201657-378dbf6a4a91?q=80&w=1472&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1516651000622-7f32fe80a57a?q=80&w=1470&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1435348773030-a1d74f568bc2?q=80&w=1470&auto=format&fit=crop',
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              style={imageStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>

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
            <li><strong>💻 Computer Fundamentals:</strong> Basic computer usage and internet skills.</li>
            <li><strong>🌐 Digital Platforms:</strong> Teaching navigation and usage of social media, e-commerce, and digital tools.</li>
            <li><strong>🔒 Online Safety:</strong> Equipping students with cyber hygiene practices for secure online activities.</li>
            <li><strong>📱 Mobile Literacy:</strong> Instruction on mobile devices and using apps for communication and productivity.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={subheadingStyle}>Special Programs</h2>
          <ul style={listStyle}>
            <li><strong>🔧 Tech Workshops:</strong> Hands-on sessions to increase familiarity with computers and mobile devices.</li>
            <li><strong>📅 Digital Literacy Camps:</strong> Intensive workshops for youth to learn digital tools and platforms.</li>
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
