import React, { useState } from "react";
import "../index.css";
import CheckoutCart from "../components/checkoutCart";


const Checkout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardOwner, setCreditCardOwner] = useState("");
  const [creditCardDate, setCreditCardDate] = useState("");
  const [creditCardCVC, setCreditCardCVC] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCreditCardNumber= (e) => {
    setCreditCardNumber(e.target.value);
  };
  const handleCreditCardOwner = (e) => {
    setCreditCardOwner(e.target.value);
  };
  const handleCreditCardDate = (e) => {
    setCreditCardDate(e.target.value);
  };
  const handleCreditCardCVC = (e) => {
    setCreditCardCVC(e.target.value);
  };
  const handlePostalCode = (e) => {
    setPostalCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex">
        <div className="flex-1 container mt-8 ml-20">
          <h1 className="text-3xl font-poppins mb-4">Checkout</h1>
          <form onSubmit={handleSubmit} className="max-w-md">
            <div>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-poppins text-gray-600"
              >
                Förnamn
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
                htmlFor="email"
                className="block text-sm font-poppins text-gray-600"
              >
                E-postadress
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-poppins text-gray-600"
              >
                Adress
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={handleAddress}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="postalCode"
                className="block text-sm font-poppins text-gray-600"
              >
                Postnummer
              </label>
              <input
                type="text"
                id="postalCode"
                value={postalCode}
                onChange={handlePostalCode}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            </div>
            <div className="">
            <div className="mb-4">
              <label
                htmlFor="creditCardNumber"
                className="block text-sm font-poppins text-gray-600"
              >
                Kortnummer
              </label>
              <input
                type="text"
                id="creditCardNumber"
                value={creditCardNumber}
                onChange={handleCreditCardNumber}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="creditCardOwner"
                className="block text-sm font-poppins text-gray-600"
              >
                Kortinnehavare
              </label>
              <input
                type="text"
                id="creditCardOwner"
                value={creditCardOwner}
                onChange={handleCreditCardOwner}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="creditCardDate"
                className="block text-sm font-poppins text-gray-600"
              >
                Utgångsdatum
              </label>
              <input
                type="text"
                id="creditCardDate"
                value={creditCardDate}
                onChange={handleCreditCardDate}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="creditCardCVC"
                className="block text-sm font-poppins text-gray-600"
              >
                CVC
              </label>
              <input  
                type="text"
                id="creditCardCVC"
                value={creditCardCVC}
                onChange={handleCreditCardCVC}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            </div>
            
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
