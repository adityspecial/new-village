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
      facebook: 'https://www.facebook.com/share/16Bruqt3qM/',
      twitter: 'https://x.com/BhusareAshwin?t=pMFyKDl_Oag9fTFyfl1l1g&s=09',
      instagram: 'https://www.instagram.com/ashwin.bhusare/profilecard/?igsh=c2dzanM2Zjh5enRh',
      linkedin: 'https://www.linkedin.com/in/ashwin-bhusare-548ab111/'
    }
  },
  {
    name: 'Vinayak Sambayanamath',
    role: 'Managing Director',
    imageUrl: '/images/About/Team/Vinayak.jpg',
    username: 'VinayakSambayanamath',
    description: 'Vinayak Sambayanamath has dedicated the past eight years to transformative social service initiatives, focusing on the holistic development of students in rural areas, particularly in education, health, and cultural enrichment. Actively collaborating with various organizations, he has played a crucial role in rural development, school programs, health initiatives, and educational projects, making a significant impact on the communities he serves.Passionate about fostering self-reliance and personal well-being, Vinayak has also been deeply involved in personal counseling, helping individuals overcome challenges and achieve growth. His unwavering commitment to social welfare reflects his dedication to empowering individuals and strengthening communities. Through his tireless efforts, Vinayak continues to be a driving force in creating positive change, making him a valuable asset in the realm of social service and community development.',
    socialLinks: {
      facebook: 'https://www.facebook.com/share/1AhDLwpMjw/',
      twitter: 'https://twitter.com/',
      instagram: 'https://www.instagram.com/vinayak_sambayanamath.03?igsh=MXd4cGV6cGsxb3hqdg==',
      linkedin: 'https://www.linkedin.com/in/vinayak-s-a526bb289?trk=contact-info'
    }
  },
  // Add more team members here with the same structure
];

const TeamPage: React.FC = () => {
  return (
    <div className="pattern-bg-yellow min-h-screen py-12 bg-amber-50">
      <h1 className="text-center text-black font-bold text-3xl mb-12">Our Team</h1>

      <div className="flex flex-wrap gap-8 justify-center px-5">
        {teamMembers.map((member, idx) => (
          <ProfileCard key={idx} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;

