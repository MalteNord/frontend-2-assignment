import React, { useState, useRef } from "react";
import "../index.css";
import CheckoutCart from "../components/checkoutCart";
import emailjs from '@emailjs/browser';


const Checkout = () => {
  const form = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardOwner, setCreditCardOwner] = useState("");
  const [creditCardDate, setCreditCardDate] = useState("");
  const [creditCardCVV, setCreditCardCVV] = useState("");
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
  const handleCreditCardCVV = (e) => {
    setCreditCardCVV(e.target.value);
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
        <div className="flex-1 container mt-8 ml-20 rounded-3xl shadow-lg shadow-gray">
          <h1 className="text-3xl font-poppins mb-4 p-5">Checkout</h1>
            <form onSubmit={handleSubmit} className="max-w-md">
              <div>
                <div className="mb-4 pl-5">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-poppins text-gray-600"
                  >
                    Förnamn
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Förnamn"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
                <div className="mb-4 pl-5">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-poppins text-gray-600"
                  >
                    Efternamn
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Efternamn"
                    value={lastName}
                    onChange={handleLastNameChange}
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
                <div className="mb-4 pl-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-poppins text-gray-600"
                  >
                    E-postadress
                  </label>
                  <input
                    type="email"
                    placeholder="example@example.com"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
                <div className="mb-4 pl-5">
                  <label
                    htmlFor="address"
                    className="block text-sm font-poppins text-gray-600"
                  >
                    Adress
                  </label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Adress"
                    value={address}
                    onChange={handleAddress}
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
                <div className="mb-4 pl-5">
                  <label
                    htmlFor="postalCode"
                    className="block text-sm font-poppins text-gray-600"
                  >
                    Postnummer
                  </label>
                  <input
                    type="text"
                    placeholder="1234 56"
                    maxLength="7"
                    id="postalCode"
                    value={postalCode}
                    onChange={handlePostalCode}
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
              </div>
              <div className="pt-10">                                 
                <div className="mb-4 pl-5">
                  <label
                    htmlFor="creditCardNumber"
                    className="block text-sm font-poppins text-gray-600"
                  >
                    Kortnummer
                  </label>
                  <input
                    type="text"
                    placeholder="XXXX XXXX XXXX XXXX"
                    maxLength="19"
                    id="creditCardNumber"
                    pattern="[0-9]{13,16}"
                    inputMode="numeric"
                    value={creditCardNumber}
                    onChange={handleCreditCardNumber}
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
                <div className="mb-4 pl-5">
                  <label
                    htmlFor="creditCardOwner"
                    className="block text-sm font-poppins text-gray-600"
                  >
                    Kortinnehavare
                  </label>
                  <input
                    type="text"
                    placeholder="Förnamn Efternamn"
                    id="creditCardOwner"
                    value={creditCardOwner}
                    onChange={handleCreditCardOwner}
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
                <div className="flex p-3 space-x-10" >
                  <div className="mb-4 pl-5">
                    <div>
                    <label
                      htmlFor="creditCardDate"
                      className="block text-sm font-poppins text-gray-600"
                    >
                      Utgångsdatum
                    </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        id="creditCardDateMonth"
                        inputMode="numeric"
                        value={creditCardDate}
                        onChange={handleCreditCardDate}
                        className="mt-1 p-2 border rounded-md w-full"
                        maxLength={5}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4 pl-5">
                    <label
                      htmlFor="creditCardCVC"
                      className="block text-sm font-poppins text-gray-600"
                    >
                      CVV
                    </label>
                    <input  
                      type="text"
                      maxLength="3"
                      placeholder="XXX"
                      id="creditCardCVV"
                      inputMode="numeric"
                      value={creditCardCVV}
                      onChange={handleCreditCardCVV}
                      className="mt-1 p-2 border rounded-md w-full"
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
            <div className="flex-1">
              <CheckoutCart />
          </div>
        </div>
    </>
  );
};

export default Checkout;
