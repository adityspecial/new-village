import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Newspaper, Star, FileText, Image, Share } from 'lucide-react';

const ImpactSection = ({ icon: Icon, title, description, link }: any) => (
  <Link to={link} className="block">
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Icon className="w-12 h-12 text-amber-600 mb-4" />
      <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Link>
);

const ImpactOverview = () => {
  const sections = [
    // {
    //   icon: Newspaper,
    //   title: 'Newsletter',
    //   description: 'Stay updated with our latest news and achievements.',
    //   link: '/impact/newsletter'
    // },
    {
      icon: Star,
      title: 'Success Stories',
      description: 'Real stories of transformation from our communities.',
      link: '/impact/stories'
    },
    // {
    //   icon: FileText,
    //   title: 'Reports',
    //   description: 'Detailed reports of our activities and impact.',
    //   link: '/impact/reports'
    // },
    {
      icon: Image,
      title: 'Gallery',
      description: 'Visual documentation of our work and achievements.',
      link: '/impact/gallery'
    },
    {
      icon: Share,
      title: 'Share Experience',
      description: 'Share your experience with our initiatives.',
      link: '/impact/share'
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">Our Impact</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Discover how our initiatives are making a real difference in rural communities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <ImpactSection key={index} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Impact = () => {
  return (
    <Routes>
      <Route index element={<ImpactOverview />} />
      {/* Add routes for other sections */}
    </Routes>
  );
};

export default Impact;