import React from 'react';
import ProfileCard from './ProfileCard';

const teamMembers = [
  {
    name: 'Ashwin Bhusare',
    role: 'Director',
    imageUrl: '/images/About/Team/Ashwin.jpg',
    username: 'AshwinBhusare',
    description: 'Ashwin Bhusare, a dedicated software engineer from the prestigious Sri Jayachamarajendra College of Engineering (SJCE) in Mysuru, Karnataka, left a thriving tech career to pursue his passion for rural development. Determined to address the challenges faced by rural communities, he embarked on a transformative journey of service and innovation. With extensive experience in education, health, environment, and agriculture, he adopts a holistic approach to sustainable development, ensuring that grassroots initiatives not only provide immediate support but also foster long-term resilience and self-sufficiency.Beyond his strategic initiatives, Ashwin is an inspiring leader who motivates young individuals to actively engage in rural development, instilling in them a deep sense of responsibility and commitment. Living a simple life, he remains deeply connected with the people he serves, navigating rural challenges with empathy and dedication. More than just a software engineer turned social worker, Ashwin is a visionary committed to building a sustainable future for rural India, inspiring others to blend technical expertise with a heartfelt commitment to social change.',
    socialLinks: {
      facebook: 'https://facebook.com/ashwin',
      twitter: 'https://twitter.com/ashwin',
      instagram: 'https://instagram.com/ashwin',
      linkedin: 'https://linkedin.com/in/ashwin'
    }
  },
  {
    name: 'Vinayak Sambayanamath',
    role: 'Managing Director',
    imageUrl: '/images/About/Team/Vinayak.jpg',
    username: 'VinayakSambayanamath',
    description: 'Vinayak Sambayanamath has dedicated the past eight years to transformative social service initiatives, focusing on the holistic development of students in rural areas, particularly in education, health, and cultural enrichment. Actively collaborating with various organizations, he has played a crucial role in rural development, school programs, health initiatives, and educational projects, making a significant impact on the communities he serves.Passionate about fostering self-reliance and personal well-being, Vinayak has also been deeply involved in personal counseling, helping individuals overcome challenges and achieve growth. His unwavering commitment to social welfare reflects his dedication to empowering individuals and strengthening communities. Through his tireless efforts, Vinayak continues to be a driving force in creating positive change, making him a valuable asset in the realm of social service and community development.',
    socialLinks: {
      facebook: 'https://facebook.com/vinayak',
      twitter: 'https://twitter.com/ashwin',
      instagram: 'https://instagram.com/ashwin',
      linkedin: 'https://linkedin.com/in/ashwin'
    }
  },
  // Add more team members here with the same structure
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
        Meet the Core Committee
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
