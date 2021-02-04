import './ItemsPage.css';
import { useState, useEffect } from 'react';

import itemsFromJson from '../items.json';
const itemsJson = itemsFromJson
  .sort((a, b) => a.category > b.category ? 1 : -1);

function ItemsPage({ skins, setSkins, addToCart, sentToCart }) {
  const [inputValue, setInputValue] = useState('');
  
  useEffect(() => filterSkins(inputValue), [inputValue]);

  const filterSkins = input => {
    const filtersLabel = [...document.querySelectorAll('label.active')]

    setSkins(itemsJson
      .filter(item => filtersLabel.length 
        ? filtersLabel.map(filter => filter.textContent).includes(item.category)
        : true)
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

  const filterAllSkins = values => {
    if (!values.length) {
      setSkins(itemsJson
        .filter(item => item.name.includes(inputValue)
          || item.category.includes(inputValue))
        .map(({ name, img, category }, i) =>
          <div 
            key={i}
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
                dangerouslySetInnerHTML={{ __html: values[i] 
                  ? name.replace(values[i], 
                      `<span style="background: yellow">${values[i]}</span>`)
                  : name }}>
              </p>
            </div>
          </div>
      ));
      return;
    }

    setSkins(
      itemsJson
      .filter(item => item.name.includes(inputValue) 
        || item.category.includes(inputValue))
      .filter(item => values.includes(item.name)
        || values.includes(item.category))
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
                ? name.replace(values[index], 
                    `<span style="background: yellow">${values[index]}</span>`)
                : name }}>
            </p>
          </div>
      </div>
    ));
  };

  const handleInputChange = () => {
    const filters = [...document.querySelectorAll('.filter-input')];
    const filtersActive = filters.filter(filter => filter.checked);
    filterAllSkins(filtersActive.map(filter =>
      filter.previousElementSibling.textContent));
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
