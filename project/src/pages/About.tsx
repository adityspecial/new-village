import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Users, Heart, Award, Target } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '2018',
      title: 'Foundation Established',
      description: 'Village Life was founded with a vision to transform rural communities.'
    },
    {
      year: '2019',
      title: 'First Community Project',
      description: 'Launched our first sustainable farming initiative in 5 villages.'
    },
    {
      year: '2020',
      title: 'Education Program',
      description: 'Established rural education centers reaching 500+ students.'
    },
    {
      year: '2021',
      title: 'Craft Revival',
      description: 'Initiated traditional craft preservation programs across 20 villages.'
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'Putting the needs and aspirations of village communities at the heart of everything we do.'
    },
    {
      icon: Target,
      title: 'Sustainable Development',
      description: 'Promoting environmentally conscious growth and self-sustaining initiatives.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining high standards in all our programs and initiatives.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with communities, governments, and organizations.'
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <h1 className="text-4xl font-bold text-amber-900 mb-8">About Village Life</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6 text-lg">
              Village Life is dedicated to preserving and enhancing rural communities while promoting sustainable development and traditional values. Our mission is to bridge the gap between traditional village life and modern opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  We envision thriving village communities that maintain their cultural heritage while embracing sustainable progress and economic opportunities.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To empower rural communities through education, sustainable agriculture, and preservation of traditional crafts while creating economic opportunities for villagers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <value.icon className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold text-amber-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Milestones Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-8">Our Journey</h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-6"
              >
                <div className="text-2xl font-bold text-amber-600 whitespace-nowrap">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-amber-900 mb-6">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900">Location</h3>
                <p className="text-gray-600">123 Village Road, Rural District</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900">Email</h3>
                <p className="text-gray-600">contact@villagelife.org</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;