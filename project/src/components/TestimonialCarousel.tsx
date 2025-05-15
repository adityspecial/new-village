import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image: string;
}

interface CarouselProps {
  testimonials: TestimonialProps[];
}

const TestimonialCarousel: React.FC<CarouselProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goToPrevious = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      {/* Sliding container */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {testimonials.map((t, idx) => (
          <div key={idx} className="min-w-full p-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-64 p-4">
                <img src={t.image} alt={t.author} className="w-full h-full object-top object-contain" />
              </div>
              <div className="p-8 max-h-[300px] overflow-y-auto">
                <blockquote className="text-lg text-gray-700 mb-4">"{t.content}"</blockquote>
                <p className="font-semibold text-xl text-gray-900">{t.author}</p>
                <p className="text-indigo-600">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white text-gray-800 p-2 rounded-full shadow"
        aria-label="Previous testimonial"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white text-gray-800 p-2 rounded-full shadow"
        aria-label="Next testimonial"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export const testimonials: TestimonialProps[] = [
  {
    content: `As an Agri-Business Management student, I’ve been volunteering with the Karnataka Incubation Foundation for nearly two years. During this time, I’ve contributed to rural development and farmer welfare initiatives, gaining hands-on experience with grassroots challenges. This journey has deepened my passion for agriculture and strengthened my commitment to creating a meaningful impact in the sector.`,
    author: 'Prasannakumar P. Shiddagoudar',
    role: '3rd Year Agri-Business Management, University of Agricultural Sciences, Dharwad',
    image: '/images/volunteers/Prasanna.jpg',
  },
  {
    content: `I was fortunate to be part of the team conducting training sessions for farmers, aimed at introducing them to new, sustainable farming techniques. The training covered everything from pest management to crop rotation. Through these sessions, farmers learned how to enhance their crop yields and adopt more sustainable methods. Knowing that my efforts directly contributed to improving their productivity and long-term practices was incredibly rewarding.`,
    author: 'Rohit Kotagi',
    role: 'B.Sc Hons agriculture, University of Agricultural Sciences, Dharwad',
    image: '/images/volunteers/Rohit.jpg',
  },
  {
    content: `As a volunteer with KIF, my main responsibility was to connect local farmers directly with customers, eliminating the need for middlemen. This initiative was crucial in ensuring farmers received fair prices for their produce and could build lasting, trust-based relationships with buyers. The direct connections I helped establish not only increased farmers' income but also improved their overall market access. It felt truly fulfilling to contribute to a model that supports farmer self-reliance and economic empowerment.`,
    author: 'Suraj Naste',
    role: '3rd Year Agri-Business Management, University of Agricultural Sciences, Dharwad',
    image: '/images/volunteers/Suraj.jpg',
  },
];

export default TestimonialCarousel;