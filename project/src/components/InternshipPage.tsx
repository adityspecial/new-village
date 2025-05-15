import React from 'react';
import { Briefcase, Globe, UserPlus } from 'lucide-react';

const internDiaries = [
  {
    image: '/images/volunteers/intern.jpeg',
    title: 'Rural Insights',
    text: 'During our internship with the Karnataka Incubation Foundation (KIF), we contributed to building their website, focusing on designing user-friendly pages and interactive components to enhance volunteer engagement. This experience helped us strengthen our web development skills and understand the importance of technology in supporting community initiatives. Additionally, we spent a memorable day at Jeerigewad village, where we interacted with the children and conducted sessions to introduce them to basic science concepts and the opportunities offered by premier institutions like IIT. It was inspiring to see their curiosity and enthusiasm, and it reinforced our belief in the power of education to transform lives.',
  },
];

const InternshipPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-amber-100 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <h1 className="text-5xl font-bold mb-4">Intern with Karnataka Incubation Foundation</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Experience grassroots innovation and contribute to impactful development work in rural Karnataka.
        </p>
      </section>

      {/* Why Intern Section */}
      {/* Available Internships Section */}
<section className="py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-12">Available Internships</h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: 'Documentation – Akshar Prabhavam',
          responsibilities: 'Visit rural Akshar Kendras, collect transformation stories, write narratives, collaborate with mentors.',
          location: 'Dharwad',
          skills: 'Writing, Communication, Social Work, Education',
          duration: '8 weeks',
        },
        {
          title: 'Success Story Collection – Organic Farming & Livelihoods',
          responsibilities: 'Interview trained farmers and women, document success stories, create visual content.',
          location: 'Dharwad',
          skills: 'Journalism, Communication, Rural Development',
          duration: '8 weeks',
        },
        {
          title: 'Fundraising Content – Video & Media Creation',
          responsibilities: 'Create videos of rural initiatives, storyboard, film, edit, develop media for fundraising and outreach.',
          location: 'Dharwad',
          skills: 'Media, Film, Communication, Fundraising',
          duration: '8 weeks',
        },
        {
          title: 'Impact Research – Akshar Kendras',
          responsibilities: 'Design and conduct surveys, analyze learning impact, compile detailed reports with data.',
          location: 'Dharwad',
          skills: 'Research, Education, Social Sciences, Data Analysis',
          duration: '8 weeks',
        },
        {
          title: 'FPO Support – Marketing, Packaging & Compliance',
          responsibilities: 'Support FPOs with branding, packaging, compliance, and market research.',
          location: 'Dharwad',
          skills: 'Agri-business, Marketing, Compliance, Rural Development',
          duration: '8 weeks',
        },
      ].map((intern, idx) => (
        <div key={idx} className="bg-white rounded-xl p-6 shadow-md text-left">
          <h3 className="text-xl font-bold text-amber-800 mb-2">{intern.title}</h3>
          <p className="text-gray-700 text-sm mb-2"><span className="font-semibold">Key Responsibilities:</span> {intern.responsibilities}</p>
          <p className="text-gray-700 text-sm mb-2"><span className="font-semibold">Location:</span> {intern.location}</p>
          <p className="text-gray-700 text-sm mb-2"><span className="font-semibold">Skills/Background:</span> {intern.skills}</p>
          <p className="text-gray-700 text-sm"><span className="font-semibold">Minimum Duration:</span> {intern.duration}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Policy + Apply Section */}
      <section className="py-16 bg-amber-200 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Apply</h2>
        <p className="text-gray-800 max-w-2xl mx-auto mb-6">
          Read the <a href="/publicationDocs/KIF Internship Policy.pdf" className="underline text-amber-900 font-semibold" target="_blank" rel="noopener noreferrer">Internship Guidelines</a> to understand our expectations, structure, and eligibility.
        </p>
        <p className="text-lg font-semibold text-amber-900">To apply, simply mail us at <a href="mailto:namaste@kifdwd.org" className="underline">namaste@kifdwd.org</a></p>
      </section>

      {/* Intern Diaries */}
      <section className="py-20 px-6 bg-gradient-to-b from-amber-100 to-yellow-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Intern Diaries</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {internDiaries.map((entry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={entry.image} alt={entry.title} className="h-56 w-full object-cover" />
                <div className="p-5 text-left">
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">{entry.title}</h3>
                  <p className="text-gray-700 text-sm">{entry.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipPage;