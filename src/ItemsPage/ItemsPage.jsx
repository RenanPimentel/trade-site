import './ItemsPage.css';

import itemsJson from '../items.json';

import { useState, useEffect } from 'react';

function ItemsPage({ filterSkins, skins, setSkins, addToCart, sentToCart }) {
  const [inputValue, setInputValue] = useState('');
  
  useEffect(() => filterSkins(inputValue), [inputValue]);

  const filterAllSkins = values => {
    if (!values.length) {
      setSkins(itemsJson
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
            dangerouslySetInnerHTML={{ __html: values[index] 
              ? name.replace(values[index], `<span style="background: yellow">${values[index]}</span>`)
              : name }}>
          </p>
        </div>
      </div>
    ));
      return;
    }

    setSkins(
      itemsJson
      .filter(item => values.includes(item.name) || values.includes(item.category))
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
            dangerouslySetInnerHTML={{ __html: values[index] 
              ? name.replace(values[index], `<span style="background: yellow">${values[index]}</span>`)
              : name }}>
          </p>
        </div>
      </div>
    ));
  };

  const handleInputChange = () => {
    const filters = [...document.querySelectorAll('.filter-input')];
    const filtersActive = filters.filter(filter => filter.checked);
    filterAllSkins(filtersActive.map(filter => filter.previousElementSibling.textContent));
  };

  const changeLabelColor = e => e.target.classList.toggle('active');
  
  const categories = [...new Set(itemsJson.map(item => item.category))];
  
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
          {categories.map((item, index) =>
            <div key={index}>
              <label
                onClick={e => changeLabelColor(e)}
                htmlFor={item + 'Input'}>{item}</label>
              <input
                className="filter-input"
                id={item + 'Input'}
                type="checkbox" 
                onChange={handleInputChange}
              />
            </div>)}
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
