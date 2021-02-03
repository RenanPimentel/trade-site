import './Navigator.css';

import NavigatorItem from '../NavigatorItem/NavigatorItem';
import Cart from '../Cart/Cart';

const items = [
  { name: 'Itens', href: '#items' },
  { name: 'Contato', href: '#discord' },
  { name: 'Sobre nós', href: '#about-us' }
];


function Navigator() {
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
