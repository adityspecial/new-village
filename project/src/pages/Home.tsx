import ImageSlider from '../components/ImageSlider';
import Programs from '../components/Programs';
import Statistics from '../components/Statistics';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';
import Poster from '../components/Poster';
import Marquee from '../components/Marquee';

const Home = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Marquee 
        texts={[
          {
            text: "The Annual Report Release of 2025 is here! Click to read more.",
            link: "/get-involved/events"
          },
          
        ]}
        speed="normal"
        isLatest={true}
      />
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