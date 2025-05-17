import React from 'react';

interface DonationModalProps {
  formData: {
    name: string;
    address: string;
    pincode: string;
    pan: string;
    email: string;
    phone: string;
  };
  onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({
  formData,
  onFormChange,
  onSubmit,
  onCancel,
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
      <h2 className="text-2xl font-semibold text-amber-900 mb-4">Donor Information</h2>
      
      <div className="space-y-3">
        {Object.entries(formData).map(([key, value]) => (
          <input
            key={key}
            type={key === 'email' ? 'email' : 'text'}
            name={key}
            placeholder={getPlaceholder(key)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
            value={value}
            onChange={onFormChange}
            required={key !== 'phone'}
          />
        ))}
      </div>
    
      <div className="mt-6 flex justify-end gap-3">
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
          onClick={onSubmit}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  </div>
);

const getPlaceholder = (key: string) => {
  const placeholders: { [key: string]: string } = {
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number (Optional)',
    address: 'Street Address',
    pincode: 'Postal Code',
    pan: 'PAN Number (for 80G tax benefit)'
  };
  return placeholders[key];
};

export default DonationModal;