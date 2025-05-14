import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, HeartHandshake } from 'lucide-react';
import { FaEye, FaDownload } from "react-icons/fa";

const AboutCard = ({ icon: Icon, title, description, link }: any) => (
  <Link to={link} className="block h-full">
    <div className="h-full flex flex-col bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Icon className="w-12 h-12 text-amber-600 mb-4" />
      <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  </Link>
);

const AboutUs = () => {
  const aboutData = [
    {
      icon: BookOpen,
      title: 'Our Story',
      description:
        'The start of a journey to empower rural communities through education and innovation.',
      link: '/about/ourstory',
    },
    {
      icon: Users,
      title: 'The Team',
      description:
        'A team of passionate individuals dedicated to transforming rural education through innovation and empathy.',
      link: '/about/team',
    },
    {
      icon: HeartHandshake,
      title: 'Model Village',
      description:
        'Inclusivity, sustainability, and community-first approach drive in everything we do.',
      link: '/about/modelvillage',
    },
    {
      icon: FaDownload ,
      title: 'Financial Reports',
      description:
        'A complete annual report of our financials, including income and expenses.',
      link: '/about/reports',
    },
    
  ];

  return (
    <div className="py-12 bg-amber-50 pattern-bg-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">About Us</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Learn more about our identity, our mission, and the values that shape our work in rural India.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.map((item, index) => (
            <AboutCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
