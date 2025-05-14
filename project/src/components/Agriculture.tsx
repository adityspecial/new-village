import { Routes, Route, Link } from 'react-router-dom';
import { Leaf, TreePine, BookOpenCheck } from 'lucide-react';
import FarmerTraining from '../components/Farmer-Traning';
import EkGaon from '../components/Ek-Gaon';
// import SoilHealth from '../components/SoilHealth'; // Uncomment if needed

const AgriSection = ({ icon: Icon, title, description, link }: any) => (
  <Link to={link} className="block">
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
      <Icon className="w-12 h-12 text-green-600 mb-4" />
      <h3 className="text-xl font-semibold text-green-900 mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  </Link>
);

const AgricultureOverview = () => {
  const sections = [
    {
      icon: BookOpenCheck,
      title: 'Farmer Training',
      description:
        'Empowering farmers with modern techniques, organic practices, and on-field training to improve yield, reduce costs, and build climate resilience.',
      link: '/work/agriculture/farmer-training',
    },
    // {
    //   icon: Leaf,
    //   title: 'Soil Health',
    //   description:
    //     'Promoting soil testing, composting, and natural fertilizers to restore fertility and reduce dependence on chemicals.',
    //   link: '/work/agriculture/soil-health',
    // },
    {
      icon: TreePine,
      title: 'Ek Gaon Ek Jangal',
      description:
        'Reviving local ecosystems through community-led afforestation. Each village adopts a green patch—nurtured and protected collectively.',
      link: '/work/agriculture/ek-gaon-ek-jangal',
    },
  ];

  return (
    <div className="min-h-screen px-4 py-16 bg-green-50 text-gray-900 pattern-bg-yellow">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center text-green-800">
          Agriculture & Environment Initiatives
        </h1>
        <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Discover our grassroots programs that uplift farmers and regenerate the environment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <AgriSection key={index} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

const AgriculturePage = () => {
  return (
    <Routes>
      <Route index element={<AgricultureOverview />} />
      <Route path="farmer-training" element={<FarmerTraining />} />
      {/* <Route path="soil-health" element={<SoilHealth />} /> */}
      <Route path="ek-gaon-ek-jangal" element={<EkGaon />} />
    </Routes>
  );
};

export default AgriculturePage;
