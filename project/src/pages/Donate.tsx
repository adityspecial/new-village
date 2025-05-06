import React from 'react';
import { CreditCard, Calendar, Heart, GraduationCap } from 'lucide-react';

const DonationOption = ({ icon: Icon, title, description, amount, frequency }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-amber-600 mb-4" />
    <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex justify-between items-center">
      <span className="text-2xl font-bold text-amber-900">₹{amount}</span>
      <span className="text-gray-500">{frequency}</span>
    </div>
    <button className="w-full mt-4 bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors">
      Donate Now
    </button>
  </div>
);

const Donate = () => {
  const donationOptions = [
    {
      icon: Heart,
      title: 'One-Time Donation',
      description: 'Make a one-time contribution to support our initiatives.',
      amount: '1000',
      frequency: 'One-time'
    },
    {
      icon: Calendar,
      title: 'Monthly Support',
      description: 'Become a regular supporter with monthly donations.',
      amount: '500',
      frequency: 'Monthly'
    },
    {
      icon: GraduationCap,
      title: 'Adopt a Child',
      description: 'Support a child\'s education for one year.',
      amount: '3500',
      frequency: 'Yearly'
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">Support Our Cause</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Your contribution helps us continue our work in rural development and community empowerment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {donationOptions.map((option, index) => (
            <DonationOption key={index} {...option} />
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">Other Ways to Donate</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <CreditCard className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900">Bank Transfer</h3>
                <p className="text-gray-600">
                  Make a direct bank transfer to our account. Contact us for bank details.
                </p>
              </div>
            </div>
            {/* Add more donation methods as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;