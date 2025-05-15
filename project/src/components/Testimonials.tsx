import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: 'Varshini Hittalmani',
    role: 'Student',
    image: '/public/Images/SuccessStories/7 (1).jpeg',
    quote:
      "I am Varshini, a girl from Javoor, and my childhood was filled with tragedy. My father, due to personal reasons, took my mother's life and left us shattered. Despite these hardships, the support from Akshar Kendra has been a beacon of hope in my life...",
    link: 'impact/stories',
  },
  {
    id: 2,
    name: 'Vatsala Madiwalar',
    role: 'Mentor',
    image: '/public/Images/SuccessStories/2.jpg',
    quote:
      "Before I became a mentor at Akshar Kendra, I believed that parents mainly focused on their children’s exam results. Given Akshar Kendra’s emphasis on value-based education, I wasn’t sure if parents would buy into it. But seeing the transformation in the children has been incredible...",
    link: 'impact/stories',
  },
  {
    id: 3,
    name: 'Prasanna Kumar',
    role: 'Volunteer',
    image: '/public/images/Volunteers/Prasanna.jpg',
    quote:
      "The educational initiatives have brought modern teaching methods to our village school. Our students now have access to quality education while staying connected to their roots. Volunteering here has been a rewarding experience.",
    link: 'get-involved/volunteer',
  },
];

const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-amber-100 pattern-bg-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
          Voices from the Village
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl shadow-lg p-6 relative flex flex-col max-h-[24rem] min-h-[24rem]"
            >
              <div>
                <div className="absolute -top-4 left-6 bg-amber-50 rounded-full p-2">
                  <Quote className="w-6 h-6 text-amber-500" />
                </div>

                <div className="flex items-center mb-6 mt-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-amber-500"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-amber-900">{t.name}</h3>
                    <p className="text-amber-700">{t.role}</p>
                  </div>
                </div>

                {/* Scrollable quote container */}
                <div
                  className="overflow-y-auto pr-2"
                  style={{
                    maxHeight: '8.5rem', // approx 136px for scroll area
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#c05621 #fef3c7',
                  }}
                >
                  <p className="text-gray-600 italic leading-relaxed">{`"${t.quote}"`}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/${t.link}`);
                }}
                className="mt-auto flex items-center gap-2 text-amber-600 hover:text-amber-800 transition-colors duration-300"
              >
                Read full story <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;