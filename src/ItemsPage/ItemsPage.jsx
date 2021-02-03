import './ItemsPage.css';

import items from '../items.json';
import { useState, useEffect } from 'react';

function ItemsPage() {
  const [inputValue, setInputValue] = useState('');
  const [skins, setSkins] = useState();
  
  useEffect(() => filterSkins(inputValue), [inputValue]);
  
  const addToCart = tradeItem => {
    const toAddItem = items.find(item => 
      item.name === tradeItem.querySelector('.item-name').textContent);
    console.log(toAddItem);
    return toAddItem;
  };
  
  const filterSkins = input => {
    setSkins(items
      .filter(item => item.name.includes(input) || item.category.includes(input))
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
      )
    );
  }

  return (
    <>
    <div className="container-item">
      <h1>Items</h1>
      <div className="filters">
        <input
          placeholder="filter skins"
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <div className="btn-filters">
        <button>carro</button>
        <button>carro</button>
        <button>carro</button>
        </div>
      </div>
      <div className="wrapper">
        {skins}
      </div>
    </div>
    </>
  );
}

export default ItemsPage;
