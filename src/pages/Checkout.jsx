import React, { useState } from 'react';

const Checkout = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('standard');
  const [paymentOption, setPaymentOption] = useState('creditCard');
  const [personalNumber, setPersonalNumber] = useState('');
  const [cart, setCart] = useState([]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleDeliveryOptionChange = (e) => {
    setDeliveryOption(e.target.value);
  };

  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const handlePersonalNumberChange = (e) => {
    setPersonalNumber(e.target.value);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    // ...

    // Prepare the data to be submitted
    const formData = {
      firstName,
      lastName,
      phoneNumber,
      deliveryOption,
      paymentOption,
      personalNumber,
      cart,
    };

    // Submit the form data to your backend or process it further
    console.log(formData);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-poppins mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-poppins text-gray-600">Förnamn</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-poppins text-gray-600">Efternamn</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-poppins text-gray-600">Mobilnummer</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="personalNumber" className="block text-sm font-poppins text-gray-600">Personnummer</label>
          <input
            type="text"
            id="personalNumber"
            value={personalNumber}
            onChange={handlePersonalNumberChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="deliveryOption" className="block text-sm font-poppins text-gray-600">Leveranssätt</label>
          <select
            id="deliveryOption"
            value={deliveryOption}
            onChange={handleDeliveryOptionChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          >
            <option value="standard">Standard</option>
            <option value="express">Express</option>
          </select>
        </div>
        {/* ... */}
        <div className="mb-4">
          <label htmlFor="paymentOption" className="block text-sm font-poppins text-gray-600">Betalningsalternativ</label>
          <select
            id="paymentOption"
            value={paymentOption}
            onChange={handlePaymentOptionChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          >
            <option value="creditCard">Kreditkort</option>
            <option value="bankTransfer">Banköverföring</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit"className="font-poppins bg-blue hover:bg-cyan text-white p-2 rounded-md">Betala köp</button>
      </form>
    </div>
  );
}

export default Checkout;