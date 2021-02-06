import './CartItem.css';

import React, { useState, useEffect } from 'react';

function Cart({ name, removeCartItem, cart, setCart }) {
  useEffect(() => setCart([...new Set(cart)]), []);
  
  return (
    <>
      <div className="cart-item">
        <p>{name}</p>
        <button
          onClick={e =>
            removeCartItem(e.target.previousElementSibling.textContent)}
        >x</button>
      </div>
    </>
  );
}

export default Cart;
