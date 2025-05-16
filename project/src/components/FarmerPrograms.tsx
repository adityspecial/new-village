import React from 'react';
import { Users, Sprout, BookOpen } from 'lucide-react';

export const FarmersPrograms = () => {
  const images = [
    {
      url: "/images/Farmers-Field-School/FFS1.jpg",
      alt: "Students learning about sustainable farming"
    },
    {
      url: "/images/Farmers-Field-School/FFS2.jpg",
      alt: "Organic farming demonstration"
    },
    {
      url: "/images/Farmers-Field-School/FFS3.png",
      alt: "Students interacting with farmers"
    }
  ];

  return (
    <div className="py-16 bg-green-50 pattern-bg-yellow">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-900 mb-4">
            Farmers Field School
          </h1>
          <p className="text-2xl text-green-700">
            Nurturing Young Minds through Real-World Agriculture
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="space-y-16">
          {/* Introduction */}
          <section className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Karnataka Incubation Foundation (KIF) strongly believes that the foundation of a self-reliant 
              and sustainable future lies in agriculture. To build awareness and interest among the next 
              generation, KIF has introduced the Farmers' School Field program — an innovative learning 
              initiative designed to connect children with progressive farming practices.
            </p>
          </section>

          {/* Learning Beyond the Classroom */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-black border-1">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-green-800 mb-4">Learning Beyond the Classroom</h2>
                <p className="text-gray-700 leading-relaxed">
                  Under this initiative, students are taken to the fields of progressive farmers who have 
                  adopted modern, organic, and sustainable farming techniques. These farmers act as mentors 
                  and role models for the young visitors. The visits offer students a valuable opportunity 
                  to see, touch, and experience the real-life process of food production — something that 
                  textbooks alone cannot provide.
                </p>
              </div>
            </div>
          </section>

          {/* Building Respect and Career Interest */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-black border-1">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-green-800 mb-4">Building Respect and Career Interest</h2>
                <p className="text-gray-700 leading-relaxed">
                  A key goal of the Farmers' School Field program is to help children develop respect for 
                  farmers and farming. By seeing the effort, skill, and innovation involved in agriculture, 
                  students begin to view it as a dignified and valuable career. They also gain a better 
                  understanding of food systems, sustainability, and the essential role farmers play in society.
                </p>
              </div>
            </div>
          </section>

          {/* Impact and Future Vision */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-black border-1">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Sprout className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-green-800 mb-4">Impact and Future Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Farmers' School Field initiative has received overwhelmingly positive feedback from 
                  both students and educators. Children return from these visits with new enthusiasm, 
                  questions, and a deep sense of appreciation for the farming community.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};