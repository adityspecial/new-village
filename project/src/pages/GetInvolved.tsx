import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Users, Handshake, Building2, GraduationCap, Calendar } from 'lucide-react';

const InvolvementSection = ({ icon: Icon, title, description, link }: any) => (
  <Link to={link} className="block">
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Icon className="w-12 h-12 text-amber-600 mb-4" />
      <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Link>
);

const GetInvolvedOverview = () => {
  const sections = [
    {
      icon: Users,
      title: 'Volunteering',
      description: 'Join our volunteer program and make a difference.',
      link: '/get-involved/volunteer'
    },
    {
      icon: Building2,
      title: 'CSR Partnerships',
      description: 'Partner with us for corporate social responsibility initiatives.',
      link: '/get-involved/csr'
    },
    {
      icon: Handshake,
      title: 'NGO Partnership',
      description: 'Collaborate with us for greater impact.',
      link: '/get-involved/ngo'
    },
    {
      icon: GraduationCap,
      title: 'Internships',
      description: 'Gain valuable experience while contributing to rural development.',
      link: '/get-involved/internships'
    },
    {
      icon: Calendar,
      title: 'Events',
      description: 'Participate in our upcoming events and programs.',
      link: '/get-involved/events'
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">Get Involved</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Join us in our mission to transform rural communities. There are many ways to contribute.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <InvolvementSection key={index} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

const GetInvolved = () => {
  return (
    <Routes>
      <Route index element={<GetInvolvedOverview />} />
      {/* Add routes for other sections */}
    </Routes>
  );
};

export default GetInvolved;