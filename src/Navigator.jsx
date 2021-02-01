import './Navigator.css';

import NavigatorItem from './NavigatorItem';

function Navigator() {
  const items = [
    { name: 'Items', href: '#items' },
    { name: 'About us', href: '#about-us' },
    { name: 'Discord', href: '#discord' }
  ];

  return (
    <nav className="navigator">
      {items.map((item, index) => <NavigatorItem {...item} key={index}/>)}
    </nav>
  );
}

export default Navigator;
