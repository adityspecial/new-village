import React, { useState, useRef, useEffect } from 'react';

const ModelVillage: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const lightboxRef = useRef<HTMLDivElement | null>(null);

  const images = [
    { thumb: '/images/ModelVillage/MV1.jpg', full: '/images/ModelVillage/MV1.jpg' },
    { thumb: '/images/ModelVillage/MV2.jpg', full: '/images/ModelVillage/MV2.jpg' },
    { thumb: '/images/ModelVillage/MV3.jpg', full: '/images/ModelVillage/MV3.jpg' },
    { thumb: '/images/ModelVillage/MV4.jpg', full: '/images/ModelVillage/MV4.jpg' },
    { thumb: '/images/ModelVillage/MV5.jpg', full: '/images/ModelVillage/MV5.jpg' },
  ];

  const processSteps = [
    {
      title: "Formation of Gram Samiti",
      description:
        "A Gram Samiti (village committee) is formed with local representatives to ensure community participation in development initiatives. This committee serves as the backbone for decision-making and execution.",
    },
    {
      title: "Community Engagement & Need Identification",
      description:
        "Regular discussions, surveys, and participatory rural appraisal (PRA) methods help identify the real needs of the community. This ensures that initiatives align with local aspirations and challenges.",
    },
    {
      title: "Capacity Building & Training",
      description:
        "Skill development programs, awareness sessions, and leadership training empower villagers with knowledge and tools to drive change effectively.",
    },
    {
      title: "Participatory Implementation & Execution",
      description:
        "Based on identified needs, planned interventions are executed in collaboration with government schemes, NGOs, and local resources. The Gram Samiti plays a key role in mobilization and resource utilization.",
    },
    {
      title: "Participatory Monitoring, Feedback & Course Correction",
      description:
        "Continuous assessment and community feedback help refine strategies, address challenges, and enhance impact. Regular meetings ensure transparency and accountability.",
    },
    {
      title: "Self-Sustaining & Empowered Communities",
      description:
        "Over time, the village develops self-reliant systems, reducing dependency on external support. Empowered communities take ownership of their progress, ensuring long-term sustainability.",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (lightboxRef.current && !lightboxRef.current.contains(event.target as Node)) {
        setIsLightboxOpen(false);
      }
    };

    if (isLightboxOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLightboxOpen]);

  return (
    <div className="min-h-screen bg-amber-50 pattern-bg-yellow py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-900 text-center mb-12">Model Village</h1>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              We envision thriving village communities that maintain their cultural heritage while embracing sustainable progress and economic
              opportunities.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To empower rural communities through education, sustainable agriculture, and preservation of traditional crafts while creating economic
              opportunities for villagers.
            </p>
          </div>
        </div>

        {/* Process Flow Timeline */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-amber-800 text-center mb-16">Our Approach</h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-amber-300 to-amber-600" />
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex justify-center mb-24 last:mb-0">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10">
                  {index + 1}
                </div>

                <div
                  className={`w-full md:w-1/2 p-6 transform transition-all duration-300 hover:scale-105 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div
                    className={`bg-white rounded-2xl shadow-xl p-8 relative ${
                      index % 2 === 0 ? 'md:float-right' : 'md:float-left'
                    }`}
                  >
                    <div
                      className={`absolute top-8 ${
                        index % 2 === 0 ? '-left-12' : '-right-12'
                      } w-24 h-24 opacity-20 bg-amber-300 rounded-full blur-lg`}
                    />
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-amber-800 mb-3">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>

                    {index < processSteps.length - 1 && (
                      <div
                        className={`hidden md:block absolute ${
                          index % 2 === 0 ? '-right-20' : '-left-20'
                        } top-1/2 w-16 h-1 bg-amber-400`}
                      >
                        <div
                          className={`absolute top-0 ${
                            index % 2 === 0 ? 'right-0' : 'left-0'
                          } w-4 h-4 border-4 border-amber-600 transform rotate-45 ${
                            index % 2 === 0 ? '-translate-y-1.5 -translate-x-2' : '-translate-y-1.5 translate-x-2'
                          }`}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mb-16 max-w-7xl">
        <h2 className="text-3xl font-bold text-amber-800 text-center mb-12">The Village of Tomorrow</h2>
        <div
          className="
            grid 
            grid-cols-1 
            xs:grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-5 
            gap-6 
            justify-center
          "
          style={{ maxWidth: '100%' }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="cursor-pointer transform transition-transform duration-300 hover:scale-105 flex justify-center"
              onClick={() => {
                setPhotoIndex(index);
                setIsLightboxOpen(true);
              }}
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-md">
                <img src={img.thumb} alt={`Model Village ${index + 1}`} className="w-full h-full object-cover" draggable={false} />
              </div>
            </div>
          ))}
        </div>

        {/* Custom Lightbox */}
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4 sm:p-6">
            <div
              ref={lightboxRef}
              className="relative max-w-full max-h-[90vh] w-full sm:max-w-4xl rounded-lg overflow-hidden shadow-2xl bg-black"
            >
              <button
                className="absolute top-2 right-2 text-white text-5xl sm:text-6xl hover:text-amber-400 transition-colors z-30"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close"
              >
                ×
              </button>

              <img
                src={images[photoIndex].full}
                alt={`Enlarged View ${photoIndex + 1}`}
                className="max-h-[90vh] w-auto max-w-full mx-auto block"
                draggable={false}
              />

              <button
                className="absolute left-1 top-1/2 -translate-y-1/2 text-white text-7xl sm:text-9xl hover:text-amber-400 transition-colors z-30 px-2"
                onClick={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                aria-label="Previous Image"
              >
                ‹
              </button>
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2 text-white text-7xl sm:text-9xl hover:text-amber-400 transition-colors z-30 px-2"
                onClick={() => setPhotoIndex((photoIndex + 1) % images.length)}
                aria-label="Next Image"
              >
                ›
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-lg bg-black/40 px-4 py-2 rounded-full select-none pointer-events-none">
                {photoIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelVillage;
