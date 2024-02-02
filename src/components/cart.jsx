
import "../index.css";
import Products from "../pages/Products";

import React from 'react';

const Cart = () => {
  
  const [cartItems, setCartItems] = React.useState([]);

  
  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Kundvagn</h2>
      {cartItems.length === 0 ? (
        <p>Kundvagn är tom</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Pris: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
            </div>
          ))}
          <p>Totalt: ${calculateTotalPrice()}</p>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;