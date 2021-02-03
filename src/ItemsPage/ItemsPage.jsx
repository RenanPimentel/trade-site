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
      .filter(item => item.name.includes(input))
      .map((item, index) =>
        <div className="trade-item" key={index}>
          <img src={item.img} alt={item.name + ' image'}></img>
          <div className="item">
            <p className="item-class">
              {item.category}
            </p>
            <p className="item-name"
              dangerouslySetInnerHTML={{ __html: input ? item.name.replace(input, `<span style="background: yellow">${input}</span>`) : item.name }}>
            </p>
          </div>
          <button 
            className="add-to-cart-btn"
            onClick={e => addToCart(e.target.parentElement)}
          >+ Add to Cart</button>
        </div>
      )
    );
  }

  return (
    <>
    <div className="container-item">
      <h1>Items</h1>
      <input
        placeholder="filter skins"
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <div className="wrapper">
        {skins}
      </div>
      <div className="line"></div>
    </div>
    </>
  );
}

export default ItemsPage;
