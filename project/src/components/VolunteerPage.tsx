import React, { useState } from 'react';
import { Heart, Book, Share2, Sprout } from 'lucide-react';
import Modal from './Modal';
import RegistrationForm from './RegistrationForm';
import TestimonialCarousel, { testimonials } from './TestimonialCarousel';

const VolunteerPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative py-20 px-4 text-center bg-gradient-to-r from-amber-600 to-amber-900 text-white">
      <section className="py-16 px-4 text-center">
        <h2 className="text-5xl font-bold text-white mb-4">Get Involved: Become a Volunteer</h2>
        <p className="text-lg max-w-4xl mx-auto text-white">
          Be the Change You Wish to See in Rural Karnataka
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 bg-white text-amber-900 px-6 py-3 rounded-full font-semibold hover:bg-white-400 transition"
        >
          Register as a Volunteer
        </button>
      </section>

      <section className="bg-amber-100 py-16 px-4 pattern-bg-yellow">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Why Volunteer With KIF?</h2>
          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <Sprout />, title: 'Real Impact', desc: 'Contribute to Akshar Prabhavam, organic farming, and more.' },
            { icon: <Book />, title: 'Skill Building', desc: 'Learn teaching, leadership & rural mobilization.' },
            { icon: <Heart />, title: 'Community Bonds', desc: 'Connect with farmers, children, and change-makers.' },
            { icon: <Share2 />, title: 'Be Part of a Movement', desc: 'Join a network working for sustainable change.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-amber-600 mb-4 mx-auto w-10 h-10">{item.icon}</div>
              <h3 className="text-black text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="h-16 bg-gradient-to-r from-amber-600 to-amber-900" />


      <section className="bg-amber-100 py-16 px-4 pattern-bg-yellow">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-10">Volunteer Roles</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          emoji: '📘',
          title: 'Teaching & Mentoring',
          desc: 'At Akshar Kendras, guide and inspire rural children through academic and personality development support.',
        },
        {
          emoji: '🎉',
          title: 'Event Support',
          desc: 'Assist in organizing awareness drives, training programs, and community festivals.',
        },
        {
          emoji: '📣',
          title: 'Social Media & Outreach',
          desc: 'Help promote our work by creating and sharing impactful stories, visuals, and campaign messages.',
        },
        {
          emoji: '🌾',
          title: 'Project Assistance',
          desc: 'Support on-ground initiatives like organic farming, skill training, and livelihood development.',
        },
        {
          emoji: '📝',
          title: 'Translation & Content Creation',
          desc: 'Contribute by translating or writing content in Kannada, English, or other regional languages.',
        },
        {
          emoji: '📊',
          title: 'Research & Documentation',
          desc: 'Assist with data collection, impact tracking, and preparing reports for internal and external stakeholders.',
        },
      ].map((role, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-lg p-6 text-left transition-transform hover:scale-[1.02]"
        >
          <div className="text-4xl mb-4">{role.emoji}</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{role.title}</h3>
          <p className="text-gray-600 text-sm">{role.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="h-16 bg-gradient-to-r from-amber-600 to-amber-900" />

      <section className="py-16 px-4 bg-amber-100 pattern-bg-yellow">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Volunteer Experiences</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Register as a Volunteer</h2>
        <RegistrationForm />
      </Modal>
    </div>
  );
};

export default VolunteerPage;