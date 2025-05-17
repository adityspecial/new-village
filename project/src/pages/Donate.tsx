import React, { useState } from 'react';
import { Calendar, Heart, GraduationCap } from 'lucide-react';
import DonationOption from '../components/DonationOption';
import DonationModal from '../components/DonationModal';
import { initializeRazorpay, createRazorpayOptions, DonationData } from '../utils/razorpay';
import { validateDonationForm } from '../utils/ validation';

const RAZORPAY_KEY_ID = 'rzp_live_6CfortcpYYDlFy';

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
    if (isOneTime && (!oneTimeAmount || Number(oneTimeAmount) <= 0)) {
      setErrors({ amount: 'Please enter a valid donation amount' });
      return;
    }
    setSelectedOption(option);
    setShowModal(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleFormSubmit = async () => {
    if (!selectedOption) return;
    
    const [isValid, validationErrors] = validateDonationForm(
      formData,
      !selectedOption.planId,
      oneTimeAmount
    );
    
    if (!isValid) {
      // Fix TypeScript error by explicitly casting to Record<string, string>
      setErrors(Object.fromEntries(
        Object.entries(validationErrors).filter(([_, value]) => value !== undefined)
      ) as Record<string, string>);
      return;
    }

    try {
      const donationConfig = selectedOption.planId 
        ? await handleSubscriptionDonation()
        : handleOneTimeDonation();

      const options = createRazorpayOptions(
        donationConfig,
        formData,
        RAZORPAY_KEY_ID
      );
      
      await initializeRazorpay(options);
      setShowModal(false);
      if (!selectedOption.planId) setOneTimeAmount('');
    } catch (error) {
      console.error('Payment Error:', error);
      alert(`Payment failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const handleSubscriptionDonation = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/create-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan_id: selectedOption?.planId,
          customer_details: {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim() || '0000000000', // Default if empty
            notes: {
              address: formData.address.trim(),
              pincode: formData.pincode.trim(),
              pan: formData.pan.trim()
            }
          }
        })
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(
          data.error || 
          data.message || 
          `Subscription failed with status ${response.status}`
        );
      }
  
      if (!data?.subscription?.id) {
        throw new Error('Invalid subscription data received');
      }
  
      return {
        ...selectedOption,
        subscription_id: data.subscription.id
      };
  
    } catch (error) {
      console.error('Subscription Error:', error);
      let errorMessage = 'Subscription failed';
      
      if (error instanceof Error) {
        errorMessage += `: ${error.message}`;
        
        // Handle specific Razorpay error cases
        if (error.message.includes('customer')) {
          errorMessage += '\nPlease check your contact information';
        }
      }
  
      throw new Error(errorMessage);
    }
  };

  const handleOneTimeDonation = () => ({
    ...selectedOption,
    amount: Number(oneTimeAmount)
  });

  const donationOptions = [
    {
      icon: Heart,
      title: 'One-Time Donation',
      description: 'Support rural development initiatives with a single contribution',
      frequency: 'One-time',
      amount: Number(oneTimeAmount) || 0,
      isEditable: true,
      value: oneTimeAmount,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setOneTimeAmount(e.target.value);
        if (errors.amount) {
          const newErrors = { ...errors };
          delete newErrors.amount;
          setErrors(newErrors);
        }
      },
      onDonate: () => handleDonateClick({
        title: 'One-Time Donation',
        amount: Number(oneTimeAmount),
        frequency: 'One-time',
      }),
    },
    {
      icon: Calendar,
      title: 'Monthly Support',
      description: 'Sustain our programs with regular monthly donations',
      amount: 200,
      frequency: 'Monthly',
      planId: 'plan_QS2gghK7JzEJ71',
      onDonate: () => handleDonateClick({
        title: 'Monthly Support',
        amount: 200,
        frequency: 'Monthly',
        planId: 'plan_QS2gghK7JzEJ71',
      }),
    },
    {
      icon: GraduationCap,
      title: 'Adopt a Child',
      description: 'Support a child\'s education for one full year',
      amount: 3500,
      frequency: 'Yearly',
      planId: 'plan_QS2jRbob44CJIo',
      onDonate: () => handleDonateClick({
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
            Your contribution helps empower rural communities through sustainable development initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {donationOptions.map((option, index) => (
            <DonationOption
              key={index}
              {...option}
            />
          ))}
        </div>

        {errors.amount && (
          <div className="text-red-500 text-center mb-6">{errors.amount}</div>
        )}

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-amber-900 mb-2">Tax Benefits</h3>
          <p className="text-gray-700">
            All donations are eligible for tax deduction under section 80G. 
            You'll receive an automated receipt via email post-transaction.
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
            {Object.entries(errors).map(([key, error]) => 
              error && <li key={key}>{error}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Donate;