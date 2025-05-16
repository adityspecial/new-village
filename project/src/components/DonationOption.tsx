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
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full transition-transform duration-300 hover:transform hover:scale-105">
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
            className="p-2 border border-gray-300 rounded-md w-1/2 mb-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        ) : (
          <span className="text-2xl font-bold text-amber-900">₹{amount}</span>
        )}
        <span className="text-gray-500">{frequency}</span>
      </div>
      <button
        className="w-full mt-4 bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        onClick={onDonate}
      >
        Donate Now
      </button>
    </div>
  );
};

export default DonationOption;