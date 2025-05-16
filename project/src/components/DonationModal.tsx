import React from 'react';

// Define the type for the form data
export interface FormData {
  name: string;
  address: string;
  pincode: string;
  pan: string;
  email: string;
  phone: string;
}

// Define the props type for DonationModal
interface DonationModalProps {
  formData: FormData;
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
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fadeIn">
    <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg animate-slideIn">
      <h2 className="text-2xl font-semibold mb-4 text-amber-900">Enter Your Details</h2>
      <div className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          value={formData.name}
          onChange={onFormChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          value={formData.email}
          onChange={onFormChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          value={formData.phone}
          onChange={onFormChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          value={formData.address}
          onChange={onFormChange}
          required
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          value={formData.pincode}
          onChange={onFormChange}
          required
        />
        <input
          type="text"
          name="pan"
          placeholder="PAN Number (for 80G tax benefit)"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          value={formData.pan}
          onChange={onFormChange}
          required
        />
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          onClick={onSubmit}
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  </div>
);

export default DonationModal;