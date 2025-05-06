import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  role: string;
  imageUrl: string;
  username: string;
  description: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  imageUrl,
  username,
  description,
  socialLinks,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardStyle: React.CSSProperties = {
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

  const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: isModalOpen ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  };

  const modalContentStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    width: '80%',
    maxWidth: '900px',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
  };

  const modalImgStyle: React.CSSProperties = {
    width: '50%',
    objectFit: 'cover',
  };

  const modalTextStyle: React.CSSProperties = {
    padding: '30px',
    width: '50%',
    overflowY: 'auto',
  };

  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '20px',
    right: '30px',
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#fff',
    cursor: 'pointer',
    zIndex: 10000,
  };

  return (
    <>
      <div style={cardStyle} onClick={() => setIsModalOpen(true)}>
        <img src={imageUrl} alt={name} style={imgStyle} />
        <div style={textWrapperStyle}>
          <strong style={{ fontSize: '18px' }}>{name}</strong>
          <br />
          <h4 style={{ color: '#FF5A22', marginTop: 0 }}>{role}</h4>
        </div>
      </div>

      {isModalOpen && (
        <div
          style={modalOverlayStyle}
          onClick={() => setIsModalOpen(false)} // Closes when clicking outside
        >
          <div
            style={modalContentStyle}
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          >
            <div style={closeButtonStyle} onClick={() => setIsModalOpen(false)}>
              &times;
            </div>
            <img src={imageUrl} alt={name} style={modalImgStyle} />
            <div style={modalTextStyle}>
              <h2>{name}</h2>
              <h4 style={{ color: '#FF5A22', marginTop: 0 }}>{role}</h4>
              <p style={{ fontSize: '14px', lineHeight: '22px' }}>{description}</p>
              <p style={{ color: '#999' }}>@{username}</p>

              {/* Social Media Links */}
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
