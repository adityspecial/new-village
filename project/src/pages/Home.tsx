import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Programs from '../components/Programs';
import Statistics from '../components/Statistics';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <ImageSlider />
      <Programs />
      <Statistics />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;