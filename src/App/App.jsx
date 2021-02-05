import './App.css';
import itemsJson from '../items.json';

import Navigator from '../Navigator/Navigator';
import PageContainer from '../PageContainer/PageContainer';
import { useState } from 'react';

function App() {
  const [skins, setSkins] = useState([]);
  const items = [
    { name: 'Itens', href: '#itens' },
    { name: 'Contato', href: '#contato' },
    { name: 'Sobre nós', href: '#sobre-nós' }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = tradeItem => {
    const toAddItem = itemsJson.find(item => 
      item.name === tradeItem.querySelector('.item-name').textContent);
    return toAddItem;
  };

  const sentToCart = name => {
    cart.push(itemsJson.find(item => item.name === name));
    setCart([...cart]);
  };
  
  const filterSkins = input => {
    setSkins(itemsJson
      .filter(({ name, category }) => 
        name.includes(input.trim()) || category.includes(input.trim()))
      .map(({ name, img, category }, index) =>
      <div 
        key={index}
        className="trade-item" 
        onClick={() => sentToCart(name)}
      >
        <img 
          onClick={e => addToCart(e.target.parentElement)}
          src={img} 
          alt={name + ' image'}
          title={`${name} (${category})`}></img>
        <div className="item">
          <p className="item-name" style={{ display: 'none' }}
            dangerouslySetInnerHTML={{ __html: input 
              ? name.replace(input,
                `<span style="background: yellow">${input}</span>`)
              : name }}>
          </p>
        </div>
      </div>
    ));
  };
  
  const pageContainerProps = { items, skins, filterSkins };
  return (
    <>
      <Navigator cart={cart} setCart={setCart} {...pageContainerProps} />
      <PageContainer 
        {...pageContainerProps}
        sentToCart={sentToCart}
        setSkins={setSkins}
        addToCart={addToCart}
      />
    </>
  );
}

export default App;
