import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1513977055326-8ae6272d90a7',
    title: 'Traditional Farming',
    description: 'Supporting sustainable agricultural practices'
  },
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c',
    title: 'Rural Education',
    description: 'Empowering through knowledge'
  },
  {
    image: 'https://images.unsplash.com/photo-1604715892639-61d265a76ce6',
    title: 'Craft Heritage',
    description: 'Preserving traditional craftsmanship'
  }
];

const ImageSlider = () => {
  return (
    <div className="w-full h-[500px] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
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
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;