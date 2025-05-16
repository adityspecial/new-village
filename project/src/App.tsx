import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Main layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Top-level pages
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Impact from './pages/Impact';
import Resources from './pages/Resources';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';
import HealthPage from './components/Health';
import GramSiri from './components/gramSiri';

// About subpages

import TeamPage from './components/TeamPage';
import ModelVillage from './components/ModelVillage';
// import FinancialReports from './pages/about/FinancialReports';
import OurStory from './components/Our-Story';
// import SoilHealth from './pages/work/agriculture/SoilHealth';
// Work -> Education
import AksharPrabhavam from './components/AksharPrabhavam';
import SpokenEnglish from './components/SpokenEnglish';
import DigitalLiteracy from './components/Digital-Literacy';

// Work -> Agriculture
import FarmerTraining from './components/Farmer-Traning';
import { FarmersPrograms } from './components/FarmerPrograms';
import EkGaon from './components/Ek-Gaon';
import Health from './components/Health-Hyegine';
import Yoga from './components/Yoga';
import RuralEmpowerment from './components/Jeevadhara';
import SuccessStories from './components/SuccessStories';
import VolunteerPage from './components/VolunteerPage';
import FinancialReports from './components/FinancialReports';


// Work -> Environment
import Environment from '../src/components/Environment';
import Education from './components/Education';
import Agriculture from './components/Agriculture';
import CSRPartnership from './components/csrpartnerships';
import CSRForm from './components/csrform';
import Events from './components/Events';
import GalleryPage from './components/GalleryPage';
import ShareExperiences from './components/Experiences';
import InternshipPage from './components/InternshipPage';
import Register from './components/Register';
import Kreedotsava from './components/Kreedaustav';
import PadaPooja from './components/Pada-Pooja';
/*
// Impact subpages`
import Newsletter from './pages/impact/Newsletter';
import SuccessStories from './pages/impact/SuccessStories';

// Get Involved
import Volunteer from './pages/get-involved/Volunteer';
import PartnerWithUs from './pages/get-involved/PartnerWithUs';
import Careers from './pages/get-involved/Careers';
*/
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-amber-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/resources/*" element={<Resources />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />
             <Route path='/register' element={<Register/>} />
             <Route path='/work/health' element={<HealthPage/>} />
             <Route path='/work/gramsiri' element={<GramSiri/>} />
            
            {/* About Subpages */}
          <Route path="/about/ourstory" element={<OurStory />} />
            <Route path="/about/team" element={<TeamPage />} />
             <Route path="/about/modelvillage" element={<ModelVillage />} /> 
{/*        <Route path="/about/financial-reports" element={<FinancialReports />} />   */}
  
    <Route path="/work/environment" element={<Environment />} /> 
 {/*
            {/* Impact Subpages */}
        {  /*  <Route path="/impact/newsletter" element={<Newsletter />} />
            <Route path="/impact/success-stories" element={<SuccessStories />} />

            {/* Get Involved Subpages */}
        {/*    <Route path="/get-involved/volunteer" element={<Volunteer />} />
            <Route path="/get-involved/partner" element={<PartnerWithUs />} />
            <Route path="/get-involved/careers" element={<Careers />} />
  */}
  
    {/* Work - Education */}
    <Route path="/work/education" element={<Education/>} />
    <Route path="/work/agriculture" element={<Agriculture />} />
            {/* Work - Education */}
            <Route path="/work/education/akshar-prabhavam" element={<AksharPrabhavam />} />
            <Route path="/work/education/digital-literacy" element={<DigitalLiteracy />} />
            <Route path="/work/education/spoken-english" element={<SpokenEnglish />} />
            <Route path="/work/livelihood" element={<RuralEmpowerment />} />
            {/* Work - Agriculture */}
            <Route path="/work/agriculture/farmer-training" element={<FarmerTraining />} />
              <Route path="/work/agriculture/farmers-field-school" element={<FarmersPrograms />} />
 
            {/* Work - Environment */}
            <Route path="/work/gramsiri/kreedotsava" element={<Kreedotsava />} />
            <Route path="/work/gramsiri/PadaPooja" element={<PadaPooja />} />
            <Route path="/work/agriculture/ek-gaon-ek-jangal" element={<EkGaon />} />
            <Route path="/work/health/hygiene-campaign" element={<Health />} />
            <Route path="/work/health/yoga" element={<Yoga />} />
            <Route path="/impact/stories" element={<SuccessStories />} />
            <Route path="/get-involved/volunteer" element={<VolunteerPage />} />
            <Route path="/about/reports" element={<FinancialReports />} />
            <Route path="/get-involved/csr" element={<CSRPartnership />} />
            <Route path="/csr-form" element={<CSRForm />} />
            <Route path="/get-involved/events" element={<Events />} />
            <Route path="/impact/gallery" element={<GalleryPage />} />
            <Route path="/impact/share" element={<ShareExperiences />} />
            <Route path="/get-involved/internships" element={<InternshipPage />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
