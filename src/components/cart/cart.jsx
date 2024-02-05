import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart }) => {


  return (
    <div className="Cart">
      <div>
        <h1>Mina Beställningar</h1>
      </div>
      <div className="cartItems">
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data = {product} />;
          }
          
        })}
      </div>
    </div>
  );
}

export default Cart;
        
