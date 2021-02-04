import './ItemsPage.css';

import items from '../items.json';
import { useState, useEffect } from 'react';

function ItemsPage() {
  const [inputValue, setInputValue] = useState('');
  const [skins, setSkins] = useState();
  
  const addToCart = tradeItem => {
    const toAddItem = items.find(item => 
      item.name === tradeItem.querySelector('.item-name').textContent);
      console.log(toAddItem);
      return toAddItem;
    };
    
    const filterSkins = input => {
      setSkins(items
        .filter(({ name, category }) => 
        name.includes(input.trim()) || category.includes(input.trim()))
        .map(({ name, img, category }, index) =>
        <div className="trade-item" key={index}>
          <img 
            onClick={e => addToCart(e.target.parentElement)}
            src={img} 
            alt={name + ' image'} 
            title={`${name} (${category})`}></img>
          <div className="item">
            <p className="item-name" style={{ display: 'none' }}
              dangerouslySetInnerHTML={{ __html: input 
                ? name.replace(input, `<span style="background: yellow">${input}</span>`)
                : name }}>
            </p>
          </div>
        </div>
      ));
    }
    
    useEffect(() => filterSkins(inputValue), [inputValue]);
    
  return (
    <div className="container-item">
      <h1>Itens</h1>
      <div className="filters">
        <input
          placeholder="ache sua skin!"
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <div className="btn-filters">
          <button onClick={e => filterSkins(e.target.textContent)}>carro</button>
          <button onClick={e => filterSkins(e.target.textContent)}>decal</button>
          <button onClick={e => filterSkins(e.target.textContent)}>roda</button>
          <button onClick={() => filterSkins('')}>tudo</button>
        </div>
      </div>
      <div className="wrapper">
        {skins?.length
          ? skins
          : <p style={{ color: 'red' }}>Desculpe! não vendemos esse item.</p>}
      </div>
    </div>
  );
}

export default ItemsPage;
