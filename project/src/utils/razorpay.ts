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
    notes: Record<string, string>;
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
  
  export const loadRazorpayScript = () => {
    return new Promise<boolean>((resolve) => {
      if (document.getElementById('razorpay-script')) return resolve(true);
      
      const script = document.createElement('script');
      script.id = 'razorpay-script';
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  
  export const initializeRazorpay = async (options: RazorpayOptions) => {
    if (!await loadRazorpayScript()) {
      throw new Error('Failed to load Razorpay SDK');
    }
    
    return new Promise<void>((resolve, reject) => {
      try {
        const rzp = new (window as any).Razorpay({
          ...options,
          modal: { ondismiss: () => reject('Payment cancelled') }
        });
        
        rzp.on('payment.failed', (response: any) => 
          reject(response.error.description || 'Payment failed')
        );
        
        rzp.open();
        resolve();
      } catch (error) {
        reject(error instanceof Error ? error : new Error('Payment initialization failed'));
      }
    });
  };
  
  export const createRazorpayOptions = (
    donation: DonationData,
    donorInfo: DonorInfo,
    keyId: string
  ): RazorpayOptions => ({
    key: keyId,
    amount: donation.frequency === 'One-time' ? donation.amount * 100 : undefined,
    subscription_id: donation.subscription_id,
    currency: 'INR',
    name: 'Karnataka Incubation Foundation',
    description: donation.title,
    handler: async (response) => {
      try {
        const verification = await fetch('/api/verify-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(response)
        });
        
        if (!verification.ok) throw new Error('Verification failed');
        alert(`Payment successful! ID: ${response.razorpay_payment_id}`);
      } catch (error) {
        console.error('Verification error:', error);
        alert('Payment verification failed - please contact support');
      }
    },
    prefill: {
      name: donorInfo.name,
      email: donorInfo.email,
      contact: donorInfo.phone
    },
    notes: {
      address: donorInfo.address,
      pincode: donorInfo.pincode,
      pan: donorInfo.pan,
      donation_type: donation.title
    },
    theme: { color: '#D97706' }
  });