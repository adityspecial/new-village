import React from 'react';

const Poster = () => {
  return (
    <div className="w-full bg-[#f7f7f7] py-8 md:pb-12 lg:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* KIF Description Block */}
        <div className="bg-white bg-opacity-80 rounded-2xl shadow-xl p-6 mb-6 border border-yellow-300">
          <p className="text-base sm:text-lg text-gray-800 text-justify">
            <b>Karnataka Incubation Foundation (KIF)</b> is a non-profit organization working at the grassroots level to strengthen rural communities through education, agriculture, livelihood, and environmental programs.
            We adopt a systems approach and process-oriented methods to ensure sustainable, scalable impact through community participation and local leadership.
            KIF empowers villages to become self-reliant by addressing real needs with practical, people-driven solutions, aiming to build model villages across rural Karnataka.
          </p>
        </div>

        {/* Poster Image */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl border border-yellow-300">
          <img
            src="/images/Navbar/poster.png"
            alt="Village Awareness Poster"
            className="w-full h-auto object-contain 
                       max-h-[160px] sm:max-h-[200px] md:max-h-[240px] lg:max-h-[260px] xl:max-h-[300px]"
            loading="lazy"
          />
        </div>

      </div>
    </div>
  );
};

export default Poster;
