import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Trophy } from 'lucide-react'; // Import relevant icons

const GramSiri = () => {
  const healthPrograms = [
    {
      title: 'Pada Pooja',
      description: 'Instilling humility and respect in children toward parents and elders',
      link: '/work/gramsiri/Padapooja',
      icon: <Handshake className="w-10 h-10 text-amber-600 mb-4 mx-auto" />,
    },
    {
      title: 'Kreedotsava',
      description: 'Unique village-level sports festival initiated by Karnataka Incubation Foundation (KIF).',
      link: '/work/gramsiri/kreedotsava',
      icon: <Trophy className="w-10 h-10 text-amber-600 mb-4 mx-auto" />,
    },
  ];

  return (
    <div className="py-12 pattern-bg-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">Gram Siri</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl text-center mx-auto">
          Gram Siri is aimed at enhancing the lives of rural children and instill the virtues of humility and community building within them.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {healthPrograms.map((program, index) => (
            <Link
              to={program.link}
              key={index}
              className="w-full sm:w-[300px] bg-white border border-amber-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-amber-100"
            >
              {program.icon}
              <h3 className="text-xl font-semibold text-amber-800 mb-2 text-center">{program.title}</h3>
              <p className="text-gray-700 text-center">{program.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GramSiri;