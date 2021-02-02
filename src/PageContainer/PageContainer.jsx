import PagePortion from '../PagePortion/PagePortion';
import ItemsPage from '../ItemsPage/ItemsPage';

import { useState } from 'react';

function PageContainer() {
  const [discordHTML, ] = useState('<a target="_blank" href="https://discord.gg/VwBXhW89">Join our discord</a>');
  const [aboutUsHTML, ] = useState('Nosso sistema de vendas se baseia em simplismente suprir a necessidade do cliente, na qual o cliente pede o item e o vendemos exclusivamente');

  return (
    <div className="container">
      <ItemsPage />
      <PagePortion name="discord" html={discordHTML} />
      <PagePortion name="about-us" html={aboutUsHTML} />
    </div>
  );
}

export default PageContainer;
