import ImageSlider from '../components/ImageSlider';
import Programs from '../components/Programs';
import Statistics from '../components/Statistics';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';
import Poster from '../components/Poster';

const Home = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <ImageSlider />
      <Poster />
      <Programs />
      <Statistics />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;