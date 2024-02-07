import React, { useState } from "react";
import "../index.css";
import CheckoutCart from "../components/checkoutCart";


const Checkout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [socialSecurityNumber, setSocialSecurityNumber] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("standard");
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

  const handleSocialSecurityNumberChange = (e) => {
    setSocialSecurityNumber(e.target.value);
  };

  const handleDeliveryOptionChange = (e) => {
    setDeliveryOption(e.target.value);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex">
        <div className="flex-1 border container mt-8 ml-10">
          <h1 className="text-3xl font-poppins mb-4">Checkout</h1>
          <form onSubmit={handleSubmit} className="max-w-md">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-poppins text-gray-600"
              >
                Namn
              </label>
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
              <label
                htmlFor="lastName"
                className="block text-sm font-poppins text-gray-600"
              >
                Efternamn
              </label>
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
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-poppins text-gray-600"
              >
                Mobilnummer
              </label>
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
              <label
                htmlFor="socialSecurityNumber"
                className="block text-sm font-poppins text-gray-600"
              >
                Personnummer
              </label>
              <input
                type="text"
                id="socialSecurityNumber"
                value={socialSecurityNumber}
                onChange={handleSocialSecurityNumberChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="deliveryOption"
                className="block text-sm font-poppins text-gray-600"
              >
                Välj Leveranssätt
              </label>
              <select
                id="deliveryOption"
                value={deliveryOption}
                onChange={handleDeliveryOptionChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              >
                <option value="standard">Standard Leverans</option>
                <option value="express">Express Leverans</option>
              </select>
            </div>
            <button
              type="submit"
              className="font-poppins bg-blue hover:bg-cyan text-white p-2 rounded-md"
            >
              Beställ
            </button>
          </form>

          {}
        </div>
        <div className="flex-1">
        <CheckoutCart />
      </div>
      </div>

    </>
  );
};

export default Checkout;
