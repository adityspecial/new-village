import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import EkGaon from './components/Ek-Gaon';
import Health from './components/Health-Hyegine';
import Yoga from './components/Yoga';
import RuralEmpowerment from './components/Jeevadhara';
import SuccessStories from './components/SuccessStories';


// Work -> Environment
/*import Environment from './pages/work/environment/Environment';

// Impact subpages
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

            {/* About Subpages */}
          <Route path="/about/ourstory" element={<OurStory />} />
            <Route path="/about/team" element={<TeamPage />} />
             <Route path="/about/modelvillage" element={<ModelVillage />} /> 
{/*        <Route path="/about/financial-reports" element={<FinancialReports />} />   */}
  
{/*    <Route path="/work/environment/environment" element={<EkGaon />} /> */}
 
            {/* Impact Subpages */}
        {  /*  <Route path="/impact/newsletter" element={<Newsletter />} />
            <Route path="/impact/success-stories" element={<SuccessStories />} />

            {/* Get Involved Subpages */}
        {/*    <Route path="/get-involved/volunteer" element={<Volunteer />} />
            <Route path="/get-involved/partner" element={<PartnerWithUs />} />
            <Route path="/get-involved/careers" element={<Careers />} />
  */}
  
 
            {/* Work - Education */}
            <Route path="/work/education/akshar-prabhavam" element={<AksharPrabhavam />} />
            <Route path="/work/education/digital-literacy" element={<DigitalLiteracy />} />
            <Route path="/work/education/spoken-english" element={<SpokenEnglish />} />
            <Route path="/work/livelihood/jeevandhara" element={<RuralEmpowerment />} />
            {/* Work - Agriculture */}
            <Route path="/work/agriculture/farmer-training" element={<FarmerTraining />} />
              {/*<Route path="/work/agriculture/soil-health" element={<SoilHealth />} />*/}

            {/* Work - Environment */}
            <Route path="/work/agriculture/ek-gaon-ek-jangal" element={<EkGaon />} />
            <Route path="/work/health/hygiene-campaign" element={<Health />} />
            <Route path="/work/health/yoga" element={<Yoga />} />
            <Route path="/impact/stories" element={<SuccessStories />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
