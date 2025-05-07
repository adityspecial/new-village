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
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative h-[500px]">
        {testimonials.map((t, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64">
                  <img src={t.image} alt={t.author} className="w-full h-full object-top object-contain" />
                </div>
                <div className="p-8">
                  <blockquote className="text-lg text-gray-700 mb-4">"{t.content}"</blockquote>
                  <p className="font-semibold text-xl text-gray-900">{t.author}</p>
                  <p className="text-indigo-600">{t.role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white text-gray-800 p-2 rounded-full shadow">
        <ChevronLeft />
      </button>
      <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white text-gray-800 p-2 rounded-full shadow">
        <ChevronRight />
      </button>
    </div>
  );
};

export default TestimonialCarousel;