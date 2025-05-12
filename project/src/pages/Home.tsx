import ImageSlider from '../components/ImageSlider';
import Programs from '../components/Programs';
import Statistics from '../components/Statistics';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <ImageSlider />

      <div className="bg-texture py-12 bg-amber-100 pattern-bg-yellow">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white bg-opacity-80 rounded-2xl shadow-xl p-6 transition-transform duration-300 hover:scale-[1.02] border border-yellow-300">
            <p className="text-lg text-gray-800">
              Karnataka Incubation Foundation (KIF) is a non-profit organization working at the grassroots level to strengthen rural communities through education, agriculture, livelihood, and environmental programs.
              We adopt a systems approach and process-oriented methods to ensure sustainable, scalable impact through community participation and local leadership.
              KIF empowers villages to become self-reliant by addressing real needs with practical, people-driven solutions, aiming to build model villages across rural Karnataka.
            </p>
          </div>
        </div>
      </div>

      <Programs />
      <Statistics />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;