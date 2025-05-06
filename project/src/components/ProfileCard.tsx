import React, { useState } from 'react';

interface ProfileCardProps {
  name: string;
  role: string;
  imageUrl: string;
  username: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  imageUrl,
  username,
  description,
}) => {
  const [hovered, setHovered] = useState(false);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '300px',
    height: '300px',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    cursor: 'pointer',
  };

  const imgStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
  };

  const hoverOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(217, 14, 14, 0.85)',
    color: 'white',
    padding: '20px',
    opacity: hovered ? 1 : 0,
    transition: 'opacity 0.4s ease-in-out',
    zIndex: 2,
  };

  const textWrapperStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    background: '#fff',
    padding: '15px',
    zIndex: 1,
  };

  const usernameStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#FF5A22',
    textDecoration: 'none',
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imageUrl} alt={name} style={imgStyle} />
      <div style={hoverOverlayStyle}>
        <h3 style={{ margin: 0, fontSize: '22px' }}>{name}</h3>
        <h4
          style={{
            margin: '10px 0',
            fontSize: '14px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            borderBottom: '1px solid #fff',
            paddingBottom: '8px',
          }}
        >
          {role}
        </h4>
        <p style={{ fontSize: '14px', lineHeight: '18px' }}>{description}</p>
      </div>
      <div style={textWrapperStyle}>
        <strong style={{ fontSize: '18px' }}>{name}</strong>
        <br />
        <a href="#" style={usernameStyle}>
          @{username}
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
