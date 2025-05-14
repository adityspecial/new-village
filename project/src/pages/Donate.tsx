
import { CreditCard, Calendar, Heart, GraduationCap } from 'lucide-react';
import { useState } from 'react';

const DonationOption = ({
  icon: Icon,
  title,
  description,
  amount,
  frequency,
  planId,
  onDonate,
  isEditable,
  value,
  onChange
}: any) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full ">
    <div>
      <Icon className="w-12 h-12 text-amber-600 mb-4" />
      <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
    <div className="flex justify-between items-center mb-4">
      {isEditable ? (
        <input
          type="number"
          value={value}
          onChange={onChange}
          placeholder="Enter amount"
          className="p-2 border border-gray-300 rounded-md w-1/2 mb-2"
        />
      ) : (
        <span className="text-2xl font-bold text-amber-900">₹{amount}</span>
      )}
      <span className="text-gray-500">{frequency}</span>
    </div>
    <button
      className="w-full mt-4 bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors"
      onClick={onDonate}
    >
      Donate Now
    </button>
  </div>
);

const Donate = () => {
  const [oneTimeAmount, setOneTimeAmount] = useState<string>(''); // State for one-time donation amount

  // Donation options array, with the necessary planId for recurring donations
  const donationOptions = [
    {
      icon: Heart,
      title: 'One-Time Donation',
      description: 'Make a one-time contribution to support our initiatives.',
      frequency: 'One-time',
      amount: Number(oneTimeAmount) || 0, // Use input state for amount
      isEditable: true,
      value: oneTimeAmount,  // Pass value from state
      onChange: (e: any) => setOneTimeAmount(e.target.value),  // Update state on change
    },
    {
      icon: Calendar,
      title: 'Monthly Support',
      description: 'Become a regular supporter with monthly donations.',
      amount: 200,
      frequency: 'Monthly',
      planId: 'plan_OkquniarKzEEkM'  // Razorpay plan ID for monthly subscription
    },
    {
      icon: GraduationCap,
      title: 'Adopt a Child',
      description: "Support a child's education for one year.",
      amount: 3500,
      frequency: 'Yearly',
      planId: 'sub_QS2lYatwqzhbQ5'  // Razorpay plan ID for yearly subscription
    }
  ];

  // Load Razorpay for one-time donation
  const loadRazorpay = (amount: number, title: string) => {
    // Ensure valid amount
    if (!amount || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    console.log('One-Time Donation Amount:', amount); // Debug: Log the amount

    const options = {
      key: 'rzp_live_kE54OR7LfcjQLV', // Your Razorpay Key
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      name: 'Karnataka Incubation Foundation',
      description: title,
      handler: function (response: any) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      notes: {
        donation_type: title
      },
      theme: {
        color: '#FFBF00'
      }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  // Load Razorpay subscription for recurring donations
  const loadRazorpaySubscription = (planId: string | undefined, title: string) => {
    if (!planId) {
      console.error('Plan ID is missing');
      return;
    }

    console.log('Subscription Plan ID:', planId); // Debug: Log the plan ID

    const options = {
      key: 'rzp_live_kE54OR7LfcjQLV',
      plan_id: planId, // Use the Razorpay subscription plan ID
      currency: 'INR',
      name: 'Karnataka Incubation Foundation',
      description: title,
      handler: function (response: any) {
        alert(`Subscription successful! Subscription ID: ${response.razorpay_subscription_id}`);
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      notes: {
        donation_type: title
      },
      theme: {
        color: '#FFBF00'
      }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="py-12 min-h-screen flex flex-col pattern-bg-yellow bg-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">Support Our Cause</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Your contribution helps us continue our work in rural development and community empowerment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {donationOptions.map((option, index) => (
            <DonationOption
              key={index}
              {...option}
              onDonate={() => {
                if (option.planId) {
                  // Handle recurring subscription donation
                  loadRazorpaySubscription(option.planId, option.title);
                } else {
                  // Handle one-time donation
                  const amount = Number(oneTimeAmount);
                  if (amount <= 0) {
                    alert('Please enter a valid donation amount.');
                    return;
                  }
                  loadRazorpay(amount, option.title);
                }
              }}
            />
          ))}
        </div>
      </div>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
      Note:
      All Indian monetary contributions to KIF are eligible for  tax deduction under section 80G of the Income Tax Act
        </p>
    </div>
  );
};

export default Donate;