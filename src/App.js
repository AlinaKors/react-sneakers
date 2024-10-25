import Header from './components/Header';
import Cart from './components/Cart';
import Card from './components/Card';
import { useState, useEffect } from 'react';

function App() {
const [cartView, setCartView] = useState(false);
const [sneakers, setSneakers] = useState([]);

useEffect(() => {fetch('https://66b4e09a9f9169621ea4b1d9.mockapi.io/products')
.then(res => res.json())
.then(rezult => setSneakers(rezult))}, []);

const overlayView = () => {
  setCartView(true);
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
            {sneakers.map((item) => 
              <Card
                key={item.id}
                name={item.title}
                src={item.src}
                price={item.price}
              />
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
