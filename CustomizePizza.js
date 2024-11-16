import React from 'react';
import PizzaCustomizationForm from '../components/PizzaCustomizationForm';
import RazorpayCheckout from '../components/RazorpayCheckout';

const CustomizePizza = () => {
  const handleOrderSubmit = (pizzaDetails) => {
    console.log('Pizza details:', pizzaDetails);
  };

  const handlePaymentSuccess = () => {
    console.log('Payment successful! Order placed.');
  };

  return (
    <div>
      <h2>Customize Your Pizza</h2>
      <PizzaCustomizationForm onSubmit={handleOrderSubmit} />
      <RazorpayCheckout amount={50000} onSuccess={handlePaymentSuccess} />
    </div>
  );
};

export default CustomizePizza;
