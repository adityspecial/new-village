import { Routes, Route, Link } from 'react-router-dom';
import { FileText, Video } from 'lucide-react';
import Videos from '../components/Videos';
import Publications from '../components/Publications';

const ResourceSection = ({ icon: Icon, title, description, link }: any) => (
  <Link to={link} className="block">
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
      <Icon className="w-12 h-12 text-amber-600 mb-4" />
      <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  </Link>
);

const ResourcesOverview = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Publications',
      description: 'Access our reports and publications.',
      link: '/resources/publications'
    },
    {
      icon: Video,
      title: 'Videos',
      description: 'Watch videos about our work and impact.',
      link: '/resources/videos'
    }
  ];

  return (
    <div className="py-12 pattern-bg-yellow bg-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">Resources</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Explore our collection of publications and multimedia resources.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <ResourceSection key={index} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Resources = () => {
  return (
    <Routes>
      <Route index element={<ResourcesOverview />} />
      <Route path="videos" element={<Videos />} />
      <Route path="publications" element={<Publications />} />
    </Routes>
  );
};

export default Resources;