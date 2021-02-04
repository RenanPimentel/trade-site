import './ItemsPage.css';

import { useState, useEffect } from 'react';

function ItemsPage({ filterSkins, skins, setSkins, addToCart }) {
  const [inputValue, setInputValue] = useState('');
  
  useEffect(() => filterSkins(inputValue), [inputValue]);
    
  return (
    <div className="container-item">
      <h1 id="itens">Itens</h1>
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
