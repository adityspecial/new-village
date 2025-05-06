import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Book, Plane as Plant, Leaf, Heart, Briefcase, Home, Users, MapPin } from 'lucide-react';

const WorkSection = ({ icon: Icon, title, description, link }: any) => (
  <Link to={link} className="block">
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Icon className="w-12 h-12 text-amber-600 mb-4" />
      <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Link>
);

const WorkOverview = () => {
  const sections = [
    {
      icon: Book,
      title: 'Education',
      description: 'Empowering through knowledge with digital literacy and spoken English programs.',
      link: '/work/education'
    },
    {
      icon: Plant,
      title: 'Agriculture',
      description: 'Supporting sustainable farming practices and farmer training initiatives.',
      link: '/work/agriculture'
    },
    {
      icon: Leaf,
      title: 'Environment',
      description: 'Promoting environmental conservation through Ek Gaon - Ek Jangal.',
      link: '/work/environment'
    },
    {
      icon: Heart,
      title: 'Health',
      description: 'Improving rural healthcare access through the Drishti program.',
      link: '/work/health'
    },
    {
      icon: Briefcase,
      title: 'Livelihood',
      description: 'Creating sustainable income opportunities for rural communities.',
      link: '/work/livelihood'
    },
    {
      icon: Home,
      title: 'Gram Siri',
      description: 'Comprehensive village development program.',
      link: '/work/gram-siri'
    },
    {
      icon: Users,
      title: 'KIF Chapters',
      description: 'Our network of local chapters making a difference.',
      link: '/work/chapters'
    },
    {
      icon: MapPin,
      title: 'Adopted Villages',
      description: 'Villages under our development program.',
      link: '/work/villages'
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">Our Work</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          We work across multiple domains to create sustainable impact in rural communities through
          various programs and initiatives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <WorkSection key={index} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Education = () => (
  <div className="py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-amber-900 mb-6">Education Programs</h2>
      {/* Add education content */}
    </div>
  </div>
);

// Similar components for other sections...

const Work = () => {
  return (
    <Routes>
      <Route index element={<WorkOverview />} />
      <Route path="education" element={<Education />} />
      {/* Add routes for other sections */}
    </Routes>
  );
};

export default Work;