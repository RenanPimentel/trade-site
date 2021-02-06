import './Cart.css';

import React, { useState, useEffect } from 'react'

import CartItem from '../CartItem/CartItem';

function Cart({ cart, setCart }) {
  const toggleContent = e => {
    e.target.parentElement.classList.toggle('active');
  };

  const removeCartItem = name => 
    setCart(cart.filter(skin => skin.name !== name));

  return (
    <>
    <div className="cart-holder"></div>
    <div className="cart">
      <button onClick={e => toggleContent(e)}>cart</button>
      <div className="arrow"></div>
      <div className="cart-content-container">
        {cart.map((item, index) => <div className="cart-item-content" key={index}>
          <CartItem {...item}
            removeCartItem={removeCartItem}
            setCart={setCart}
            cart={cart}
          />
          <div className="cart-item-separator"></div>
        </div>)}
      </div>
    </div>
    </>
  );
}

export default Cart;
