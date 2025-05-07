import { Routes, Route, Link } from 'react-router-dom';
import { BookOpen, Laptop, Mic } from 'lucide-react';
import AksharPrabhavam from '../components/AksharPrabhavam';
import DigitalLiteracy from '../components/Digital-Literacy';
import SpokenEnglish from '../components/SpokenEnglish';

const EducationSection = ({ icon: Icon, title, description, link }: any) => (
  <Link to={link} className="block">
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
      <Icon className="w-12 h-12 text-indigo-600 mb-4" />
      <h3 className="text-xl font-semibold text-indigo-900 mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  </Link>
);

const EducationOverview = () => {
  const sections = [
    {
      icon: BookOpen,
      title: 'Akshar Prabhavam',
      description: 'Empowering foundational education for all.',
      link: '/work/education/akshar-prabhavam',
    },
    {
      icon: Laptop,
      title: 'Digital Literacy',
      description: 'Equipping individuals with essential digital skills.',
      link: '/work/education/digital-literacy',
    },
    {
      icon: Mic,
      title: 'Spoken English',
      description: 'Helping learners improve their English fluency.',
      link: '/work/education/spoken-english',
    }
  ];

  return (
    <div className="py-12 pattern-bg-indigo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-indigo-900 mb-8 text-center">Education Initiatives</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Discover our programs aimed at enhancing education and digital empowerment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <EducationSection key={index} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <Routes>
      <Route index element={<EducationOverview />} />
      <Route path="akshar-prabhavam" element={<AksharPrabhavam />} />
      <Route path="digital-literacy" element={<DigitalLiteracy />} />
      <Route path="spoken-english" element={<SpokenEnglish />} />
    </Routes>
  );
};

export default Education;
