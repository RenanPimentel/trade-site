import './PageContainer.css';

import PagePortion from '../PagePortion/PagePortion';
import ItemsPage from '../ItemsPage/ItemsPage';

import { useState } from 'react';

function PageContainer() {
  const [discordHTML] = useState('<a target="_blank" href="https://discord.gg/VwBXhW89">Join our discord</a>');
  const [aboutUsHTML] = useState('<p>Nosso sistema de vendas se baseia em simplesmente suprir a necessidade do cliente, na qual o cliente pede o item e o vendemos exclusivamente<p/>');

  return (
    <div className="container">
      <ItemsPage />
      <PagePortion name="discord" html={discordHTML} />
      <PagePortion name="about-us" html={aboutUsHTML} />
    </div>
  );
}

export default PageContainer;
