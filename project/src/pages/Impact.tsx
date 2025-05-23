import { Routes, Route, Link } from 'react-router-dom';
import { Star, Image, Share, ActivitySquare } from 'lucide-react';

const ImpactSection = ({ icon: Icon, title, description, link }: any) => (
  <Link to={link} className="block h-full">
    <div className="h-full flex flex-col bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Icon className="w-12 h-12 text-amber-600 mb-4" />
      <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  </Link>
);

const ImpactOverview = () => {
  const sections = [
    {
      icon: Star,
      title: 'Success Stories',
      description: 'Real stories of transformation from our communities.',
      link: '/impact/stories'
    },
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
    },
    {
      icon: ActivitySquare,
      title: 'Activities',
      description: 'Stay up to date on what is happens at KIF',
      link: '/impact/activities'
    }

  ];

  return (
    <div className="py-12 bg-amber-100 pattern-bg-yellow">
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
