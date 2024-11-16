import React from 'react';
import { processPayment } from '../services/orderService';

const RazorpayCheckout = ({ amount, onSuccess }) => {
  const handlePayment = async () => {
    const order = await processPayment(amount);

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: 'INR',
      name: 'Pizza Builder',
      description: 'Custom Pizza Order',
      order_id: order.id,
      handler: (response) => {
        if (response.razorpay_payment_id) {
          onSuccess();
        }
      },
      prefill: {
        email: 'user@example.com',
        contact: '1234567890',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return <button onClick={handlePayment}>Pay Now</button>;
};

export default RazorpayCheckout;
