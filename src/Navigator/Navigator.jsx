import './Navigator.css';

import NavigatorItem from '../NavigatorItem/NavigatorItem';
import Cart from '../Cart/Cart';

function Navigator({ items }) {
  const cartItems = {  };

  return (
    <nav className="navigator">
      <div className="logo">
        logo
      </div>
      <div className="nav-items">
        {items.map((item, index) => <NavigatorItem {...item} key={index}/>)}
      </div>
      <Cart cartItems={cartItems} />
    </nav>
  );
}

export default Navigator;
