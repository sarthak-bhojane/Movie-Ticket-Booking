import React, { useState } from 'react';

const Payment = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleChange} required />
      <input type="text" name="expiryDate" placeholder="Expiry Date" onChange={handleChange} required />
      <input type="text" name="cvv" placeholder="CVV" onChange={handleChange} required />
      <button type="submit">Pay</button>
    </form>
  );
};

export default Payment;
