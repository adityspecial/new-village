import express from 'express';
import cors from 'cors';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Log loaded Razorpay keys for debugging .env issues
console.log('Razorpay key:', process.env.RAZORPAY_KEY_ID, process.env.RAZORPAY_KEY_SECRET);

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Endpoint to create a subscription
app.post('/api/create-subscription', async (req, res) => {
  const { plan_id, customer_details } = req.body;
  console.log('Received /api/create-subscription:', { plan_id, customer_details });

  // Validate input
  if (
    !plan_id ||
    !customer_details ||
    !customer_details.name ||
    !customer_details.email ||
    !customer_details.phone
  ) {
    console.error('Missing or invalid input:', req.body);
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  try {
    const subscription = await razorpay.subscriptions.create({
      plan_id,
      customer_notify: 1,
      total_count: 12, // or as per your plan
      customer: {
        name: customer_details.name,
        email: customer_details.email,
        contact: customer_details.phone,
      },
      notes: customer_details.notes || {},
    });
    console.log('Subscription created:', subscription);
    res.json({ success: true, subscription });
  } catch (error) {
    console.error('Error creating subscription:', error);
    res.status(500).json({ success: false, error: error.message || String(error) });
  }
});

// (Optional) Endpoint to verify subscription/payment
app.post('/api/verify-subscription', async (req, res) => {
  // For demo, just return success
  res.json({ success: true, subscription: req.body });
});

// Fallback error handler to ALWAYS return JSON
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ success: false, error: err.message || 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));