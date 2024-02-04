import React, { useState } from 'react';
import "../index.css"


const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cart, setCart] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  
  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-poppins mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-poppins text-gray-600">Namn</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-poppins text-gray-600">Email</label>
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
          <label htmlFor="address" className="block text-sm font-poppins text-gray-600">Address</label>
          <textarea
            id="address"
            value={address}
            onChange={handleAddressChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          ></textarea>
        </div>
        <button type="submit" className="font-poppins bg-blue hover:bg-cyan text-white p-2 rounded-md">Beställ</button>
      </form>

      <h2 className="text-2xl font-bold mt-8">Kundvagn</h2>
      {cart.length === 0 ? (
        <p className="mt-4">Kundvagn är tom</p>
      ) : (
        <ul className="mt-4">
          {cart.map((item, index) => (
            <li key={index} className="mb-2">
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8">
        <button
          onClick={() => handleAddToCart({ name: 'Product 1', price: '300kr' })}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
           Lägg till produkt 1
        </button>
        <button
          onClick={() => handleAddToCart({ name: 'Product 2', price: '200kr' })}
          className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4"
        >
          Lägg till produkt 2 
        </button>
      </div>
    </div>
  );
}
      

      
     

export default Checkout;

    
  


