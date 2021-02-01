import './App.css';

import Navigator from './Navigator';
import PagePortion from './PagePortion';

function App() {
  return (
    <>
      <div className="fade"></div>
      <Navigator />
      <div className="container">
      <PagePortion name="items" />
      <PagePortion name="discord" />
      <PagePortion name="about-us" />
      </div>
    </>
  );
}

export default App;
