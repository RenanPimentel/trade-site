import './Navigator.css';

import NavigatorItem from '../NavigatorItem/NavigatorItem';
import Cart from '../Cart/Cart';

function Navigator({ items, ...props }) {
  return (
    <nav className="navigator">
      <div className="logo">
        logo
      </div>
      <div className="nav-items">
        {items.map((item, index) => <NavigatorItem {...item} key={index}/>)}
      </div>
      <Cart {...props} />
    </nav>
  );
}

export default Navigator;
