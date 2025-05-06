import React from 'react';

const SpokenEnglish: React.FC = () => {
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
            <li><strong>🗣️ Conversational Practice:</strong> Interactive sessions for real-life conversations.</li>
            <li><strong>📚 Pronunciation Techniques:</strong> Mastering the art of speaking clearly and correctly.</li>
            <li><strong>📑 Grammar Lessons:</strong> Strengthening the foundations of English grammar.</li>
            <li><strong>🎤 Public Speaking:</strong> Building confidence for speeches and presentations.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={subheadingStyle}>Success Stories</h2>
          <ul style={listStyle}>
            <li><strong>🏆 Achieved fluency:</strong> 80% of participants have reached conversational fluency within 6 months.</li>
            <li><strong>🎓 Job Readiness:</strong> 65% of our students have found better job opportunities after the course.</li>
            <li><strong>🌍 International Recognition:</strong> Students are now able to communicate confidently on a global scale.</li>
          </ul>
        </div>

        <div style={{ ...cardStyle, background: '#fde68a', textAlign: 'center' }}>
          <p style={{ fontSize: isMobile ? '1rem' : '1.3rem', fontWeight: 600 }}>
            Spoken English is the key to unlocking limitless opportunities in your personal and professional life! 💼
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpokenEnglish;
