import './App.css';

import Navigator from './Navigator';
import PagePortion from './PagePortion';
import items from './items.json';

const itemsHTML = 
  items.map(item => `<img src=${item.img}></img> ${item.name}`).join('');

const discordHTML = 
  '<a target="_blank" href="https://discord.gg/VwBXhW89">Join our discord</a>';

const aboutUsHTML = 'Nosso sistema de vendas se baseia em simplismente suprir a necessidade do cliente, na qual o cliente pede o item e o vendemos exclusivamente';

function App() {
  return (
    <>
      <div className="fade"></div>
      <Navigator />
      <div className="container">
      <PagePortion name="items" html={itemsHTML} />
      <PagePortion name="discord" html={discordHTML} />
      <PagePortion name="about-us" html={aboutUsHTML}/>
      </div>
    </>
  );
}

export default App;
