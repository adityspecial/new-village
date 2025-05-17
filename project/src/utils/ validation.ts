export const validateDonationForm = (
    formData: {
      name: string;
      email: string;
      address: string;
      pincode: string;
      pan: string;
      phone: string;
    },
    isOneTime: boolean,
    amount?: string
  ) => {
    const errors: { [key: string]: string } = {};
    const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) errors.email = 'Valid email required';
    if (!formData.address.trim()) errors.address = 'Address is required';
    if (!formData.pincode.match(pincodeRegex)) errors.pincode = 'Valid postal code required';
    if (!formData.pan.match(panRegex)) errors.pan = 'Valid PAN number required';
    if (isOneTime && (!amount || Number(amount) < 1)) errors.amount = 'Invalid amount';
    
    return [Object.keys(errors).length === 0, errors] as const;
  };
  