import React from 'react';

interface DonationOptionProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  amount: number;
  frequency: string;
  onDonate: () => void;
  isEditable?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DonationOption: React.FC<DonationOptionProps> = ({
  icon: Icon,
  title,
  description,
  amount,
  frequency,
  onDonate,
  isEditable = false,
  value = '',
  onChange,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
    <div className="flex-grow">
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
          className="p-2 border border-gray-300 rounded-md w-1/2 focus:ring-2 focus:ring-amber-500"
          min="1"
        />
      ) : (
        <span className="text-2xl font-bold text-amber-900">₹{amount}</span>
      )}
      <span className="text-gray-500 capitalize">{frequency}</span>
    </div>

    <button
      className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors"
      onClick={onDonate}
    >
      {frequency === 'One-time' ? 'Donate Now' : 'Subscribe'}
    </button>
  </div>
);

export default DonationOption;