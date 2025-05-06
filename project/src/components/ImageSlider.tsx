import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: '/images/Navbar/Slider1.jpg',
    title: 'Traditional Farming',
    description: 'Supporting sustainable agricultural practices'
  },
  {
    image: '/images/Navbar/Slider6.jpg',
    title: 'Rural Education',
    description: 'Empowering through knowledge'
  },
  {
    image: '/images/Navbar/Slider3.jpg',
    title: 'Craft Heritage',
    description: 'Preserving traditional craftsmanship'
  },
  {
    image: '/images/Navbar/Slider9.jpg',
    title: 'Green Villages',
    description: 'Protecting nature with community efforts'
  }
];

const ImageSlider = () => {
  return (
    <div className="w-full">
      {/* Slider */}
      <div className="relative w-full h-[500px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl max-w-2xl">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Poster */}
      
    </div>
  );
};

export default ImageSlider;
