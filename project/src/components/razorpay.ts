export interface RazorpayOptions {
  key: string;
  amount?: number;
  subscription_id?: string;
  currency: string;
  name: string;
  description: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    donation_type: string;
    address: string;
    pincode: string;
    pan: string;
  };
  theme: {
    color: string;
  };
}

export interface DonationData {
  title: string;
  amount: number;
  frequency: string;
  planId?: string;
  subscription_id?: string;
}

export interface DonorInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  pincode: string;
  pan: string;
}

// Script loader for Razorpay
export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (document.getElementById('razorpay-script')) return resolve(true);
    const script = document.createElement('script');
    script.id = 'razorpay-script';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const initializeRazorpay = async (options: RazorpayOptions): Promise<void> => {
  const scriptLoaded = await loadRazorpayScript();
  if (!scriptLoaded) {
    alert('Razorpay SDK failed to load. Are you online?');
    throw new Error('Razorpay SDK failed to load');
  }
  try {
    const rzp = new (window as any).Razorpay(options);

    rzp.on('payment.failed', function (response: any) {
      console.error('Payment failed:', response.error);
      alert(`Payment failed: ${response.error.description}`);
    });

    rzp.open();
  } catch (error) {
    console.error('Razorpay initialization error:', error);
    alert('Could not initialize payment gateway. Please try again later.');
    throw error;
  }
};

export const createRazorpayOptions = (
  donation: DonationData,
  donorInfo: DonorInfo,
  keyId: string
): RazorpayOptions => {
  const isOneTime = !donation.subscription_id;
  return {
    key: keyId,
    amount: isOneTime ? donation.amount * 100 : undefined,
    subscription_id: donation.subscription_id,
    currency: 'INR',
    name: 'Karnataka Incubation Foundation',
    description: donation.title,
    handler: async function (response: any) {
      if (!isOneTime) {
        try {
          const verificationResponse = await fetch('/api/verify-subscription', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(response),
          });

          const data = await verificationResponse.json();
          if (data.success) {
            alert(`Subscription active! ID: ${data.subscription.id}`);
          } else {
            alert('Verification failed. Please contact support.');
          }
        } catch (error) {
          console.error('Verification error:', error);
          alert('Payment verification failed. Please contact support.');
        }
      } else {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      }
    },
    prefill: {
      name: donorInfo.name,
      email: donorInfo.email,
      contact: donorInfo.phone || '',
    },
    notes: {
      donation_type: donation.title,
      address: donorInfo.address,
      pincode: donorInfo.pincode,
      pan: donorInfo.pan,
    },
    theme: {
      color: '#D97706',
    },
  };
};