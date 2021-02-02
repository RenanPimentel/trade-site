import './Navigator.css';

import NavigatorItem from '../NavigatorItem/NavigatorItem';

function Navigator() {
  const items = [
    { name: 'Items', href: '#items' },
    { name: 'Discord', href: '#discord' },
    { name: 'About us', href: '#about-us' },
  ];

  return (
    <nav className="navigator">
      {items.map((item, index) => <NavigatorItem {...item} key={index}/>)}
    </nav>
  );
}

export default Navigator;
