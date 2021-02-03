import items from '../items.json';

import { useState, useEffect } from 'react';

function ItemsPage() {
  const [inputValue, setInputValue] = useState('');
  const [skins, setSkins] = useState();

  useEffect(() => filterSkins(inputValue), [inputValue]);

  const filterSkins = name => setSkins(
    items.filter(item => item.name.includes(name))
    .map(item => `
      <div class="trade-item">
        <img src="${item.img}" alt="${item.name} image"></img>
        <div class="item">${item.name}</div>
        <button class="add-to-cart-btn">+ Add to Cart</button>
      </div>
    `).join('')
    );

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
      <div className="wrapper"
        dangerouslySetInnerHTML={{__html: skins}}>
      </div>
      <div className="line"></div>
    </div>
    </>
  );
}

export default ItemsPage;
