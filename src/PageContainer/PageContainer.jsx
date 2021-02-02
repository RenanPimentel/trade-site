import PagePortion from '../PagePortion/PagePortion';
import items from '../items.json';

import { useState } from 'react';

function PageContainer() {
  const [itemsHTML, ] = useState(
    items
      .map(item => `<div class="trade-item"><img src=${item.img}></img> ${item.name}</div>`)
      .join('')
  );
  const [discordHTML, ] = useState('<a target="_blank" href="https://discord.gg/VwBXhW89">Join our discord</a>');
  const [aboutUsHTML, ] = useState('Nosso sistema de vendas se baseia em simplismente suprir a necessidade do cliente, na qual o cliente pede o item e o vendemos exclusivamente');

  return (
    <div className="container">
      <PagePortion name="items" html={itemsHTML} />
      <PagePortion name="discord" html={discordHTML} />
      <PagePortion name="about-us" html={aboutUsHTML} />
    </div>
  );
}

export default PageContainer;
