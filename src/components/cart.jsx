import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'produkt 1',
      price: 10,
      quantity: 1
    },
    {
      id: 2,
      name: 'produkt 2',
      price: 20,
      quantity: 2
    },
    {
      id: 3,
      name: 'produkt 3',
      price: 30,
      quantity: 3
    }
  ]);

  const handleIncrement = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += calculateItemTotal(item);
    });
    return total;
  };

  const handleEmptyCart = () => {
    setCartItems([]);
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-semibold mb-4">Din Kundvagn</h2>
        <p className="text-gray-600">Kundvagnen är tom.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-semibold mb-4">Din Kundvagn</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mt-4">
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-gray-600">${item.price}</p>
          </div>
          <div className="flex items-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
              onClick={() => handleDecrement(item.id)}
            >
              -
            </button>
            <p>{item.quantity}</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-2"
              onClick={() => handleIncrement(item.id)}
            >
              +
            </button>
          </div>
          <p>${calculateItemTotal(item)}</p>
        </div>
      ))}

      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-600">Totalbelopp :</p>
        <p className="text-xl font-semibold">${calculateTotal()}</p>
      </div>

      <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-4"
        onClick={handleEmptyCart}
      >
        Kundvagn är tom 
      </button>

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4">
        Checkout 
      </button>
    </div>
  );
};

export default Cart;