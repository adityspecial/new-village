import React, { useState } from 'react';
import { Calendar, Heart, GraduationCap } from 'lucide-react';
import DonationOption from '../components/DonationOption';
import DonationModal from '../components/DonationModal';
import { initializeRazorpay, createRazorpayOptions, DonationData } from '../components/razorpay';
import { validateDonationForm } from '../components/validation';

const RAZORPAY_KEY_ID = 'rzp_live_6CfortcpYYDlFy'; // Use your Razorpay key

const Donate: React.FC = () => {
  const [oneTimeAmount, setOneTimeAmount] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DonationData | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    pincode: '',
    pan: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleDonateClick = (option: DonationData) => {
    const isOneTime = !option.planId;
    if (isOneTime) {
      const numericAmount = Number(oneTimeAmount);
      if (!oneTimeAmount || numericAmount <= 0) {
        setErrors({
          ...errors,
          amount: 'Please enter a valid donation amount',
        });
        return;
      } else {
        setErrors({
          ...errors,
          amount: '',
        });
      }
    }
    setSelectedOption(option);
    setShowModal(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleFormSubmit = async () => {
    if (!selectedOption) return;
    const isOneTime = !selectedOption.planId;

    const [isValid, validationErrors] = validateDonationForm(
      formData,
      isOneTime,
      oneTimeAmount
    );
    if (!isValid) {
      const errorRecord: Record<string, string> = {};
      Object.entries(validationErrors).forEach(([key, value]) => {
        if (value !== undefined) errorRecord[key] = value;
      });
      setErrors(errorRecord);
      return;
    }

    try {
      if (!isOneTime) {
        // 1. Create subscription on backend
        const response = await fetch('/api/create-subscription', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            plan_id: selectedOption.planId,
            customer_details: {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              notes: {
                address: formData.address,
                pincode: formData.pincode,
                pan: formData.pan
              }
            }
          })
        });
        const data = await response.json();
        if (!data.success || !data.subscription?.id) {
          alert('Failed to create subscription. Please try again.');
          return;
        }
        // 2. Pass only subscription_id to Razorpay Checkout
        const options = createRazorpayOptions(
          {
            ...selectedOption,
            subscription_id: data.subscription.id
          },
          formData,
          RAZORPAY_KEY_ID
        );
        console.log('Razorpay options:', options);
        await initializeRazorpay(options);
        setShowModal(false);
        return;
      }

      // One-time payment
      const options = createRazorpayOptions(
        {
          ...selectedOption,
          amount: Number(oneTimeAmount),
        },
        formData,
        RAZORPAY_KEY_ID
      );
      await initializeRazorpay(options);
      setShowModal(false);
      setOneTimeAmount('');
    } catch (error) {
      console.error('Payment initialization failed:', error);
      alert('Payment initialization failed. Check console for details.');
    }
  };

  const donationOptions = [
    {
      icon: Heart,
      title: 'One-Time Donation',
      description: 'Make a one-time contribution to support our initiatives for rural development.',
      frequency: 'One-time',
      amount: Number(oneTimeAmount) || 0,
      isEditable: true,
      value: oneTimeAmount,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setOneTimeAmount(e.target.value);
        if (errors.amount) setErrors({ ...errors, amount: '' });
      },
      onDonate: () =>
        handleDonateClick({
          title: 'One-Time Donation',
          amount: Number(oneTimeAmount),
          frequency: 'One-time',
        }),
    },
    {
      icon: Calendar,
      title: 'Monthly Support',
      description: 'Become a regular supporter with monthly donations to sustain our programs.',
      amount: 200,
      frequency: 'Monthly',
      planId: 'plan_QS2gghK7JzEJ71',
      onDonate: () =>
        handleDonateClick({
          title: 'Monthly Support',
          amount: 200,
          frequency: 'Monthly',
          planId: 'plan_QS2gghK7JzEJ71',
        }),
    },
    {
      icon: GraduationCap,
      title: 'Adopt a Child',
      description: "Support a child's education and development for one full year.",
      amount: 3500,
      frequency: 'Yearly',
      planId: 'plan_QS2jRbob44CJIo',
      onDonate: () =>
        handleDonateClick({
          title: 'Adopt a Child',
          amount: 3500,
          frequency: 'Yearly',
          planId: 'plan_QS2jRbob44CJIo',
        }),
    },
  ];

  return (
    <div className="py-12 min-h-screen flex flex-col bg-amber-200 pattern-bg-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Support Our Cause</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your contribution helps us continue our work in rural development and community empowerment.
            Every donation makes a difference in the lives of those we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {donationOptions.map((option, index) => (
            <DonationOption key={index} {...option} />
          ))}
        </div>

        {errors.amount && (
          <div className="text-red-500 text-center mb-6">{errors.amount}</div>
        )}

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-amber-900 mb-2">Tax Benefits</h3>
          <p className="text-gray-700">
            All monetary contributions to Karnataka Incubation Foundation are eligible for tax deduction 
            under section 80G of the Income Tax Act. A receipt will be emailed to you after your donation.
          </p>
        </div>
      </div>

      {showModal && (
        <DonationModal
          formData={formData}
          onFormChange={handleFormChange}
          onSubmit={handleFormSubmit}
          onCancel={() => setShowModal(false)}
        />
      )}

      {Object.keys(errors).length > 0 && showModal && (
        <div className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50">
          <p className="font-bold">Please fix the following errors:</p>
          <ul className="list-disc pl-5">
            {Object.values(errors).map((error, index) => (
              error ? <li key={index}>{error}</li> : null
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Donate;