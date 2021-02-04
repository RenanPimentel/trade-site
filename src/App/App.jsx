import './App.css';

import Navigator from '../Navigator/Navigator';
import PageContainer from '../PageContainer/PageContainer';

function App() {
  const items = [
    { name: 'Itens', href: '#items' },
    { name: 'Contato', href: '#discord' },
    { name: 'Sobre nós', href: '#about-us' }
  ];

  return (
    <>
      <Navigator items={items} />
      <PageContainer items={items} />
    </>
  );
}

export default App;
