export interface ValidationErrors {
  [key: string]: string | undefined;
  name?: string;
  email?: string;
  address?: string;
  pincode?: string;
  pan?: string;
  amount?: string;
}

export const validateDonationForm = (
  formData: { 
    name: string; 
    email: string; 
    address: string; 
    pincode: string; 
    pan: string 
  },
  isOneTime: boolean,
  amount?: string
): [boolean, ValidationErrors] => {
  const errors: ValidationErrors = {};

  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email is invalid';
  }

  if (!formData.address.trim()) {
    errors.address = 'Address is required';
  }

  if (!formData.pincode.trim()) {
    errors.pincode = 'Pincode is required';
  } else if (!/^\d{6}$/.test(formData.pincode)) {
    errors.pincode = 'Pincode must be 6 digits';
  }

  if (!formData.pan.trim()) {
    errors.pan = 'PAN is required for tax benefits';
  } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) {
    errors.pan = 'Invalid PAN format';
  }

  if (isOneTime) {
    const numericAmount = Number(amount || '0');
    if (!amount || numericAmount <= 0) {
      errors.amount = 'Please enter a valid donation amount';
    }
  }

  return [Object.keys(errors).length === 0, errors];
};