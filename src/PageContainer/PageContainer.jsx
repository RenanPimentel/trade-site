import './PageContainer.css';

import PagePortion from '../PagePortion/PagePortion';
import ItemsPage from '../ItemsPage/ItemsPage';

import { useState } from 'react';

function PageContainer(props) {
  const [discordHTML] = useState('<a target="_blank" href="https://discord.gg/9v5FEEYQDk">Entre em nosso discord!</a>');
  const [aboutUsHTML] = useState('<p>Nosso sistema de vendas se baseia em simplesmente suprir a necessidade do cliente, na qual o cliente pede o item e o vendemos exclusivamente.</p>');
  return (
    <div className="container">
      <ItemsPage {...props} />
      <PagePortion name="contato" html={discordHTML} />
      <PagePortion name="sobre-nós" html={aboutUsHTML} />
    </div>
  );
}

export default PageContainer;
