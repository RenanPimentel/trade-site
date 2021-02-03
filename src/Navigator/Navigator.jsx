import './Navigator.css';

import NavigatorItem from '../NavigatorItem/NavigatorItem';
import Cart from '../Cart/Cart';

const items = [
  { name: 'Items', href: '#items' },
  { name: 'Discord', href: '#discord' },
  { name: 'About us', href: '#about-us' }
];


function Navigator() {
  const cartItems = {  };
  
  return (
    <nav className="navigator">
      {items.map((item, index) => <NavigatorItem {...item} key={index}/>)}
      <Cart cartItems={cartItems} />
    </nav>
  );
}

export default Navigator;
