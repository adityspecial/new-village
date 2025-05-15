import React from 'react';

const HealthPage = () => {
  const healthPrograms = [
    {
      title: 'Hygiene Campaign',
      description: 'Spreading awareness about personal hygiene, handwashing, and cleanliness through workshops in rural communities.',
      link: '/work/health/hygiene-campaign',
    },
    {
      title: 'Yoga',
      description: 'Encouraging daily wellness through yoga sessions that promote mental and physical well-being.',
      link: '/work/health/yoga',
    },
  ];

  return (
    <div className="py-12 pattern-bg-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">Health Programs</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl text-center mx-auto">
          Our health initiatives focus on making basic healthcare accessible to all, improving the quality of life
          through awareness and infrastructure in rural communities.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {healthPrograms.map((program, index) => (
            <a
              href={program.link}
              key={index}
              className="w-full sm:w-[300px] bg-white border border-amber-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-amber-100"
            >
              <h3 className="text-xl font-semibold text-amber-800 mb-2 text-center">{program.title}</h3>
              <p className="text-gray-700 text-center">{program.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthPage;