import { CreditCard, Calendar, Heart, GraduationCap } from 'lucide-react';
import { useState } from 'react';

const DonationOption = ({
  icon: Icon,
  title,
  description,
  amount,
  frequency,
  onDonate,
  isEditable,
  value,
  onChange,
}: any) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
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
  const [oneTimeAmount, setOneTimeAmount] = useState<string>('');
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    pincode: '',
    pan: '',
    email: '',
  });

  const donationOptions = [
    {
      icon: Heart,
      title: 'One-Time Donation',
      description: 'Make a one-time contribution to support our initiatives.',
      frequency: 'One-time',
      amount: Number(oneTimeAmount) || 0,
      isEditable: true,
      value: oneTimeAmount,
      onChange: (e: any) => setOneTimeAmount(e.target.value),
    },
    {
      icon: Calendar,
      title: 'Monthly Support',
      description: 'Become a regular supporter with monthly donations.',
      amount: 200,
      frequency: 'Monthly',
      planId: 'plan_OkquniarKzEEkM',
    },
    {
      icon: GraduationCap,
      title: 'Adopt a Child',
      description: "Support a child's education for one year.",
      amount: 3500,
      frequency: 'Yearly',
      planId: 'sub_QS2lYatwqzhbQ5',
    },
  ];

  const handleDonateClick = (option: any) => {
    const isOneTime = !option.planId;
    const amount = Number(oneTimeAmount);
    if (isOneTime && amount <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }
    setSelectedOption(option);
    setShowModal(true);
  };

  const handleFormSubmit = () => {
    const { name, address, pincode, pan, email } = formData;

    if (!name || !address || !pincode || !pan || !email) {
      alert('Please fill all fields.');
      return;
    }

    setShowModal(false);
    const isOneTime = !selectedOption.planId;
    const amount = Number(oneTimeAmount);

    const razorpayOptions = {
      key: 'rzp_live_kE54OR7LfcjQLV',
      amount: isOneTime ? amount * 100 : undefined,
      plan_id: selectedOption.planId,
      currency: 'INR',
      name: 'Karnataka Incubation Foundation',
      description: selectedOption.title,
      handler: function (response: any) {
        alert(
          `${isOneTime ? 'Payment' : 'Subscription'} successful! ID: ${
            isOneTime ? response.razorpay_payment_id : response.razorpay_subscription_id
          }`
        );
      },
      prefill: {
        name,
        email,
        contact: '',
      },
      notes: {
        donation_type: selectedOption.title,
        address,
        pincode,
        pan,
      },
      theme: {
        color: '#FFBF00',
      },
    };

    const rzp = new (window as any).Razorpay(razorpayOptions);
    rzp.open();
  };

  return (
    <div className="py-12 min-h-screen flex flex-col pattern-bg-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">Support Our Cause</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Your contribution helps us continue our work in rural development and community empowerment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {donationOptions.map((option, index) => (
            <DonationOption key={index} {...option} onDonate={() => handleDonateClick(option)} />
          ))}
        </div>
      </div>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Note: All Indian monetary contributions to KIF are eligible for tax deduction under section 80G of the Income Tax Act
      </p>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-amber-900">Enter Your Details</h2>
            <div className="space-y-3">
              {['name', 'address', 'pincode', 'pan', 'email'].map((field) => (
                <input
                  key={field}
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={(formData as any)[field]}
                  onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                />
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
                onClick={handleFormSubmit}
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;