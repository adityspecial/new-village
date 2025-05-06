// pages/team.tsx

import React from 'react';
import ProfileCard from '../components/ProfileCard';

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Developer',
    imageUrl: 'https://i.imgur.com/SkFZNy4.jpg',
    username: 'JaneDoe',
    description:
      'Nulla rhoncus orci sed odio euismod vestibulum. Praesent porta aliquet nulla, ut mattis velit rhoncus.',
  },
  {
    name: 'John Smith',
    role: 'Designer',
    imageUrl: 'https://i.imgur.com/SkFZNy4.jpg',
    username: 'JohnSmith',
    description:
      'Aenean suscipit quam et turpis interdum, nec posuere nulla facilisis. Proin eu interdum erat.',
  },
  {
    name: 'John Smith',
    role: 'Designer',
    imageUrl: 'https://i.imgur.com/SkFZNy4.jpg',
    username: 'JohnSmith',
    description:
      'Aenean suscipit quam et turpis interdum, nec posuere nulla facilisis. Proin eu interdum erat.',
  },
  {
    name: 'John Smith',
    role: 'Designer',
    imageUrl: 'https://i.imgur.com/SkFZNy4.jpg',
    username: 'JohnSmith',
    description:
      'Aenean suscipit quam et turpis interdum, nec posuere nulla facilisis. Proin eu interdum erat.',
  },
];

const TeamPage: React.FC = () => {
  return (
    <div style={{ background: '#485b6e', minHeight: '100vh', padding: '50px 0' }}>
      <h1
        style={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.6)',
          fontFamily: '"Open Sans", sans-serif',
          fontWeight: 300,
        }}
      >
        Our Team
      </h1>
      <h2
        style={{
          color: '#2c3e52',
          fontFamily: '"Open Sans", sans-serif',
          fontSize: '14px',
          textAlign: 'center',
          fontWeight: 700,
          marginBottom: '50px',
        }}
      >
        Meet the Developers
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
          padding: '0 20px',
        }}
      >
        {teamMembers.map((member, idx) => (
          <ProfileCard key={idx} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
