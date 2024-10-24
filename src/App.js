import Header from './components/Header';
import Cart from './components/Cart';
import Card from './components/Card';
import { useState } from 'react';

function App() {

const [cartView, setCartView] = useState(false);

const overlayView = (cartView) => {
  cartView = setCartView(true);
}

  return (
    <div className="wrapper">
      <Cart 
        cartView={cartView}
        setCartView={() => setCartView()}
      />
      <Header 
        clickCart = {() => overlayView()}
      />
      <main>
        {/* <img src="/img/banner.png" className="banners" alt="banner 1" /> */}
        <div className="containerTitle">
          <h1>Все кроссовки</h1>
          <div className="searchContainer">
            <img
              src="/img/search.svg"
              className="searchIcon"
              alt="icon search"
            />
            <input className="search" placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="sneakersWrapper">
          <ul>
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
